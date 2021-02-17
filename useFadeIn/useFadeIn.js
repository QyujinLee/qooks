import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
    // arg에 값을 지정하면 해당 값은 default value임
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);

    if (typeof duration !== "number" || typeof delay !== "number") {
        return;
    }

    return { ref: element, style: { opacity: 0 } };
};
