import { Badge, Center, Checkbox, Grid, List, Paper, Space, Stack, Text, ThemeIcon, Title, getGradient, rem, useMantineTheme } from "@mantine/core";
import WidgetBlock from "../WidgetBlock/WidgetBlock";
import useCalEvents from "../../hooks/useCalEvents";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons-react";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid'
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import calendarEventSources from "../../config/calendarEventSources";

function DayPlanner() {
    const apiKey = process.env.REACT_APP_GOOGLE_CAL_KEY;

    const { events, allDayEvents } = useCalEvents({ daysBefore: 1, daysAfter: 0 }); // Get Todays events
    const todos = [
        'Workout',
    ];
    
    return ( 
        <WidgetBlock h="88vh">
            <FullCalendar
                plugins={[
                    timeGridPlugin,
                    googleCalendarPlugin,
                    bootstrap5Plugin
                ]}
                headerToolbar={{
                    start: '',
                    center: '',
                    end: ''
                }}
                initialView="timeGridDay"
                slotMinTime={'04:00'}
                slotMaxTime={'23:00'}
                expandRows={true}
                height='100%'
                themeSystem="bootstrap5"
                googleCalendarApiKey={apiKey}
                eventSources={calendarEventSources}
            />
        </WidgetBlock>
     );
}

export default DayPlanner;