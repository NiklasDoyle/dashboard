import { useEffect, useState } from "react";
import DateTimeContainer from "./DateTimeContainer";

const addZero = (num: number) => {
    return num < 10 ? '0' + 1 : `${num}`;
}

function Clock() {
    const [time, setTime] = useState<string>()

    useEffect(() => {
        setInterval(() => {
            const dateObject = new Date()
            const hour = dateObject.getHours();
            const minute = dateObject.getMinutes();
            const second = dateObject.getSeconds();

            const currentTime = `${hour % 12} : ${addZero(minute)} : ${addZero(second)} ${hour > 12 ? 'PM' : 'AM'}`

            setTime(currentTime)
        }, 1000)
    }, [])

    return ( 
        <DateTimeContainer>
            {time}
        </DateTimeContainer>
     );
}

export default Clock;