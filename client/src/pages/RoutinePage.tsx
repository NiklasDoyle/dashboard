import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import routines, { Routine } from '../config/routines';

function RoutinePage() {
    const { name } = useParams()
    const [routine, setRoutine] = useState<Routine | null>(null);
    useEffect(() => { 
        const routine = routines.find(routine => routine.name === name);
        setRoutine(routine!);
    }, [routine]);

    return (
        <>
            {routine?.name}
            {routine?.description}
        </>
    );
}

export default RoutinePage
;