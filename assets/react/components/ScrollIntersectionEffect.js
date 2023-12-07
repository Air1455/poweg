import React, { useState, useRef, useEffect } from "react";

const ScrollIntersectionEffect = ({ children, direction= "horizontal", insideElement= false }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const sectionRef = useRef(null);
    const [isScrolledOutOfDiv, setIsScrolledOutOfDiv] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
                setIsScrolledOutOfDiv(entry.boundingClientRect.bottom < window.innerHeight);
            },
            { rootMargin: "-200px" }
        );
        observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);


    useEffect(() => {
        if (isIntersecting) {
            sectionRef.current.querySelectorAll(".scroll-element").forEach((el) => {
                el.classList.add("scroll--show");
                el.classList.remove("scroll--leave");
            });
        } else {
            sectionRef.current.querySelectorAll(".scroll-element").forEach((el) => {
                if(isScrolledOutOfDiv && direction === "vertical") el.classList.add("scroll--leave");
                el.classList.remove("scroll--show");
            });
        }
    }, [isIntersecting]);

    useEffect(() => {
        if (isScrolledOutOfDiv && direction === "vertical") {
            sectionRef.current.querySelectorAll(".scroll-element").forEach((el) => {
                el.classList.add("scroll--leave");
            });
        }
    }, [isScrolledOutOfDiv]);

    return (
        <div
            ref={sectionRef}
            className={`scroll scroll--${direction}`}
        >
            <div className={`${insideElement ? "" : "scroll-element"}`}>
                {children}
            </div>
        </div>
    );
}


export default ScrollIntersectionEffect;
