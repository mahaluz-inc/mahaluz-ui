import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { getActivityTypes } from '../../src/services/activity.service';
import TimePicker from '../../src/components/TimePicker/TimePicker.component';
import Map from '../../src/components/Map/Map.component';
import { Switch, AutoComplete, Input } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import classnames from 'classnames';
import { autocompletePlaces, getPlaceBusyHours } from '../../src/services/places.service';
import _ from "lodash";

export default function ActivitiesAdd({ activityTypes }) {
	const [usePlace, setUsePlace] = useState(false);
	const [time, setTime] = useState();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [activityType, setActivityType] = useState();
	const [placesOptions, setPlacesOptions] = useState([]);
	const [selectedPlace, setSelectedPlace] = useState();

	const onSearchPlaces = _.debounce(async (searchText) => {
		const places = searchText ? 
			await autocompletePlaces(searchText)
			: [];
		setPlacesOptions(places.map(place => ({
			label: place.description,
			value: place.place_id
		})));
	}, 300);

	const addActivity = () => {
		console.log({
			time,
			title,
			description,
			activityType,
			selectedPlace
		});
	};

	const onPlaceSelected = async (value) => {
		const place = await getPlaceBusyHours(value.value);
		console.log({ value, place });
		setSelectedPlace({
			...place,
			label: value.label
		});
	};

	return (
		<div className="overflow-y-auto w-screen h-screen h-m-screen add-activity-screen-container text-white">
			<div className="flex flex-col pt-4 px-8 text-2xl add-activities-header relative">
				<Link href="/activities" className="w-fit">
					<FontAwesomeIcon icon={faXmark} />
				</Link>
				<div className="mt-2">כותרת</div>
				<input 
					value={title}
					onChange={e => setTitle(e.target.value)}
					className="add-activity-input mt-2 rounded-md p-2" 
					placeholder="הכנס פה את הכותרת..."
				/>
			</div>
			<div className="add-activity-form-container px-8">
				<div className="text-2xl font-medium mb-2">
					הגדר זמן
				</div>
				<div>
					<TimePicker
						onChange={value => setTime(value)}
						value={time}
					/>
				</div>
				<div className="text-2xl font-medium mt-8 mb-2">
					תיאור
				</div>
				<div>
					<textarea 
						onChange={e => setDescription(e.target.value)}
						value={description}
						className="add-activity-description-input rounded-md p-2"
						placeholder="הכנס פה את התיאור..."
					/>
				</div>
				<div className="text-2xl font-medium mt-8 mb-2">
					סוג פעילות
				</div>
				<div className="flex justify-between mt-2">
					{activityTypes.map(currentActivityType => 
						<div 
							key={currentActivityType.id} 
							className={classnames(
								"add-activity-type flex flex-col items-center justify-center p-2",
								{ "active": currentActivityType.id === activityType }
							)}
							onClick={() => setActivityType(currentActivityType.id)}
						>
							<img src={currentActivityType.img} className="add-activity-type-img" />
							<div className="text-center">{currentActivityType.text}</div>
						</div>
					)}
				</div>
				<div className="mt-8 mb-2 flex items-center">
					<div className="text-2xl font-medium ml-2">מיקום</div>
					<Switch checked={usePlace} onChange={checked => setUsePlace(checked)} />
				</div>
				{usePlace && (
					<div>
						<AutoComplete
							allowClear
							className="w-full"
							options={placesOptions}
							onSelect={(id, value) => onPlaceSelected(value)}
							onSearch={onSearchPlaces}
							placeholder="חפש מקום..."
							value={selectedPlace?.label}
						/>
						{selectedPlace && (
							<Map
								lat={selectedPlace.coordinates.lat}
								lng={selectedPlace.coordinates.lng}
							/>
						)}
					</div>
				)}
			</div>
			<img src="/static/imgs/ca.svg" onClick={addActivity} />
		</div>
	);
}

export async function getServerSideProps() {
	const data = await getActivityTypes();

	return {
	  	props: {
			activityTypes: data
	  	}
	}
}
