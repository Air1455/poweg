import React from 'react';
import {animateScroll, Link} from "react-scroll";
import Logo from "../Logo";
import ScrollIntersectionEffect from "../ScrollIntersectionEffect";
import {Button, Tooltip} from "@mui/material";

const PresentationSection = () => {
    return (
        <ScrollIntersectionEffect direction={"vertical"} insideElement={true}>
            <section id="p__presentation" className={`section section__text`}>
                <div className="section__text--container">
                    <h1 onClick={()=> animateScroll.scrollToBottom({duration: 500, smooth: true})}>Présentation</h1>
                    <ScrollIntersectionEffect>
                        <p>
                            <Logo /> est une agence spécialisée en Programmation Orientée Web, implantée à Lomé au Togo, alliant expertise technique et sensibilité créative pour offrir des solutions web uniques.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p>
                            Que ce soit pour <Link
                            to="p__website"
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            containerId={"root"}
                            className={"linkToScroll"}
                        > <Tooltip title="Découvrir les avantages d'un site vitrine" arrow><span>une simple page de présentation</span></Tooltip></Link>, <Link
                            to="p__merchant-site"
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            containerId={"root"}
                            className={"linkToScroll"}
                        > <Tooltip title="Découvrir les avantages d'un site e-commerce" arrow><span>un site e-commerce dynamique</span></Tooltip></Link> ou <Link
                            to="p__website-app"
                            title="Application Web"
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            containerId={"root"}
                            className={"linkToScroll"}
                        > <Tooltip title="Découvrir les avantages d'une application Web" arrow><span>une application complète</span></Tooltip></Link> qui gère tous les aspects de votre entreprise, nous vous accompagnons dans la création d'une présence en ligne efficace, professionnelle et parfaitement alignée avec votre vision.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p>
                            <span className="section__text--container-subtitle">Un mot sur le directeur</span>
                            Erwann GAUTIER est un développeur français
                            <Link
                                to="p__full-stack"
                                smooth={true}
                                offset={-150}
                                duration={1000}
                                containerId={"root"}
                                className={"linkToScroll"}
                            > <Tooltip title="Découvrir les avantages d'un développeur full stack" arrow><span>Full Stack</span></Tooltip> </Link>
                            passionné de programmation.
                            <br />
                            Son parcours a débuté en 2010 avec les langages HTML, CSS, et PHP. Dès ses débuts, il s'est engagé à mettre en pratique ses connaissances pour créer des solutions adaptées aux besoins des entreprises et favoriser une expérience utilisateur agréable.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p>
                            Avec une expertise s'étendant au JavaScript et à des frameworks comme Symfony et React, Erwann a suivi de près l'évolution rapide des technologies, y compris celle de l'Intelligence Artificielle, démontrant une capacité exceptionnelle à s'adapter et innover.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p>Installé et marié au Togo depuis 2014, il allie le niveau d'exigence européen à une compréhension profonde des réalités africaines, apportant une perspective unique à chaque projet.</p>
                    </ScrollIntersectionEffect>
                </div>
                <div className="section__text--links">
                    <Link
                        to="p__why-poweg"
                        title='Aller à la section "Pourquoi choisir Poweg ?"'
                        smooth={true}
                        offset={-150}
                        duration={1000}
                        containerId={"root"}
                    >
                        <Button variant="contained">Pourquoi choisir <Logo /> ?</Button>
                    </Link>
                    <Link
                        to="p__full-stack"
                        title="Les avantages d'un développeur full stack"
                        smooth={true}
                        offset={-150}
                        duration={1000}
                        containerId={"root"}
                    >
                        <Button variant="contained">Les avantages d'un développeur Full Stack</Button>
                    </Link>
                </div>
            </section>
        </ScrollIntersectionEffect>
    );
};

export default PresentationSection;
