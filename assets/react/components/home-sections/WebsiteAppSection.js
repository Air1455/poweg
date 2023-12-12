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
                        <h1>Les avantages d’une application web sur mesure pour votre entreprise</h1>
                        <ScrollIntersectionEffect>
                            <p>
                                Une application web sur mesure simplifie votre travail.
                                <span className="mt-1"></span>
                                Elle accomplit automatiquement à votre place les tâches informatiques de votre quotidien, vous faisant gagner du temps et évitant les erreurs.
                                C'est un logiciel adapté exactement à vos besoins, accessible depuis n'importe quel appareil connecté à Internet.
                                <span className="mt-1"></span>
                                Voici quelques raisons supplémentaires d'envisager sérieusement d'équiper votre entreprise d'une application web sur mesure :
                                <span className="mt-1"></span>
                            </p>
                        </ScrollIntersectionEffect>
                        <ScrollIntersectionEffect>
                            <p><strong>Aucune installation :</strong> Pas besoin d'installer l'application ! Elle est accessible sur divers appareils, améliorant ainsi son utilisation pour vos employés et clients, qu'ils préfèrent un ordinateur de bureau, une tablette ou un téléphone portable.</p>
                        </ScrollIntersectionEffect>
                        <ScrollIntersectionEffect>
                            <p><strong>Centralisation des Données :</strong> Elle rassemble toutes vos données en un seul endroit sécurisé pour une gestion facilitée, une fiabilité accrue, et un accès rapide aux informations les plus récentes.</p>
                        </ScrollIntersectionEffect>
                        <ScrollIntersectionEffect>
                            <p><strong>Travail à Distance :</strong> Vos employés peuvent travailler de n'importe où, que ce soit au bureau, à la maison, ou en voyage. L'accès à l'application via Internet offre une flexibilité favorisant l'équilibre entre vie professionnelle et vie personnelle.</p>
                        </ScrollIntersectionEffect>
                        <ScrollIntersectionEffect>
                            <p><strong>Collaboration en Temps Réel :</strong> L'application facilite la collaboration instantanée entre les membres de votre équipe, même s'ils sont à des endroits différents. Elle améliore la communication, le partage d'informations, et les prises de décisions collectives pour une meilleure performance opérationnelle.</p>
                        </ScrollIntersectionEffect>
                        <ScrollIntersectionEffect>
                            <p><strong>Évolutivité et Flexibilité :</strong> Conçue pour s'adapter à la croissance de votre entreprise, vous pourrez sans difficulté ajouter de nouvelles fonctionnalités, pour répondre aux besoins changeants de manière flexible.</p>
                        </ScrollIntersectionEffect>
                        <ScrollIntersectionEffect>
                            <p><strong>Sécurité Renforcée :</strong> En optant pour une application web sur mesure hébergée sur internet, bénéficiez de mesures de sécurité avancées, comme des pare-feu et des protocoles de chiffrement, renforçant ainsi la sécurité de vos données contre les menaces en ligne.</p>
                        </ScrollIntersectionEffect>
                        <ScrollIntersectionEffect>
                            <p>En résumé, une application web sur mesure hébergée sur internet n’est pas seulement un outil, mais une solution innovante qui favorise l’efficacité, la collaboration et la croissance de votre entreprise. N’hésitez pas à nous contacter pour discuter de la création d’une application sur mesure répondant à vos besoins spécifiques.</p>
                        </ScrollIntersectionEffect>
                    </div>
                </section>
            </ScrollIntersectionEffect>
        </>
    );
};

export default WebsiteAppSection;
