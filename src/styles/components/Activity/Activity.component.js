import classnames from "classnames";

export default function Activity({ active }) {
    return (
        <div className={classnames("p-2 max-h-20 h-20 flex items-center rounded-xl justify-between", { "bg-purple-700 ": !active, "bg-purple-600 glow-box": active })}>
            <div className="w-4/12 flex justify-center font-medium whitespace-nowrap">14:00 - 14:30</div>
            <div className="flex justify-center items-center">
                <div className="dot" />
            </div>
            <div className="w-7/12 flex flex-col justify-center items-center">
                <div className="font-medium">פגישה עם רועי ואופק</div>
                <div className="text-sm text-gray-300 text-center">קבעתי לה משהו שקשה לי לקרוא כי זה קטן...</div>
            </div>
		</div>
    );
}