import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Activity from "../src/components/Activity/Activity.component";
import { getActivities } from '../src/services/activity.service';
import Link from 'next/link';

export default function Home({ activities }) {
	return (
		<div className="overflow-y-auto w-screen h-screen h-m-screen p-8 home-screen-container text-white">
			<div>
				<div className="flex justify-between items-centere text-2xl">
					<div>מה הלו"ז?</div>
					<FontAwesomeIcon icon={faBars} />
				</div>
				<div className="home-screen-image h-40 rounded-xl mt-4 relative">
					<div className="home-screen-image-text">שלום, שחר</div>
					<img src="./static/imgs/a.svg" />
				</div>
				<div className="flex justify-around pt-4 text-sm">
					<div className="time-box p-2 rounded-xl">בדיקה מהירה</div>
					<div className="time-box-main p-2 rounded-xl">הלו"ז של היום</div>
					<div className="time-box p-2 rounded-xl">המטרות שלי</div>
				</div>
				<div className="flex items-center justify-center py-4 text-xl">
					<FontAwesomeIcon icon={faAngleRight} />
					<div className="font-medium mx-8">היום</div>
					<FontAwesomeIcon icon={faAngleLeft} />
				</div>
			</div>
			<div className="activities-container">
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
			<div className="flex justify-center">
				<Link href="/activities">
					<div className="mt-2 rounded py-2 px-4 button-open-full-screen">פתח במסך מלא</div>
				</Link>
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
