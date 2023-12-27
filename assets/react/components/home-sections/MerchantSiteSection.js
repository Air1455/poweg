import React from 'react';
import imgMerchantSite from "../../../images/merchant-site-low.webp";
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
                    <h1>Les avantages d'un E-commerce pour Votre Entreprise</h1>
                    <ScrollIntersectionEffect>
                        <p>Avoir une boutique en ligne est essentiel aujourd'hui pour le développement de votre entreprise. Cela permet d'augmenter vos ventes, de renforcer votre présence sur internet et d'offrir une meilleure expérience à vos clients. Voici pourquoi un site e-commerce est bénéfique :</p>
                    </ScrollIntersectionEffect>

                    <ScrollIntersectionEffect>
                        <h2>Boostez vos Ventes</h2>
                        <p>Une boutique en ligne met en valeur vos produits et simplifie le processus d'achat, ce qui stimule vos ventes et contribue à la croissance de votre entreprise.</p>
                    </ScrollIntersectionEffect>

                    <ScrollIntersectionEffect>
                        <h2>Disponibilité 24/7</h2>
                        <p>Votre e-commerce est accessible à tout moment, offrant à vos clients la liberté d'acheter quand ils le souhaitent, augmentant ainsi leur satisfaction.</p>
                    </ScrollIntersectionEffect>

                    <ScrollIntersectionEffect>
                        <h2>Retours Clients Utiles</h2>
                        <p>Les avis des clients sur vos produits fournissent des informations précieuses, vous aidant à améliorer votre offre et à gagner la confiance des nouveaux acheteurs.</p>
                    </ScrollIntersectionEffect>

                    <ScrollIntersectionEffect>
                        <h2>Sécurité des Paiements</h2>
                        <p>Les transactions sur votre site sont sécurisées, renforçant la confiance des clients dans l'achat en ligne sur votre plateforme.</p>
                    </ScrollIntersectionEffect>

                    <ScrollIntersectionEffect>
                        <h2>Marketing sur Mesure</h2>
                        <p>Profitez de votre e-commerce pour lancer des campagnes marketing ciblées, comme des promotions spéciales, pour attirer et fidéliser une clientèle variée.</p>
                    </ScrollIntersectionEffect>

                    <ScrollIntersectionEffect>
                        <h2>Gestion Simplifiée</h2>
                        <p>Un e-commerce facilite la gestion des stocks et des commandes, rendant vos opérations plus fluides et efficaces.</p>
                    </ScrollIntersectionEffect>

                    <ScrollIntersectionEffect>
                        <h2>Élargir votre Marché</h2>
                        <p>Avec un e-commerce, vous pouvez atteindre des clients au-delà de votre zone géographique habituelle, ouvrant des opportunités de croissance mondiale.</p>
                    </ScrollIntersectionEffect>

                    <ScrollIntersectionEffect>
                        <h2>Connaissance des Clients</h2>
                        <p>Grâce aux analyses de votre site, vous obtenez des données précieuses sur les préférences et comportements de vos clients, vous permettant d'adapter vos offres et services.</p>
                    </ScrollIntersectionEffect>

                    <ScrollIntersectionEffect>
                        <p>En conclusion, une boutique en ligne est plus qu'un simple canal de vente, c'est une stratégie complète pour accroître la visibilité et le succès de votre entreprise. Contactez-nous pour créer un site e-commerce personnalisé qui répondra à vos besoins.</p>
                    </ScrollIntersectionEffect>
                </div>
            </section>
        </ScrollIntersectionEffect>

    </>);
};

export default MerchantSiteSection;
