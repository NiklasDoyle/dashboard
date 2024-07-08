import WidgetBlock from "../WidgetBlock/WidgetBlock";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid'
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import bootstrap5 from "@fullcalendar/bootstrap5";

import "bootswatch/dist/darkly/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import calendarEventSources from "../../config/calendarEventSources";

function DayCalendar() {
    return (
        <WidgetBlock>
            Hi
        </WidgetBlock>
    );
}

export default DayCalendar;