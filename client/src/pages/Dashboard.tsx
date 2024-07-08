import { Button, Grid, Modal, Stack, getGradient, useMantineTheme } from "@mantine/core";
import Clock from "../components/DateTime/Clock";
import DayPlanner from "../components/DayPlanner/DayPlanner";
import CalendarV2 from "../components/Calendar/CalendarV2";
import DateComponent from "../components/DateTime/Date";
import { useDisclosure } from "@mantine/hooks";
import RoutineMenu from "../components/Routine/RoutineMenu";
import { useEffect } from "react"
import useKeyboardEvent from "../hooks/useKeyboardEvent";

function Dashboard() {
    const theme = useMantineTheme();
    const gradient = 'background.2'//getGradient({ deg: 45, from: 'backgroundBlue.7', to: 'backgroundBlue.8' }, theme);
    const [menuOpen, { open, close }] = useDisclosure(false);

    const {keyPressed, setKeyPressed} = useKeyboardEvent();

    useEffect(() => { 
        if (keyPressed !== null) {
            if (!menuOpen)
                open();
            setKeyPressed(null);
        }
    }, [keyPressed])

    return ( 
        <div>
            <Modal opened={menuOpen} onClose={close} title="Menu">
                <RoutineMenu close={close} />
            </Modal>
            
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

                        <CalendarV2 />

                    </Stack>
                </Grid.Col>

                <Grid.Col span={5}>
                    <Stack
                        align="stretch"
                        justify="space-between"
                    >
                        <DayPlanner />
                    </Stack>
                </Grid.Col>

            </Grid>
        </div>
     );
}

export default Dashboard;