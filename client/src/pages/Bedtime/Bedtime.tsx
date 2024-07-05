import { useEffect, useState } from "react";

function Bedtime() {
    const [status, setStatus] = useState('no status' as string);

    useEffect(() => {
        fetch('/status')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setStatus(data.message)
            });
    });
    return (
        <>
            Bed Time Page {status}
        </>
    );
}

export default Bedtime;