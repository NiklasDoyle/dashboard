import { Badge, Center, Checkbox, Grid, List, Paper, Space, Stack, Text, ThemeIcon, Title, getGradient, rem, useMantineTheme } from "@mantine/core";
import WidgetBlock from "../WidgetBlock/WidgetBlock";
import useCalEvents from "../../hooks/useCalEvents";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons-react";

function DayPlanner() {
    const theme = useMantineTheme();
    const { events, allDayEvents } = useCalEvents({ daysBefore: 1, daysAfter: 0 }); // Get Todays events
    const todos = [
        'Workout',
        'Long workout message Long workout message Long workout message',
        'Another todo',
        'Workout',
        'Long workout message',
        'Workout',
        'Long workout message Long workout message Long workout message',
        'Another todo',
        'Workout',
        'Long workout message',
        'Workout',
        'Long workout message Long workout message Long workout message',
        'Another todo',
        'Workout',
        'Long workout message',
        'Workout',
        'Long workout message Long workout message Long workout message',
        'Another todo',
        'Workout',
        'Long workout message',
        'Another todo',
    ];
    
    return ( 
        <WidgetBlock
            h='70%'
        >
            <Grid
                justify="center"
                align="strech"
            >
                <Grid.Col
                    span={6}
                >
                    <Stack>
                            {events?.map((event, i) => {
                                return (
                                    <Paper
                                        bg={getGradient({ deg: 360, from: 'greys.3', to: 'calendarDayBox.1' }, theme)}
                                        radius={20}
                                        m={1}
                                        h='2vh'
                                    >
                                        <Text>{event.title}</Text>
                                    </Paper>
                                );
                            })}
                    </Stack>
                    {/* <Paper
                        bg={getGradient({ deg: 360, from: 'greys.3', to: 'calendarDayBox.1' }, theme)}
                        radius={40}
                        p={20}
                        h='100%'
                    >
                        {events?.map((event, i) => {
                            return (
                                <Text key={i}>{event.title}</Text>
                            );
                        })}
                    </Paper> */}
                </Grid.Col>

                <Grid.Col
                    h="48vh"
                    style={{
                        overflow: 'hidden',
                    }}
                    span={6}>
                    <Center>
                        <Title>Todo:</Title>
                    </Center>
                    <Space
                        h={20}
                    />
                    <Stack
                        align="left"

                    >
                        {todos.map((todo, i) => {
                            return (
                                <List
                                    key={i}
                                    size='xl'
                                >
                                    <List.Item
                                        icon={
                                            <ThemeIcon color="teal" size={24} radius="xl">
                                                <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
                                                <IconCircleDashed style={{ width: rem(16), height: rem(16) }} />
                                            </ThemeIcon>
                                        }
                                    >
                                        {todo}
                                    </List.Item>
                                </List>
                            );
                        })}
                    </Stack>
                </Grid.Col>
            </Grid>
        </WidgetBlock>
     );
}

export default DayPlanner;