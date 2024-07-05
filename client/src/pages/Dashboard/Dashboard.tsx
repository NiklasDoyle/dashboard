import { Grid, Stack, getGradient, useMantineTheme } from "@mantine/core";
import Calendar from "../../components/Calendar/Calendar";
import Clock from "../../components/DateTime/Clock";
import DayPlanner from "../../components/DayPlanner/DayPlanner";
import CalendarV2 from "../../components/Calendar/CalendarV2";
import DateComponent from "../../components/DateTime/Date";

function Dashboard() {
    const theme = useMantineTheme();
    const gradient = getGradient({ deg: 45, from: 'backgroundBlue.7', to: 'backgroundBlue.8' }, theme);

    return ( 
        <div>
            {/* <Grid bg={'backgroundBlue.4'} h='100vh'> */}
            {/* <BackgroundImage
                src="https://static.vecteezy.com/system/resources/previews/008/635/223/original/blue-background-with-map-contour-topographic-wallpaper-vector.jpg"
                h="100vh"> */}
            <Grid
                bg={gradient}
                p={20}
            >
                <Grid.Col span={7}>
                    <Stack>
                        <Grid>
                            <Grid.Col span={4}>
                                <Clock />
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <DateComponent />
                            </Grid.Col>
                        </Grid>
                        {/* <Calendar /> */}
                        <Calendar />
                    </Stack>
                </Grid.Col>

                <Grid.Col span={5}>
                    <Stack
                        align="stretch"
                        justify="space-between"
                    >
                        <DayPlanner />
                        <DayPlanner />
                    </Stack>
                </Grid.Col>

            </Grid>
            {/* </BackgroundImage> */}
        </div>
     );
}

export default Dashboard;