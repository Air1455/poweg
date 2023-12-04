import React from 'react';
import {animateScroll, Link} from "react-scroll";
import ScrollParagraph from "../ScrollParagraph";
import Logo from "../Logo";
import ScrollSection1 from "../ScrollSection1";

const PresentationSection = () => {
    return (
        <ScrollSection1 classNames="section--text">
            <div id="p__presentation" className="section__container">
                <h1 onClick={()=> animateScroll.scrollToBottom({duration: 500, smooth: true})}>Présentation</h1>
                <ScrollParagraph>
                    <Logo /> est une agence spécialisée en Programmation Orientée Web implantée à Lomé au Togo.<br /><br />
                    Que ce soit pour une simple page de présentation, un site marchand ou une application qui gère la globalité des besoins de votre entreprise, nous vous accompagnons dans la création d'une présence en ligne efficace et professionnelle.
                </ScrollParagraph>
                <ScrollParagraph>
                    <span className="p__title">Un mot sur le directeur</span>
                    Erwann GAUTIER est un développeur
                    <Link
                        to="p__full-stack"
                        title="Les avantages d'un développeur full stack"
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        containerId={"root"}
                        className={"linkToScroll"}
                    > Full Stack </Link>
                    passionné de programmation.
                    <br />
                    Son parcours a débuté en 2010 avec les langages HTML, CSS, et PHP. Dès ses débuts, il s'est engagé à mettre en pratique ses connaissances pour offrir des expériences utilisateur agréables.
                    <br /><br />
                    Au fil du temps, il a élargi son champ de compétences en apprenant le JavaScript, un langage central dans le développement web moderne.
                    <br />
                    Il a suivi de près l'évolution rapide des langages et des technologies, comme l'avènement de nouveaux frameworks tels que Symfony ou React. Il a alors fait preuve d'une capacité remarquable à réapprendre et à s'adapter constamment.
                </ScrollParagraph>
            </div>
        </ScrollSection1>
    );
};

export default PresentationSection;
