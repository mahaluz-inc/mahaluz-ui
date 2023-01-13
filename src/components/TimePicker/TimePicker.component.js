import { TimePicker as AntdTimePicker } from 'antd';

const format = 'HH:mm';

export default function TimePicker(props) {
    return (
        <div>
            <AntdTimePicker.RangePicker
                {...props}
                className="w-full"
                format={format}
                minuteStep={5}
            />
		</div>
    );  
}