import React from 'react';
import imgWebsite from "../../../images/website.webp";
import ScrollIntersectionEffect from "../ScrollIntersectionEffect";
import FlipCard from "../FlipCard";

const WebsiteSection = () => {
    const backTitle= "Exemple de tarifs"
    const backBody= <div className="rates-card">
        <div className="rates-card__element rates-card__element-1">
            <div className="rates-card__element--title">Simple page de présentation</div>
            <div className="rates-card__element--rate"><span>200 000</span> F CFA</div>
            <div className="rates-card__element--line">Une page interactive et moderne qui présente vors société</div>
            <div className="rates-card__element--line">Hébergement + nom de domaine 20 000 F CFA par an</div>
            <div className="rates-card__element--line">Hébergement + nom de domaine 20 000 F CFA par an</div>
        </div>
        <div className="rates-card__element rates-card__element-2">
            <div className="rates-card__element--title"></div>
        </div>
    </div>

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
                {/* Section principale */}
                <section className={`section section__text`}>
                    <div className="section__text--container">
                        {/* Titre principal */}
                        <h1>Pourquoi créer un Site Vitrine pour votre entreprise ?</h1>

                        <ScrollIntersectionEffect>
                            {/* Introduction */}
                            <p>
                                Un site vitrine, c’est comme une carte de visite en ligne, qui met en valeur les produits, services et valeurs de votre entreprise de façon élégante et professionnelle. Même s’il ne permet pas de vendre directement en ligne, il présente de nombreux atouts stratégiques qui favorisent la croissance et le succès de votre entreprise.
                                <br />Voici les raisons pour lesquelles vous avez tout intérêt à créer un site vitrine pour votre entreprise :
                            </p>
                        </ScrollIntersectionEffect>

                        {/* Avantages du site vitrine */}
                        <ScrollIntersectionEffect>
                            <p><strong>Image Professionnelle :</strong> Un site vitrine de qualité améliore l’image professionnelle de votre entreprise. C’est souvent par ce biais que vos clients potentiels vous découvrent, et un site attrayant et informatif leur donne une bonne impression, renforçant ainsi la confiance en votre entreprise.</p>
                        </ScrollIntersectionEffect>
                        <ScrollIntersectionEffect>
                            <p><strong>Opportunités Commerciales Élargies :</strong> La présence en ligne d’un site vitrine vous ouvre des opportunités commerciales plus larges. Elle vous permet de nouer de nouvelles relations, de trouver des partenaires, de toucher de nouveaux marchés ainsi que d’être visible à l’échelle mondiale.</p>
                        </ScrollIntersectionEffect>
                        <ScrollIntersectionEffect>
                            <p><strong>Accessibilité 24/7 :</strong> Votre site vitrine est accessible 24h/24, 7j/7. Cela permet à vos clients de consulter des informations, de passer des commandes ou de vous joindre à tout moment, même en dehors des horaires d’ouverture. Cela augmente considérablement la satisfaction client et la facilité.</p>
                        </ScrollIntersectionEffect>
                        <ScrollIntersectionEffect>
                            <p><strong>Interaction avec les Clients :</strong> Un site vitrine vous offre un moyen direct d’interagir avec vos clients. Les formulaires de contact, les avis et les chats en direct facilitent la communication, vous permettant ainsi de répondre rapidement aux demandes des clients, de collecter des feedbacks et de renforcer la fidélité client.</p>
                        </ScrollIntersectionEffect>
                        <ScrollIntersectionEffect>
                            <p><strong>Marketing Numérique :</strong> Un site vitrine est une plateforme efficace pour mener des actions de marketing numérique. Vous pouvez utiliser des techniques telles que le référencement (SEO), les réseaux sociaux et l’emailing pour attirer plus de visiteurs et faire connaître vos produits et services de manière optimale.</p>
                        </ScrollIntersectionEffect>
                        <ScrollIntersectionEffect>
                            <p><strong>Analyse des Performances :</strong> Grâce à des outils d’analyse web, vous pouvez suivre les performances de votre site vitrine, analyser le comportement des visiteurs, évaluer l’efficacité de vos campagnes et adapter votre stratégie en fonction. Cela vous donne un avantage concurrentiel et une base solide pour prendre des décisions judicieuses.</p>
                        </ScrollIntersectionEffect>

                        {/* Conclusion */}
                        <ScrollIntersectionEffect>
                            <p>En résumé, un site vitrine ne se contente pas de présenter votre entreprise en ligne. C’est un outil stratégique qui peut booster votre entreprise vers de nouveaux horizons. Contactez-nous dès maintenant pour discuter de la création d’un site vitrine adapté à vos besoins et objectifs commerciaux.</p>
                        </ScrollIntersectionEffect>
                    </div>
                </section>
            </ScrollIntersectionEffect>
        </>
    );
};

export default WebsiteSection;
