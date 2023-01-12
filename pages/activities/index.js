import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getActivities } from '../../src/services/activity.service';
import Activity from "../../src/components/Activity/Activity.component";
import Link from 'next/link';
import { MONTH_TO_HEB_NAME } from "../../src/constants/date.constant";

export default function Activities({ activities }) {
	return (
		<div className="overflow-y-auto w-screen h-screen h-m-screen home-screen-container text-white">
			<div className="flex flex-col items-center pt-4 px-4 text-2xl activities-header relative">
				<Link href="/" className="activities-left-arrow">
					<FontAwesomeIcon icon={faArrowLeft} />
				</Link>
				<div>היום שלך</div>
				<div>{new Date().getFullYear()} {MONTH_TO_HEB_NAME[new Date().getMonth()]} {new Date().getDate()}</div>
			</div>
			<div className="activities-container px-8">
				{activities.map((activity, index) => 
					<Activity
						key={activity.id}
						title={activity.title}
						description={activity.description} 
						time={activity.time} 
						active={index === 0}
					/>
				)}
			</div>
			<Link href="/activities/add">
				<div className="activities-add-activity">
					<img src="/static/imgs/plus.svg" className="activities-add-activity-plus" />
					<div className="activities-add-activity-text">הוסף פעילות</div>
				</div>
			</Link>
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
