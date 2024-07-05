import { Center, Grid, Title } from "@mantine/core";
import CalendarDayPaper, { CalendarDayPaperProps } from "./CalendarDayPaper";
import { useEffect, useState } from "react";
import WidgetBlock from "../WidgetBlock/WidgetBlock";
import { Event, Month } from "../../types/dateTime.types";
import CalendarDayTitle from "./CalendarDayTitle";
import useCalEvents from "../../hooks/useCalEvents";

function Calendar() {
    const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [calendarDays, setCalendarDays] = useState<CalendarDayPaperProps[]>([]);
    const [month, setMonth] = useState<number>();

    const {events, allDayEvents} = useCalEvents({daysBefore: 30, daysAfter: 30});

    useEffect(() => {
        console.log(events);
        const today = new Date();
        const firstDayOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const lastSunday = new Date(firstDayOfThisMonth.setDate(firstDayOfThisMonth.getDate() - firstDayOfThisMonth.getDay()));

        let nextCalendarDays: CalendarDayPaperProps[] = [];

        let currentDay: Date = new Date(lastSunday);
        for (let i = 0; i < 42; i++) {
            nextCalendarDays.push({
                day: currentDay.getDate(),
                inCurrentMonth: currentDay.getMonth() === today.getMonth(),
                isSelected: currentDay.getDate() === today.getDate(),
                events: events.filter((event) => event.day.getDate() === currentDay.getDate() && event.day.getMonth() === currentDay.getMonth()),
                allDayEvents: allDayEvents.filter((event) => event.day.getDate() === currentDay.getDate() && event.day.getMonth() === currentDay.getMonth())
            });
            currentDay = new Date(currentDay.setDate(currentDay.getDate() + 1));
        }

        setMonth(today.getMonth());
        setCalendarDays(nextCalendarDays);
    }, [events]);

    return (
        <WidgetBlock>
            <Center>
                <Title size='400%'>
                    {Month[month || 0]}
                </Title>
            </Center>
            <Grid columns={7} gutter={5}>
                {daysOfWeek.map((day) => {
                    return (
                        <Grid.Col key={day} span={1}>
                            <CalendarDayTitle title={day} />
                        </Grid.Col>
                    );
                })}
                {calendarDays.map((dayProps, index) => {
                    return (
                        <Grid.Col key={index} span={1}>
                            <CalendarDayPaper {...dayProps} />
                        </Grid.Col>
                    );
                })}
            </Grid>
        </WidgetBlock>
    );
}

export default Calendar;