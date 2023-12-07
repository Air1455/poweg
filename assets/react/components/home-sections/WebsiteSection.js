import React from 'react';
import imgWebsite from "../../../images/website.webp";
import ScrollIntersectionEffect from "../ScrollIntersectionEffect";
import FlipCard from "../FlipCard";

const WebsiteSection = () => {
    const backTitle= "Exemple de tarifs"
    const backBody= <>

    </>

    return (
        <>
            <ScrollIntersectionEffect insideElement={true}>
                <section id="p__website" className="section section__title">
                    <div className="image-container scroll-element">
                        <img src={imgWebsite}  alt={"Site internet"}/>
                    </div>
                    <div className="scroll-element">
                        <FlipCard className="section--title-right" frontText={"Site internet".toUpperCase()} backTitle={backTitle} backBody={backBody} />
                    </div>
                </section>
            </ScrollIntersectionEffect>
            <ScrollIntersectionEffect direction={"vertical"}>
                <section className={`section section__text`}>
                    <div className="section__text--container">
                        <h1>L'importance d'avoir un site Internet pour votre société</h1>
                        <ScrollIntersectionEffect><p>A l'ère du numérique, avoir une présence en ligne est devenu essentiel pour toute entreprise. Un site Internet offre de nombreux avantages stratégiques qui contribuent à la croissance et à la réussite de votre société. Voici pourquoi vous devriez considérer sérieusement la création d'un site web pour votre entreprise :</p></ScrollIntersectionEffect>
                        <ScrollIntersectionEffect><p><strong>Image Professionnelle :</strong> Un site Internet bien conçu renforce l'image professionnelle de votre société. C'est souvent le premier point de contact avec vos clients potentiels, et un site soigné et informatif crée une impression positive, renforçant ainsi la crédibilité de votre entreprise.</p></ScrollIntersectionEffect>
                        <ScrollIntersectionEffect><p><strong>Expansion des Opportunités Commerciales :</strong> En ayant un site web, vous ouvrez de nouvelles opportunités commerciales. Que ce soit par le biais de ventes en ligne, de partenariats ou de collaborations, votre présence en ligne élargit votre champ d'action et vous permet d'explorer de nouveaux marchés.</p></ScrollIntersectionEffect>
                        <ScrollIntersectionEffect><p><strong>Accessibilité 24/7 :</strong> Votre site web est accessible 24 heures sur 24, 7 jours sur 7. Cela permet à vos clients de rechercher des informations, de faire des achats ou de vous contacter à tout moment, même en dehors des heures de bureau. Cela améliore considérablement la satisfaction client et la commodité.</p></ScrollIntersectionEffect>
                        <ScrollIntersectionEffect><p><strong>Interaction avec les Clients :</strong> Un site web offre un moyen direct d'interagir avec vos clients. Les formulaires de contact, les commentaires et les chats en direct facilitent la communication, permettant ainsi de répondre rapidement aux questions des clients, de recueillir des retours d'expérience et de renforcer la relation client.</p></ScrollIntersectionEffect>
                        <ScrollIntersectionEffect><p><strong>Marketing Numérique :</strong> Un site Internet est une plateforme puissante pour mener des activités de marketing numérique. Vous pouvez utiliser des stratégies telles que le référencement (SEO), les médias sociaux et le marketing par e-mail pour attirer davantage de visiteurs et promouvoir vos produits et services de manière efficace.</p></ScrollIntersectionEffect>
                        <ScrollIntersectionEffect><p><strong>Visibilité Mondiale :</strong> Un site web permet à votre entreprise d'être visible à l'échelle mondiale. Les clients potentiels peuvent découvrir vos produits et services à tout moment, de n'importe où dans le monde, ce qui élargit considérablement votre audience et vos opportunités commerciales.</p></ScrollIntersectionEffect>
                        <ScrollIntersectionEffect><p><strong>Analyse des Performances :</strong> Grâce à des outils d'analyse web, vous pouvez suivre les performances de votre site, comprendre le comportement des visiteurs, mesurer l'efficacité de vos campagnes et ajuster votre stratégie en conséquence. Cela vous donne un avantage concurrentiel et une base solide pour prendre des décisions éclairées.</p></ScrollIntersectionEffect>
                        <ScrollIntersectionEffect><p>En conclusion, un site Internet est bien plus qu'une simple vitrine en ligne. C'est un outil stratégique qui peut propulser votre entreprise vers de nouveaux sommets. Contactez-nous dès aujourd'hui pour discuter de la création d'un site web adapté à vos besoins et objectifs commerciaux.</p></ScrollIntersectionEffect>
                    </div>
                </section>
            </ScrollIntersectionEffect>
        </>
    );
};

export default WebsiteSection;
