import { useEffect, useState } from "react";
import DateTimeContainer from "./DateTimeContainer";
import { DayOfWeek, Month } from "../../types/dateTime.types";

function DateComponent() {
    const [today, setToday] = useState<Date>();
    useEffect(() => { 
        setToday(new Date());
    }, []);

    return ( 
        <DateTimeContainer>
            {today ? `${DayOfWeek[today.getDay()]} ${Month[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}` : 'Loading...'}
        </DateTimeContainer>
     );
}

export default DateComponent;