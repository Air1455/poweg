import React from 'react';
import {animateScroll, Link} from "react-scroll";
import Logo from "../Logo";
import ScrollIntersectionEffect from "../ScrollIntersectionEffect";
import {Button} from "@mui/material";

const PresentationSection = () => {
    return (
        <ScrollIntersectionEffect direction={"vertical"}>
            <section className={`section section__text`} id="p__presentation">
                <div className="section__text--container">
                    <h1 onClick={()=> animateScroll.scrollToBottom({duration: 500, smooth: true})}>Présentation</h1>
                    <ScrollIntersectionEffect>
                        <p>
                            <Logo /> est une agence spécialisée en Programmation Orientée Web implantée à Lomé au Togo.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p>
                            Que ce soit pour une simple page de présentation, un site marchand ou une application qui gère la globalité des besoins de votre entreprise, nous vous accompagnons dans la création d'une présence en ligne efficace et professionnelle.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p>
                            <span className="section__text--container-subtitle">Un mot sur le directeur</span>
                            Erwann GAUTIER est un développeur français
                            <Link
                                to="p__full-stack"
                                title="Les avantages d'un développeur full stack"
                                smooth={true}
                                offset={-150}
                                duration={1000}
                                containerId={"root"}
                                className={"linkToScroll"}
                            > Full Stack </Link>
                            passionné de programmation.
                            <br />
                            Son parcours a débuté en 2010 avec les langages HTML, CSS, et PHP. Dès ses débuts, il s'est engagé à mettre en pratique ses connaissances pour offrir des expériences utilisateur agréables.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p>
                            Au fil du temps, il a élargi son champ de compétences en apprenant le JavaScript, un langage central dans le développement web moderne.
                            <br />
                            Il a suivi de près l'évolution rapide des langages et des technologies, comme l'avènement de nouveaux frameworks tels que Symfony ou React. Il a alors fait preuve d'une capacité remarquable à réapprendre et à s'adapter constamment.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p>Installé et marié au Togo depuis 2014, il maitrise autant le niveau d'exigence européen que les réalités africaines.</p>
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
