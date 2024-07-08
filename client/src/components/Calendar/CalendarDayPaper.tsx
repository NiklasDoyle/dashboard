import { Badge, Paper, Grid, getThemeColor, useMantineTheme, getGradient, Stack } from "@mantine/core";
import { Event } from "../../types/dateTime.types";


interface CalendarDayPaperProps { 
    day: number;
    inCurrentMonth: boolean;
    isSelected: boolean;
    events: Event[] | undefined;
    allDayEvents: Event[] | undefined;
};

function CalendarDayPaper(props: CalendarDayPaperProps) {
    const theme = useMantineTheme();
    let color = getThemeColor(`background.5`, theme);
    if (props.inCurrentMonth) {
        // color = `${getThemeColor(`calendarDayBox.${props.events && props.events.length > 0 ? props.events.length + 4 : 1}`, theme)}`;
        color = `${getThemeColor(`calendarDayBox.1`, theme)}`;
    }
    const backgroundColor = getGradient({ deg: 360, from: 'background.3', to: color }, theme)

    const formatEvent = (event: Event) => { 
        if (event.allDay) {
            return `${event.title}`;
        } else {
            const splitTime = event.startTime.split(' ');
            let formattedStartTime = `${splitTime[0].slice(0, -3)} ${splitTime[1]}`;
            return `${formattedStartTime} - ${event.title}`;
        }
    };
    
    return (
        <Paper
            h='13vh'
            bg={backgroundColor}
            style = {{
                borderColor: 'red',
                borderWidth: '5px',
                overflow: 'hidden',
            }}
        >
            <Stack
                gap={5}
                mt='5'
            >
                <Badge
                    autoContrast
                    size='xl'
                    ml='5'
                    color={props.isSelected ? 'selectionColors.7' : 'background.3'}
                    opacity={props.isSelected ? 1 : 0.7}
                    circle>
                    {props.day}
                </Badge>
                <Stack
                    h='100%'
                    w='100%'
                    align="left"
                    justify="flex-start"
                    gap={5}
                >
                    {props.allDayEvents && props.allDayEvents.map((event, index) => (
                        <Badge
                            fullWidth
                            key={index}
                            autoContrast
                            radius={1}
                            color={`${props.inCurrentMonth ? 'backgroundBlue' : 'background'}.${event.color}`}
                            opacity={0.7}
                            style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                justifyContent: 'center',
                            }}
                            w='100%'
                            ml={event.days[0].getDate() === props.day
                                ? '5'
                                : event.days[event.days.length - 1].getDate() === props.day ? '-5' : '0'}
                            mr={event.days[event.days.length - 1].getDate() === props.day ? '' : '0'}
                        >
                            {event.days[0].getDate() === props.day && formatEvent(event)}
                        </Badge>
                    ))}

                    {props.events && props.events.map((event, index) => (
                        <Badge
                            fullWidth
                            key={index}
                            autoContrast
                            ml='5'
                            color={`${props.inCurrentMonth ? 'backgroundBlue' : 'background'}.${event.color}`}
                            opacity={0.7}
                            style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                justifyContent: 'left',
                            }}
                            w='110%'
                        >
                            {formatEvent(event)}
                        </Badge>
                    ))}
                </Stack>
            </Stack>
        </Paper>
    );
}

export default CalendarDayPaper;
export type { CalendarDayPaperProps };