import Activity from "../src/styles/components/Activity/Activity.component";

export default function Home() {
	return (
		<div className="overflow-hidden w-screen h-screen h-m-screen p-8 bg-purple-900 text-white">
			<div>
				<div className="flex justify-between text-2xl">
					<div>מה הלו"ז?</div>
					<div>#</div>
				</div>
				<div className="glow-box bg-purple-500 h-40 rounded-xl mt-4">
					Image
				</div>
				<div className="flex justify-around pt-4 text-sm">
					<div className="bg-purple-600 p-2 rounded-xl">בדיקה מהירה</div>
					<div className="bg-purple-700 p-2 rounded-xl">הלו"ז של היום</div>
					<div className="bg-purple-600 p-2 rounded-xl">המטרות שלי</div>
				</div>
				<div className="flex justify-center py-4 text-xl">
					<div>{"<"}</div>
					<div className="font-medium mx-8">היום</div>
					<div>{">"}</div>
				</div>
			</div>
			<div className="activities-container">
				<Activity active />
				<Activity />
				<Activity />
			</div>
			<div className="flex justify-center">
				<div className="mt-2 bg-purple-700 rounded py-2 px-4">פתח במסך מלא</div>
			</div>
		</div>
	);
}
