import React from 'react';
import ScrollIntersectionEffect from "../ScrollIntersectionEffect";

const FullStackSection = () => {
    return (
        <ScrollIntersectionEffect direction={"vertical"} insideElement={true}>
            <section className={`section section__text`} id="p__full-stack">
                <div className="section__text--container">
                    <h1>Les avantages d'engager un Développeur Full Stack</h1>
                    <ScrollIntersectionEffect>
                        <p>Un développeur full stack est un professionnel qui a une expertise complète dans la construction d'un site. Il maîtrise l'ensemble des différents langages de programmation web tels que HTML, CSS, PHP, JAVASCRIPT, ce qui leur permet d'être entièrement autonome sur un projet. Voici pourquoi leur expertise est si précieuse :</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <h2>Communication Efficace</h2>
                        <p>Avec un seul expert gérant tous les aspects du site, la communication est plus directe et les erreurs de coordination sont minimisées, accélérant le développement.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <h2>Vision Complète du Projet</h2>
                        <p>Le développeur full stack a une compréhension globale, tant de l'interface que des fonctionnalités, ce qui lui permet d'optimiser le site de manière cohérente.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <h2>Rapidité de Développement</h2>
                        <p>La capacité à jongler entre différentes tâches réduit le temps de développement, permettant une livraison plus rapide du site fini.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <h2>Économies Budgétaires</h2>
                        <p>Engager un développeur polyvalent est souvent plus abordable que d'avoir plusieurs spécialistes, réduisant les coûts de coordination et de gestion.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <h2>Polyvalence et Flexibilité</h2>
                        <p>Ce professionnel peut s'adapter rapidement aux changements et gérer l'ensemble du processus de développement, de la conception à la réalisation.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <h2>Adaptation aux Évolutions Technologiques</h2>
                        <p>Les développeurs full stack sont souvent à jour avec les dernières technologies et peuvent facilement intégrer de nouvelles solutions au projet.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <h2>Maintenance et Mises à Jour Facilitées</h2>
                        <p>La maintenance du site est simplifiée lorsque la même personne est en charge de tous ses aspects, assurant des mises à jour cohérentes et efficaces.</p>
                    </ScrollIntersectionEffect>
                </div>
            </section>
        </ScrollIntersectionEffect>


    );
};

export default FullStackSection;
