import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { getActivities } from '../../src/services/activity.service';
import Link from 'next/link';

export default function ActivitiesAdd() {
	return (
		<div className="overflow-y-auto w-screen h-screen h-m-screen add-activity-screen-container text-white">
			<div className="flex flex-col pt-4 px-8 text-2xl add-activities-header relative">
				<Link href="/activities">
					<FontAwesomeIcon icon={faXmark} />
				</Link>
				<div className="mt-2">כותרת</div>
				<input className="add-activity-input mt-2 rounded-md p-2" placeholder="הכנס פה את הכותרת..." />
			</div>
			<div className="add-activity-form-container px-8">
				<div className="text-2xl">
					הגדר זמן
				</div>
				<div>
					asdasdasdasd
				</div>
				<div className="text-2xl mt-8">
					תיאור
				</div>
				<div>
					<textarea 
						className="add-activity-description-input"
						placeholder="הכנס פה את התיאור..."
					/>
				</div>
				<div className="text-2xl mt-8">
					סוג פעילות
				</div>
				<div>
					asdasdasdasd
				</div>
				<div className="text-2xl mt-8">
					מיקום
				</div>
				<div>
					asdasdasdasd
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const data = await getActivities();

	return {
	  	props: {
			activities: data
	  	}
	}
}
