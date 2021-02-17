import { useState, useEffect } from "react";

export const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        setStatus(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);

        return () => {
            // componentWillUnMount에 실행됨
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        };
    }, []);
    return status;
};
