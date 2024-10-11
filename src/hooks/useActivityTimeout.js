import { useEffect, useState } from 'react';
import { useSnack } from '../providers/SnackbarProvider';

function useActivityTimeout(logoutCallback, timeout = 4 * 60 * 60 * 1000) {
    const [lastActivityTime, setLastActivityTime] = useState(Date.now());
    const setSnack = useSnack();

    useEffect(() => {
        const events = ['mousemove', 'keydown', 'scroll', 'click'];

        const resetTimer = () => {
            setLastActivityTime(Date.now());
        };

        events.forEach(event => window.addEventListener(event, resetTimer));

        const interval = setInterval(() => {
            if (Date.now() - lastActivityTime >= timeout) {
                logoutCallback();
                setSnack("warning", "You have been logged out due to inactivity. Please log in again.");
            }
        }, 1000);

        return () => {
            events.forEach(event => window.removeEventListener(event, resetTimer));
            clearInterval(interval);
        };
    }, [lastActivityTime, logoutCallback, timeout]);

    return lastActivityTime;
}

export default useActivityTimeout;
