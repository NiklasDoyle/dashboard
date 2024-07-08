import { Stack } from "@mantine/core";
import routines from "../../config/routines";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import useKeyboardEvent from "../../hooks/useKeyboardEvent";

type RoutineMenuProps  = {
    close(): void;
    // keyPressed: string | null;
    // setKeyPressed: Dispatch<SetStateAction<string | null>>;
}
function RoutineMenu({ close }: RoutineMenuProps) {
    const routineNames = routines.map(routine => routine.name);
    const navigate = useNavigate()
    const [selectedIndex, setSelectedIndex] = useState(0);

    const { keyPressed, setKeyPressed } = useKeyboardEvent();

    useEffect(() => {
        if (keyPressed !== null) {
            if (keyPressed === 'ArrowDown') {
                setSelectedIndex((selectedIndex + 1) % routineNames.length);
            } else if (keyPressed === 'ArrowUp') {
                setSelectedIndex((selectedIndex - 1 >= 0) ? selectedIndex - 1 : routineNames.length - 1);
            } else if (keyPressed === 'ArrowRight') {
                navigate(`/routine/${routineNames[selectedIndex]}`);
                close();
            } else {
                close();
            }
            setKeyPressed(null);
        }
    }, [keyPressed]);
    return ( 
        <Stack>
            {routineNames.map((routineName, index) => (
                <div key={index}>
                    {routineName} {index === selectedIndex ? '<-' : ''}
                </div>
            ))}
        </Stack>
     );
}

export default RoutineMenu;