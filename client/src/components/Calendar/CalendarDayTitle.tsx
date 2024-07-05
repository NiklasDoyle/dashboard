import { Center, Paper, Title, getGradient, useMantineTheme } from "@mantine/core";

function CalendarDayTitle(props: { title: string }) {
    const theme = useMantineTheme();
    const gradient = getGradient({ deg: 360, from: 'backgroundBlue.3', to: 'backgroundBlue.4' }, theme)
    return ( 
        <Paper
            bg={gradient}
        >
            <Center p='5%'>
                <Title size='100%'>{props.title}</Title>
            </Center>

        </Paper>
     );
}

export default CalendarDayTitle;