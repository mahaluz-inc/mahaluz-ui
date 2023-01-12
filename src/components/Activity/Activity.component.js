import classnames from "classnames";

export default function Activity({ active, title, description, time }) {
    return (
        <div className={classnames("p-2 max-h-20 h-20 flex items-center rounded-xl justify-between", { "activity-box": !active, "activity-box-active": active })}>
            <div className="w-4/12 flex justify-center font-medium whitespace-nowrap ltr">{time}</div>
            <div className="flex justify-center items-center">
                <div className="dot" />
            </div>
            <div className="w-7/12 flex flex-col justify-center items-center">
                <div className="font-medium">{title}</div>
                <div className="text-sm text-gray-300 text-center">{description}</div>
            </div>
		</div>
    );  
}