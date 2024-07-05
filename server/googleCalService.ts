import { calendar_v3, google } from 'googleapis';
import { Event } from "./types/dateTime.types";

const formatEvent = (event: calendar_v3.Schema$Event, color: number): Event => { 
    // console.log(event);
    const isAllDay = event.start!.dateTime ? false : true;
    let days: Date[] = [];
    if (isAllDay) {
        let start = new Date(`${event.start!.date!}T00:00:00`);
        let end = new Date(`${event.end!.date!}T00:00:00`);
        while (start < end) {
            days.push(new Date(start));
            start.setDate(start.getDate() + 1);
        }
        // console.log('List of all the days: ', days)
    }
    return {
        title: event.summary!,
        days: isAllDay ? days : [new Date(event.start!.dateTime!)],
        startTime: isAllDay ? `All Day` : new Date(event.start!.dateTime!).toLocaleTimeString(),
        endTime: isAllDay ? 'All Day' : new Date(event.end!.dateTime!).toLocaleTimeString(),
        allDay: true,
        description: event.description!,
        color: color,
    };
};

class GoogleCalService {
    private cal: calendar_v3.Calendar;

    constructor() {
        const auth = new google.auth.GoogleAuth({
            keyFile: './server/niklas-dashboard-cred.json',
            // Scopes can be specified either as an array or as a single, space-delimited string.
            scopes: [
                'https://www.googleapis.com/auth/calendar',
                'https://www.googleapis.com/auth/calendar.events',
            ],
        });

        this.cal = google.calendar({
            version: 'v3',
            auth: auth
        });
    }

    async getCalendarEvents(startDate?: string, endDate?: string) {
        const cals = [
            {
                id: 'ndoyle1313@gmail.com',
                color: 1
            }, // Add colors for each in an object
            {
                id: '05e884f0f71de095ba11e2b86819f48b699b453989b3b8f10b1e4573b11f5321@group.calendar.google.com',
                color: 4
            }, // Travel
        ]

        let formattedEvents: Event[] = [];
        for (const cal of cals) {
            const res = await this.cal.events.list({
                calendarId: cal.id,
                timeMin: startDate, // in Date().toISOString() format
                timeMax: endDate,
                orderBy: 'startTime',
                // maxResults: 10,
                singleEvents: true,
            });

            const events = res.data.items;
            events && events.forEach((event, i) => {
                if (event.start != undefined) {
                    formattedEvents.push(formatEvent(event, cal.color));
                }
            });
        }

        console.log('Formatted Events: ', formattedEvents);
        return formattedEvents;
    }

}

export default GoogleCalService;