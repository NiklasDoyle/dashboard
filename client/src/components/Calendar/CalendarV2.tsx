import WidgetBlock from "../WidgetBlock/WidgetBlock";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import calendarEventSources from "../../config/calendarEventSources";

import googleCalendarPlugin from "@fullcalendar/google-calendar";
// import bootstrap5Plugin from "@fullcalendar/bootstrap5";
// import "bootswatch/dist/darkly/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-icons/font/bootstrap-icons.css';

function CalendarV2() {
    const apiKey = process.env.REACT_APP_GOOGLE_CAL_KEY;
    return ( 
        <WidgetBlock>
            <FullCalendar
                plugins={[
                    // bootstrap5Plugin,
                    dayGridPlugin,
                    timeGridPlugin,
                    googleCalendarPlugin
                ]}
                headerToolbar={{
                    start: '',
                    center: 'title',
                    end: ''
                }}
                themeSystem="standard" //bootstrap5
                googleCalendarApiKey={apiKey}
                eventSources={calendarEventSources}
                initialView="dayGridMonth"
            />
        </WidgetBlock>
     );
}

export default CalendarV2;