import { useEffect, useState } from "react";
import { Event } from "../types/dateTime.types";

interface useCalEventsProps {
    daysBefore?: number;
    daysAfter?: number;
}

function useCalEvents({ daysBefore = 30, daysAfter = 30 }: useCalEventsProps) {
    const today = new Date();
    const beginningOfDay = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate() - 30, 0, 0, 0, 0);
    const startDate = new Date(beginningOfDay.setDate(beginningOfDay.getDate() - daysBefore));
    const endDate = new Date(beginningOfDay.setDate(beginningOfDay.getDate() + daysBefore + daysAfter));

    const [events, setEvents] = useState<Event[]>([]);
    const [allDayEvents, setAllDayEvents] = useState<Event[]>([]);

    useEffect(() => {
        fetch(`/cal?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
            }).then(results => {
                if (!results.ok) {
                    console.log('Failed to fetch cal events, populating with defaults');
                    return {
                        events: [
                            {
                                title: 'Event 1',
                                days: [new Date()],
                                startTime: '12:00:00 PM',
                                endTime: '13:00:00 PM',
                                allDay: false,
                                description: 'Sample',
                                color: 6,
                            },
                            {
                                title: 'All Day Event',
                                days: [
                                    new Date(),
                                    new Date(new Date().setDate(new Date().getDate() + 1)),
                                    new Date(new Date().setDate(new Date().getDate() + 2)),
                                ],
                                startTime: '12:00:00 PM',
                                endTime: '13:00:00 PM',
                                allDay: true,
                                description: 'Sample',
                                color: 4,
                            },
                            {
                                title: 'Super Long Even title',
                                days: [new Date()],
                                startTime: '12:00:00 PM',
                                endTime: '13:00:00 PM',
                                allDay: false,
                                description: 'Sample',
                                color: 5,
                            },
                        ]
                    }
                }
                return results.json();
            })
            .then(data => {
                let nextAllDayEvents: Event[] = [];
                let nextEvents: Event[] = [];

                data.events.map((event: Event) => {
                    const formattedEvent = {
                        title: event.title,
                        days: event.allDay ? event.days.map((day:Date) => new Date(day)) : [new Date(event.days[0])],
                        startTime: event.startTime,
                        endTime: event.endTime,
                        allDay: true,
                        description: event.description,
                        color: event.color,
                    };
                    if (event.allDay) {
                        nextAllDayEvents.push(formattedEvent);
                    } else {
                        nextEvents.push(formattedEvent);
                    }

                });
                setEvents(nextEvents);
                setAllDayEvents(nextAllDayEvents);
            });
    }, []);

    return {events, allDayEvents};
}

export default useCalEvents;