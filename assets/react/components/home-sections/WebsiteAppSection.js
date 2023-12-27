import React, {useState} from 'react';
import imgWebsiteApp from "../../../images/website-app.webp";
import ScrollIntersectionEffect from "../ScrollIntersectionEffect";
import FlipCard from "../FlipCard";

const WebsiteAppSection = () => {
    return (
        <>
            <ScrollIntersectionEffect insideElement={true}>
                <section id="p__website-app" className="section section__title">
                    <div className="section__title--left scroll-element">
                        <FlipCard className="section--title-right" frontText={"Application Web".toUpperCase()} backText={"essai"} />
                    </div>
                    <div className="image-container section__title--right scroll-element">
                        <img src={imgWebsiteApp}  alt={"Application Web"}/>
                    </div>
                </section>
            </ScrollIntersectionEffect>
            <ScrollIntersectionEffect direction={"vertical"}>
                <section className={`section section__text`}>
                    <div className="section__text--container">
                        <h1>Les avantages d'une Application Web Sur Mesure pour Votre Entreprise</h1>
                        <ScrollIntersectionEffect>
                            <p>Une application web sur mesure est un outil puissant qui facilite le travail au quotidien. Adaptée précisément à vos besoins, elle est accessible depuis n'importe quel appareil connecté à Internet. Voici les principaux bénéfices pour votre entreprise :</p>
                        </ScrollIntersectionEffect>

                        <ScrollIntersectionEffect>
                            <h2>Accès Facile</h2>
                            <p>Accessible directement en ligne, elle est utilisable sur différents appareils, simplifiant son usage par vos employés et clients, que ce soit sur PC, tablette ou smartphone.</p>
                        </ScrollIntersectionEffect>

                        <ScrollIntersectionEffect>
                            <h2>Centralisation des Données</h2>
                            <p>Toutes vos données sont rassemblées en un lieu sûr. Cela simplifie la gestion, augmente la fiabilité et permet un accès rapide aux informations actualisées.</p>
                        </ScrollIntersectionEffect>

                        <ScrollIntersectionEffect>
                            <h2>Flexibilité du Travail à Distance</h2>
                            <p>L'application permet à vos employés de travailler de n'importe où, offrant ainsi plus de flexibilité et un meilleur équilibre travail-vie personnelle.</p>
                        </ScrollIntersectionEffect>

                        <ScrollIntersectionEffect>
                            <h2>Collaboration Optimisée</h2>
                            <p>Elle favorise le travail d'équipe en temps réel, même à distance, améliorant la communication, le partage d'informations et la prise de décisions collectives.</p>
                        </ScrollIntersectionEffect>

                        <ScrollIntersectionEffect>
                            <h2>Adaptabilité et Évolutivité</h2>
                            <p>Conçue pour évoluer avec votre entreprise, elle s'adapte facilement à vos besoins changeants avec la possibilité d'ajouter de nouvelles fonctionnalités.</p>
                        </ScrollIntersectionEffect>

                        <ScrollIntersectionEffect>
                            <h2>Protection des Données</h2>
                            <p>Profitez de mesures de sécurité avancées pour protéger vos données contre les menaces en ligne, grâce à des pare-feu et des protocoles de chiffrement robustes.</p>
                        </ScrollIntersectionEffect>

                        <ScrollIntersectionEffect>
                            <p>En conclusion, une application web sur mesure est une solution clé pour améliorer l'efficacité, la collaboration et la croissance de votre entreprise. Contactez-nous pour développer une application qui répond exactement à vos besoins.</p>
                        </ScrollIntersectionEffect>
                    </div>
                </section>
            </ScrollIntersectionEffect>

        </>
    );
};

export default WebsiteAppSection;
