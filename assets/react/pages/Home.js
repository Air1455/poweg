import React from 'react';
import Logo from "../components/Logo";
import {useSelector} from "react-redux";
import MerchantSiteSection from "../components/home-sections/MerchantSiteSection";
import WebsiteSection from "../components/home-sections/WebsiteSection";
import WebsiteAppSection from "../components/home-sections/WebsiteAppSection";
import PresentationSection from "../components/home-sections/PresentationSection";
import ScrollIntersectionEffect from "../components/ScrollIntersectionEffect";
import FullStackSection from "../components/home-sections/FullStackSection";
import {Button} from "@mui/material";
import {Link} from "react-scroll";

const Home = () => {
    const appBarIsDisplay= useSelector(state => state.base).appBarIsDisplay

    return (
        <>
            {appBarIsDisplay && <div id="home">
                <section className="section section__title section__title--80vh">
                    <h1>DÉVELOPPEMENT DE SITE WEB SUR MESURE</h1>
                </section>
                <PresentationSection />
                <WebsiteSection />
                <MerchantSiteSection />
                <WebsiteAppSection />
                <ScrollIntersectionEffect direction={"vertical"}>
                    <section className={`section section__text`} id="p__why-poweg">
                        <div className="section__text--container">
                            <h1>Pourquoi choisir <Logo /> ?</h1>
                            <ScrollIntersectionEffect>
                                <p>Créer un site web ou une application sur mesure est une entreprise passionnante, mais cela peut rapidement devenir complexe. Chez <Logo />, nous sommes là pour simplifier le processus et vous offrir des solutions personnalisées répondant à vos besoins uniques. Voici pourquoi choisir notre agence :</p>
                            </ScrollIntersectionEffect>
                            <ScrollIntersectionEffect>
                                <p><strong>Expertise Technique :</strong> <Logo /> maîtrise les dernières technologies et tendances du marché. Le directeur étant lui-même un programmeur
                                    <Link
                                    to="p__full-stack"
                                    title="Les avantages d'un développeur full stack"
                                    smooth={true}
                                    offset={-150}
                                    duration={1000}
                                    containerId={"root"}
                                    className={"linkToScroll"}
                                >
                                    Full Stack
                                </Link>, vous bénéficiez d'une expertise technique, garantissant un produit final performant et à la pointe de l'innovation.</p>
                            </ScrollIntersectionEffect>
                            <ScrollIntersectionEffect>
                                <p><strong>Gain de Temps et d'Énergie :</strong> Le développement d'un site web ou d'une application demande du temps et de l'énergie. En faisant appel à <Logo />, vous pouvez vous concentrer sur votre cœur de métier pendant que nous nous occupons de la partie technique. Cela vous permet d'économiser des ressources précieuses et d'obtenir un résultat professionnel plus rapidement.</p>
                            </ScrollIntersectionEffect>
                            <ScrollIntersectionEffect>
                                <p><strong>Design Personnalisé :</strong> Un design attrayant et intuitif est essentiel pour attirer et retenir les utilisateurs. Notre équipe de designers travaille en étroite collaboration avec vous pour créer une interface utilisateur unique et personnalisée, en harmonie avec l'identité visuelle de votre entreprise.</p>
                            </ScrollIntersectionEffect>
                            <ScrollIntersectionEffect>
                                <p><strong>Suivi et Support :</strong> Le développement ne s'arrête pas à la livraison du produit. <Logo /> assure un suivi constant et fournit un support technique pour garantir le bon fonctionnement de votre site web ou de votre application. Nous sommes là pour résoudre les problèmes, effectuer des mises à jour et répondre à vos questions.</p>
                            </ScrollIntersectionEffect>
                            <ScrollIntersectionEffect>
                                <p><strong>Éviter les Erreurs Coûteuses :</strong> Les erreurs de développement peuvent être coûteuses à corriger. En travaillant avec une agence expérimentée comme <Logo />, vous minimisez le risque d'erreurs coûteuses et vous assurez que votre projet est entre les mains de professionnels fiables</p>
                            </ScrollIntersectionEffect>
                            <ScrollIntersectionEffect>
                                <p>Choisir <Logo />, c'est investir dans la réussite de votre projet numérique. Contactez-nous dès aujourd'hui pour discuter de vos idées et commencer à transformer votre vision en réalité.</p></ScrollIntersectionEffect>
                        </div>
                    </section>
                </ScrollIntersectionEffect>
                <FullStackSection />
            </div>}
        </>

    );
};

export default Home;
