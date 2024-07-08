import { useState, useEffect } from 'react';

function useKeyboardEvent() {
    const [keyPressed, setKeyPressed] = useState<string | null>(null);
    const ketEventFunc = (event: KeyboardEvent) => {
        setKeyPressed(event.key);
    }
    useEffect(() => { 
        document.addEventListener('keydown', ketEventFunc);
        return () => (document.removeEventListener('keydown', ketEventFunc))
    }, []);
    return {keyPressed, setKeyPressed};
}

export default useKeyboardEvent;