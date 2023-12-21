import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import MerchantSiteSection from '../components/home-sections/MerchantSiteSection';
import WebsiteSection from '../components/home-sections/WebsiteSection';
import WebsiteAppSection from '../components/home-sections/WebsiteAppSection';
import PresentationSection from '../components/home-sections/PresentationSection';
import FullStackSection from '../components/home-sections/FullStackSection';
import { Button } from '@mui/material';
import WhyPowegSection from '../components/home-sections/WhyPowegSection';
import { BsCaretDown, BsCaretUp } from 'react-icons/bs';
import { animateScroll } from 'react-scroll';
import {GoArrowDown, GoArrowUp} from "react-icons/go";

const Home = () => {
    const appBarIsDisplay= useSelector((state) => state.base).appBarIsDisplay;
    const scrollCurrentSection= useSelector(state => state.home).scrollCurrentSection

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sections= ['home', 'p__presentation', 'p__website', 'p__merchant-site', 'p__website-app', 'p__why-poweg', 'p__full-stack']

    useEffect(() => {
        scrollCurrentSection !== '' && setCurrentSectionIndex(sections.indexOf(scrollCurrentSection))
    }, [scrollCurrentSection]);

    const handleScroll = (direction) => {
        const nextIndex = currentSectionIndex + direction;
        setCurrentSectionIndex(nextIndex)

        if (nextIndex >= 0 && nextIndex < sections.length) {
            const targetSectionId = sections[nextIndex];
            const targetSectionElement = document.getElementById(targetSectionId);

            if (targetSectionElement) {
                animateScroll.scrollTo(targetSectionElement.offsetTop - 120, {
                    containerId: 'root',
                    duration: 800,
                    smooth: 'smooth',
                    spy: true,
                    hashSpy: true,
                });

            } else {
                console.log('Target section element not found!');
            }
        }
    };
    console.log(currentSectionIndex, scrollCurrentSection)

    return (
        <>
            {appBarIsDisplay && (
                <div id="home">
                    <section className="section section__title section__title--80vh">
                        <h1>DÉVELOPPEMENT DE SOLUTION WEB SUR MESURE</h1>
                    </section>
                    <PresentationSection />
                    <WebsiteSection />
                    <MerchantSiteSection />
                    <WebsiteAppSection />
                    <WhyPowegSection />
                    <FullStackSection />
                    <div className="home-btn">
                        {currentSectionIndex > 0 && (
                            <Button color={"black"} variant={'outlined'} onClick={(e) => handleScroll(- 1)}>
                                <GoArrowUp size={30} />
                            </Button>
                        )}
                        <Button
                            style={{opacity: currentSectionIndex !== sections.length-1 ? 1 : 0}}
                            color={"black"}
                            variant={'outlined'}
                            disabled={currentSectionIndex === sections.length-1}
                            onClick={(e) => handleScroll(1)}
                        >
                            <GoArrowDown size={30} />
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
