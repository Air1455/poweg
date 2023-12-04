import React, { useEffect, useRef, useState } from 'react';

const ScrollParagraph = ({ children }) => {
    const paragraphRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const rootElement = document.getElementById('root');
        const handleScroll = () => {
            if (paragraphRef.current) {
                const { top } = paragraphRef.current.getBoundingClientRect();
                setIsVisible(top < rootElement.clientHeight +600 && rootElement.scrollTop !== 0);
            }
        };
        rootElement.addEventListener('scroll', handleScroll);

        return () => {
            rootElement.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <p
            ref={paragraphRef}
            className={`p--scroll ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </p>
    );
};

export default ScrollParagraph;
