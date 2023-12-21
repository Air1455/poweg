import React from 'react';
import imgMerchantSite from "../../../images/merchant-site.webp";
import ScrollIntersectionEffect from "../ScrollIntersectionEffect";
import FlipCard from "../FlipCard";

const MerchantSiteSection = () => {
    const backTitle= "Exemple de tarifs"
    const backBody= <>

    </>
    return (<>

        <ScrollIntersectionEffect insideElement={true}>
            <section id="p__merchant-site" className="section section__title">
                <div className="section__title--left scroll-element">
                    <FlipCard
                        frontText={"E-Commerce".toUpperCase()}
                        backTitle={backTitle}
                        backBody={backBody}
                    />
                </div>
                <div className="image-container section__title--right scroll-element">
                    <img src={imgMerchantSite}  alt={"Site marchand"}/>
                </div>
            </section>
        </ScrollIntersectionEffect>
        <ScrollIntersectionEffect direction={"vertical"}>
            <section className={`section section__text`}>
                <div className="section__text--container">
                    <h1>Les Avantages d'un E-Commerce pour Votre Entreprise</h1>
                    <ScrollIntersectionEffect><p>Dans l'ère numérique actuelle, posséder un site marchand est un élément clé pour propulser votre entreprise vers de nouveaux horizons. Les avantages stratégiques d'un site marchand contribuent à accroître vos ventes, à renforcer votre présence en ligne et à offrir une expérience d'achat optimale à vos clients. Voici pourquoi investir dans un site marchand est essentiel pour la croissance de votre entreprise :</p></ScrollIntersectionEffect>
                    <ScrollIntersectionEffect><p><strong>Augmentation des Ventes :</strong> Un site marchand offre une plateforme pour présenter vos produits de manière attrayante. Les clients peuvent facilement parcourir les articles, comparer les prix et effectuer des achats en quelques clics, ce qui stimule les ventes et la croissance de votre entreprise.</p></ScrollIntersectionEffect>
                    <ScrollIntersectionEffect><p><strong>Accessibilité 24/7 :</strong> Votre boutique en ligne est ouverte 24 heures sur 24, 7 jours sur 7. Les clients peuvent explorer vos produits, effectuer des achats et obtenir des informations à tout moment, offrant une commodité maximale et augmentant la satisfaction client.</p></ScrollIntersectionEffect>
                    <ScrollIntersectionEffect><p><strong>Feedback Instantané :</strong> Les clients peuvent laisser des avis et des commentaires sur vos produits, fournissant un retour d'information instantané. Cela contribue à renforcer la confiance des acheteurs potentiels et à améliorer la qualité de vos produits et services.</p></ScrollIntersectionEffect>
                    <ScrollIntersectionEffect><p><strong>Sécurité des Transactions :</strong> Les sites marchands intègrent des protocoles de sécurité avancés pour garantir des transactions en ligne sûres. Cela renforce la confiance des clients, les encourageant à effectuer des achats en toute sécurité sur votre plateforme.</p></ScrollIntersectionEffect>
                    <ScrollIntersectionEffect><p><strong>Marketing Ciblé :</strong> Un site marchand offre des possibilités étendues pour mettre en œuvre des stratégies de marketing ciblées. Des fonctionnalités telles que les promotions, les remises et les programmes de fidélité peuvent être personnalisées pour attirer et fidéliser les clients.</p></ScrollIntersectionEffect>
                    <ScrollIntersectionEffect><p><strong>Gestion Simplifiée des Stocks :</strong> Les systèmes de gestion intégrés facilitent le suivi des niveaux de stock, la gestion des commandes et la mise à jour en temps réel des informations produit. Cela permet une gestion efficace des opérations commerciales.</p></ScrollIntersectionEffect>
                    <ScrollIntersectionEffect><p><strong>Élargissement du Marché :</strong> Un site marchand vous permet d'atteindre un public mondial. Vous n'êtes plus limité par des frontières géographiques, élargissant ainsi votre marché potentiel et créant de nouvelles opportunités commerciales à l'échelle mondiale.</p></ScrollIntersectionEffect>
                    <ScrollIntersectionEffect><p><strong>Collecte de Données Client :</strong> Grâce aux fonctionnalités de suivi et d'analyse, un site marchand vous permet de collecter des données sur le comportement d'achat de vos clients. Ces informations précieuses peuvent être utilisées pour personnaliser les offres, améliorer la stratégie marketing et renforcer la fidélité client.</p></ScrollIntersectionEffect>
                    <ScrollIntersectionEffect><p>En conclusion, un site marchand n'est pas simplement une plateforme de vente en ligne, mais une stratégie commerciale complète. Il offre des avantages significatifs pour augmenter la visibilité de votre entreprise, stimuler les ventes et créer des relations durables avec vos clients. Contactez-nous dès aujourd'hui pour discuter de la création d'un site marchand adapté à vos besoins spécifiques.</p></ScrollIntersectionEffect>
                </div>

            </section>
        </ScrollIntersectionEffect>
    </>);
};

export default MerchantSiteSection;
