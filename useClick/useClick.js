import React, { useRef, useEffect } from "react";

export const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            // useEffect func에서 return을 하면 해당 부분은 componentWillUnmount 라이프사이클 시 발생
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);
    return element;
};
