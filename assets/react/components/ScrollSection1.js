import React, { useEffect, useRef, useState } from 'react';

const ScrollSection1 = ({ children, height= 800, classNames= "" }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const rootElement = document.getElementById('root');
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top } = sectionRef.current.getBoundingClientRect();
                setIsVisible(top < (rootElement.clientHeight + height) && rootElement.scrollTop !== 0);
            }
        };
        rootElement.addEventListener('scroll', handleScroll);

        return () => {
            rootElement.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`section section--scroll section--scroll-1 ${classNames} ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </section>
    );
};

export default ScrollSection1;
