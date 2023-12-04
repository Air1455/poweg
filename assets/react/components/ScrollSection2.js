import React, { useEffect, useRef, useState } from 'react';
import imgMerchantSite from "../../images/merchant-site.webp";

const ScrollSection2 = ({ title, imgSrc, id }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const rootElement = document.getElementById('root');
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top } = sectionRef.current.getBoundingClientRect();
                setIsVisible(top < (rootElement.clientHeight - 300) && rootElement.scrollTop !== 0);
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
            className={`section section--scroll section--scroll-2 ${isVisible ? 'visible' : ''}`}
        >
            <div id={id} className="section section--title">
                <h1 className="section--title-right">{title.toUpperCase()}</h1>
                <div className="image-container">
                    <img src={imgSrc}  alt={title}/>
                </div>
            </div>
        </section>
    );
};

export default ScrollSection2;
