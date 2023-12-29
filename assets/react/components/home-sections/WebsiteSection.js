import React from 'react';
import imgWebsite from "../../../images/website.webp";
import ScrollIntersectionEffect from "../ScrollIntersectionEffect";
import FlipCard from "../FlipCard";
import Paper from "@mui/material/Paper";
import {GrNext, GrPrevious} from "react-icons/gr";
import Button from "@mui/material/Button";
import Carousel from 'react-bootstrap/Carousel';


const WebsiteSection = () => {
    const backTitle= "Exemple de tarifs"
    const backBody= <Carousel data-bs-theme="dark">
        <Carousel.Item interval={3000}>
            <div className="rates-card">
                <div className="rates-card__element rates-card__element-1">
                    <div className="rates-card__element--title">Simple page de présentation</div>
                    <div className="rates-card__element--description">Une page interactive et moderne qui présente votre société</div>
                </div>
                <div className="rates-card__element rates-card__element-2">
                    <div className="rates-card__element--rate"><div><span>200 000</span> F CFA</div></div>
                    <div className="rates-card__element--rate"><div>Hébergement<br />+ nom de domaine<br /><span>20 000</span> F CFA/an</div></div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <div className="rates-card">
                <div className="rates-card__element rates-card__element-1">
                    <div className="rates-card__element--title">Page de présentation avec formulaire de contact</div>
                    <div className="rates-card__element--description">Une page interactive et moderne qui présente votre société<br />+<br />Un formulaire de contact pour que vos clients puissent vous écrire en direct.</div>
                </div>
                <div className="rates-card__element rates-card__element-2">
                    <div className="rates-card__element--rate"><div><span>300 000</span> F CFA</div></div>
                    <div className="rates-card__element--rate"><div>Hébergement<br />+ nom de domaine<br /><span>20 000</span> F CFA/an</div></div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <div className="rates-card">
                <div className="rates-card__element rates-card__element-1">
                    <div className="rates-card__element--title">Page de présentation avec administration</div>
                    <div className="rates-card__element--description">Une page interactive et moderne qui présente votre société<br />+<br />Une partie administration pour modifier vous même le contenu.</div>

                </div>
                <div className="rates-card__element rates-card__element-2">
                    <div className="rates-card__element--rate"><div><span>400 000</span> F CFA</div></div>
                    <div className="rates-card__element--rate"><div>Hébergement<br />+ nom de domaine<br /><span>30 000</span> F CFA/an</div></div>
                </div>
            </div>
        </Carousel.Item>
    </Carousel>

    return (
        <>
            <ScrollIntersectionEffect insideElement={true}>
                <section id="p__website" className="section section__title">
                    <div className="image-container scroll-element">
                        <img src={imgWebsite}  alt={"Site vitrine"}/>
                    </div>
                    <div className="scroll-element">
                        <FlipCard className="section--title-right" frontText={"Site vitrine".toUpperCase()} backTitle={backTitle} backBody={backBody} />
                    </div>
                </section>
            </ScrollIntersectionEffect>
            <ScrollIntersectionEffect direction={"vertical"}>
                <section className={`section section__text`}>
                    <div className="section__text--container">
                        <h1>Les avantages d'un Site Vitrine pour votre Entreprise</h1>
                        <ScrollIntersectionEffect>
                            <p>Un site vitrine est une carte de visite numérique qui présente élégamment vos produits, services et valeurs. Même sans vente directe en ligne, il offre des avantages clés pour la croissance de votre entreprise. Voici pourquoi un site vitrine est un atout majeur :</p>
                        </ScrollIntersectionEffect>

                        <ScrollIntersectionEffect>
                            <h2>Image Professionnelle</h2>
                            <p>Un site vitrine bien conçu renforce votre image professionnelle. C'est souvent la première impression que les clients ont de votre entreprise, et un site attrayant les convainc de la qualité de vos services.</p>
                        </ScrollIntersectionEffect>

                        <ScrollIntersectionEffect>
                            <h2>Élargir les Opportunités Commerciales</h2>
                            <p>Être en ligne avec un site vitrine vous ouvre des portes à de nouvelles relations commerciales, des partenariats et un accès à de nouveaux marchés, même à l'international.</p>
                        </ScrollIntersectionEffect>

                        <ScrollIntersectionEffect>
                            <h2>Accessible en Tout Temps</h2>
                            <p>Votre site est disponible 24/7, permettant aux clients d'accéder à des informations et de vous contacter à leur convenance, ce qui augmente leur satisfaction.</p>
                        </ScrollIntersectionEffect>

                        <ScrollIntersectionEffect>
                            <h2>Interactions avec les Clients</h2>
                            <p>Le site facilite la communication avec vos clients grâce aux formulaires de contact et chats en direct, ce qui vous permet de répondre rapidement à leurs besoins et de construire une relation de fidélité.</p>
                        </ScrollIntersectionEffect>

                        <ScrollIntersectionEffect>
                            <h2>Analyse et Stratégie</h2>
                            <p>Les outils d’analyse web vous aident à comprendre le comportement des visiteurs, à mesurer l’impact de vos actions et à ajuster vos stratégies pour une efficacité maximale.</p>
                        </ScrollIntersectionEffect>

                        <ScrollIntersectionEffect>
                            <p>En conclusion, un site vitrine est plus qu'une simple présentation en ligne, c'est un outil stratégique pour propulser votre entreprise. Contactez-nous pour créer un site vitrine qui répond parfaitement à vos objectifs commerciaux.</p>
                        </ScrollIntersectionEffect>
                    </div>
                </section>
            </ScrollIntersectionEffect>

        </>
    );
};

export default WebsiteSection;
