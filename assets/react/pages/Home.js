import React from 'react';
import Logo from "../components/Logo";
import {useSelector} from "react-redux";
import ScrollSection1 from "../components/ScrollSection1";
import ScrollParagraph from "../components/ScrollParagraph";
import {Link, animateScroll} from "react-scroll";
import MerchantSiteSection from "../components/home-sections/MerchantSiteSection";
import WebsiteSection from "../components/home-sections/WebsiteSection";
import WebsiteAppSection from "../components/home-sections/WebsiteAppSection";
import PresentationSection from "../components/home-sections/PresentationSection";

const Home = () => {
    const appBarIsDisplay= useSelector(state => state.base).appBarIsDisplay

    return (
        <>
            {appBarIsDisplay && <div id="home">
                <section className="section section--title section--title--80vh">
                    <h1>DÉVELOPPEMENT SITE WEB SUR MESURE</h1>
                </section>
                <PresentationSection />
                <WebsiteSection />
                <MerchantSiteSection />
                <WebsiteAppSection />
                <ScrollSection1 classNames="section--text">
                    <div className="section__container">
                        <h1>Pourquoi choisir <Logo /> ?</h1>
                        <ScrollParagraph>Créer un site web ou une application sur mesure est une entreprise passionnante, mais cela peut rapidement devenir complexe. Chez <Logo />, nous sommes là pour simplifier le processus et vous offrir des solutions personnalisées répondant à vos besoins uniques. Voici pourquoi choisir notre agence :</ScrollParagraph>
                        <ScrollParagraph><strong>Expertise Technique :</strong> Nos développeurs full-stack expérimentés maîtrisent les dernières technologies et tendances du marché. En collaborant avec <Logo />, vous bénéficiez de leur expertise technique, garantissant un produit final performant et à la pointe de l'innovation.</ScrollParagraph>
                        <ScrollParagraph><strong>Gain de Temps et d'Énergie :</strong> Le développement d'un site web ou d'une application demande du temps et de l'énergie. En faisant appel à <Logo />, vous pouvez vous concentrer sur votre cœur de métier pendant que nous nous occupons de la partie technique. Cela vous permet d'économiser des ressources précieuses et d'obtenir un résultat professionnel plus rapidement.</ScrollParagraph>
                        <ScrollParagraph><strong>Design Personnalisé :</strong> Un design attrayant et intuitif est essentiel pour attirer et retenir les utilisateurs. Notre équipe de designers travaille en étroite collaboration avec vous pour créer une interface utilisateur unique et personnalisée, en harmonie avec l'identité visuelle de votre entreprise.</ScrollParagraph>
                        <ScrollParagraph><strong>Suivi et Support :</strong> Le développement ne s'arrête pas à la livraison du produit. <Logo /> assure un suivi constant et fournit un support technique pour garantir le bon fonctionnement de votre site web ou de votre application. Nous sommes là pour résoudre les problèmes, effectuer des mises à jour et répondre à vos questions.</ScrollParagraph>
                        <ScrollParagraph><strong>Éviter les Erreurs Coûteuses :</strong> Les erreurs de développement peuvent être coûteuses à corriger. En travaillant avec une agence expérimentée comme <Logo />, vous minimisez le risque d'erreurs coûteuses et vous assurez que votre projet est entre les mains de professionnels fiables.</ScrollParagraph>
                        <ScrollParagraph>Choisir <Logo />, c'est investir dans la réussite de votre projet numérique. Contactez-nous dès aujourd'hui pour discuter de vos idées et commencer à transformer votre vision en réalité.</ScrollParagraph>
                    </div>

                </ScrollSection1>
                <ScrollSection1 classNames="section--text">
                    <div id="p__full-stack" className="section__container">
                        <h1>Les avantages d'un développeur full stack</h1>
                        <ScrollParagraph>Engager un développeur full stack pour le développement de votre site Internet présente de nombreux avantages indéniables.</ScrollParagraph>
                        <ScrollParagraph>Un développeur full stack est un professionnel qui maîtrise l'ensemble du processus de développement, tant du côté client que du côté serveur.</ScrollParagraph>
                        <ScrollParagraph>Voici quelques-uns des mérites convaincants de choisir un développeur full stack pour votre projet web :</ScrollParagraph>
                        <ScrollParagraph><strong>Polyvalence et Flexibilité :</strong> Un développeur full stack est capable de gérer toutes les étapes du développement, de la conception de l'interface utilisateur à la mise en œuvre des fonctionnalités côté serveur. Cette polyvalence permet d'adapter rapidement le site aux besoins changeants de votre entreprise.</ScrollParagraph>
                        <ScrollParagraph><strong>Réduction des Coûts :</strong> Engager un développeur full stack peut souvent être plus économique que l'embauche de développeurs spécialisés dans chaque domaine. La capacité à gérer l'ensemble du processus de développement peut réduire les coûts liés à la coordination entre différentes équipes.</ScrollParagraph>
                        <ScrollParagraph><strong>Communication Simplifiée :</strong> Avec un développeur full stack, la communication est simplifiée, car une seule personne peut comprendre et gérer tous les aspects du projet. Cela réduit les risques de malentendus entre différentes équipes et accélère le processus de développement.</ScrollParagraph>
                        <ScrollParagraph><strong>Gain de Temps :</strong> Un développeur full stack est capable de passer rapidement d'une tâche à l'autre, ce qui peut accélérer le développement global du projet. Cela garantit une livraison plus rapide du produit final.</ScrollParagraph>
                        <ScrollParagraph><strong>Vision Globale du Projet :</strong> En comprenant à la fois le front-end et le back-end, un développeur full stack peut avoir une vision globale du projet. Cela lui permet de prendre des décisions éclairées sur la meilleure façon de structurer l'architecture et d'optimiser les performances.</ScrollParagraph>
                        <ScrollParagraph><strong>Capacité d'Adaptation :</strong> Les développeurs full stack sont souvent bien versés dans une variété de technologies et de langages de programmation. Cela leur permet de s'adapter facilement aux exigences spécifiques du projet et d'adopter de nouvelles technologies au fur et à mesure de leur évolution.</ScrollParagraph>
                        <ScrollParagraph><strong>Maintenance Simplifiée :</strong> La maintenance du site est simplifiée lorsque le même développeur est responsable du front-end et du back-end. Les mises à jour et les corrections peuvent être apportées de manière cohérente et efficace.</ScrollParagraph>
                    </div>
                </ScrollSection1>
            </div>}
        </>

    );
};

export default Home;
