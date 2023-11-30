import React, {useEffect, useRef, useState} from 'react';
import Logo from "../components/Logo";
import {useSelector} from "react-redux";
import ScrollSection from "../components/ScrollSection";

const Home = () => {
    const appBarIsDisplay= useSelector(state => state.base).appBarIsDisplay

    return (
        <>
            {appBarIsDisplay && <div id="home">
                <section className="section section--title">
                    <h1>DÉVELOPPEMENT SITE WEB SUR MESURE</h1>
                </section>
                <ScrollSection threshold={100}>
                    <div className="section__container">
                        <h1>Présentation</h1>
                        <p><Logo /> est une agence de programmation.</p>
                    </div>
                </ScrollSection>
                <ScrollSection threshold={100}>
                    <div className="section__container">
                        <h1>Les avantages d'un développeur full stack</h1>
                        <p>Engager un développeur full stack pour le développement de votre site Internet présente de nombreux avantages indéniables.</p>
                        <p>Un développeur full stack est un professionnel qui maîtrise l'ensemble du processus de développement, tant du côté client que du côté serveur.</p>
                        <p>Voici quelques-uns des mérites convaincants de choisir un développeur full stack pour votre projet web :</p>
                        <p><strong>Polyvalence et Flexibilité :</strong> Un développeur full stack est capable de gérer toutes les étapes du développement, de la conception de l'interface utilisateur à la mise en œuvre des fonctionnalités côté serveur. Cette polyvalence permet d'adapter rapidement le site aux besoins changeants de votre entreprise.</p>
                        <p><strong>Réduction des Coûts :</strong> Engager un développeur full stack peut souvent être plus économique que l'embauche de développeurs spécialisés dans chaque domaine. La capacité à gérer l'ensemble du processus de développement peut réduire les coûts liés à la coordination entre différentes équipes.</p>
                        <p><strong>Communication Simplifiée :</strong> Avec un développeur full stack, la communication est simplifiée, car une seule personne peut comprendre et gérer tous les aspects du projet. Cela réduit les risques de malentendus entre différentes équipes et accélère le processus de développement.</p>
                        <p><strong>Gain de Temps :</strong> Un développeur full stack est capable de passer rapidement d'une tâche à l'autre, ce qui peut accélérer le développement global du projet. Cela garantit une livraison plus rapide du produit final.</p>
                        <p><strong>Vision Globale du Projet :</strong> En comprenant à la fois le front-end et le back-end, un développeur full stack peut avoir une vision globale du projet. Cela lui permet de prendre des décisions éclairées sur la meilleure façon de structurer l'architecture et d'optimiser les performances.</p>
                        <p><strong>Capacité d'Adaptation :</strong> Les développeurs full stack sont souvent bien versés dans une variété de technologies et de langages de programmation. Cela leur permet de s'adapter facilement aux exigences spécifiques du projet et d'adopter de nouvelles technologies au fur et à mesure de leur évolution.</p>
                        <p><strong>Maintenance Simplifiée :</strong> La maintenance du site est simplifiée lorsque le même développeur est responsable du front-end et du back-end. Les mises à jour et les corrections peuvent être apportées de manière cohérente et efficace.</p>
                    </div>
                </ScrollSection>
            </div>}
        </>

    );
};

export default Home;
