import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const useFadeEffect = (direction, duration = 1, delay = 0) => {
    const dom = useRef();
    const directionOption = useMemo(() => {
        switch (direction) {
            case "up":
                return "translate3d(0, 50%, 0)";
            case "down":
                return "translate3d(0, -50%, 0)";
            case "left":
                return "translate3d(50%, 0, 0)";
            case "right":
                return "translate3d(-50%, 0, 0)";
            default:
                return;
        }
    }, [direction]);

    const handleScroll = useCallback(([entry]) => {
        const { current } = dom as any;
        if (entry.isIntersecting) {
            current.style.transitionProperty = "all";
            current.style.transitionDuration = `${duration}s`;
            current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
            current.style.transitionDelay = `${delay}s`;
            current.style.opacity = 1;
            current.style.transform = "translate3d(0, 0, 0)";
        }
    }, []);

    useEffect(() => {
        let observer;

        if (dom.current) {
            // threshold: 교차 영역의 비율을 지정하는 값
            // 이 값을 설정하여 교차 영역의 어느 정도 비율이 만족되었을 때 콜백 함수가 실행되도록 조절
            observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
            observer.observe(dom.current);

            return () => observer && observer.disconnect();
        }
    }, [handleScroll]);

    return {
        ref: dom,
        style: {
            opacity: 0,
            transform: directionOption
            // border: "3px solid #FFD900",
        }
    };
};
