import React, { useEffect, useRef, useState } from 'react';

const ScrollSection = ({ children }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const rootElement = document.getElementById('root');
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top } = sectionRef.current.getBoundingClientRect();
                setIsVisible(top < rootElement.clientHeight + 600 && rootElement.scrollTop !== 0);
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
            className={`section section--text section--scroll ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </section>
    );
};

export default ScrollSection;
