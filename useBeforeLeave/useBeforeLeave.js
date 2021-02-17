import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
    const handle = (e) => {
        const { clientY } = e;

        if (clientY <= 0) {
            onBefore();
        }
    };

    useEffect(() => {
        document.addEventListener("mouseleave", handle);

        return () => {
            document.removeEventListener("mouseleave", handle);
        };
    }, []);

    if (typeof onBefore !== "function") {
        return;
    }
};
