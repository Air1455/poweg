import React from 'react';
import Logo from "../Logo";
import ScrollIntersectionEffect from "../ScrollIntersectionEffect";
import {Link} from "react-scroll";

const WhyPowegSection = () => {
    return (
        <ScrollIntersectionEffect direction={"vertical"} insideElement={true}>
            <section className={`section section__text`} id="p__why-poweg">
                <div className="section__text--container">
                    <h1>Pourquoi choisir <Logo /> ?</h1>
                    <ScrollIntersectionEffect>
                        <p>
                            La création d'un site web ou d'une application sur mesure est une tâche complexe.
                            De nombreuses agences utilisent des outils automatisés qui permettent de créer des sites avec peu voir aucune connaissance en programmation.
                            <br />Bien que cette pratique, appelée le "no code", gagne en popularité, elle conduit souvent à des sites uniformes et limités.
                        </p><p>
                            Chez <Logo />, nous maitrisons les principales langues de programmation, cela nous permet de proposer des solutions personnalisées, adaptées à vos besoins spécifiques et dépassant les limitations standards.
                        </p><p>
                            Choisir notre agence, c'est bénéficier de multiples avantages :
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p>
                            <strong>Contrôle total et performances optimales :</strong> Chez <Logo />, chaque projet est intégralement codé, ce qui signifie que chaque ligne de code est maîtrisée. L'utilisation d'outils tels que les frameworks et l'intelligence artificielle nous permet de rivaliser avec les délais des solutions automatisées.
                            <br />Cette approche garantit un contrôle total, une personnalisation approfondie et des performances optimales.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p><strong>Expertise Technique :</strong> Avec une maîtrise des dernières technologies et tendances du marché, <Logo /> garantit un produit performant et innovant. Le directeur, lui-même programmeur <Link to="p__full-stack" title="Les avantages d'un développeur full stack" smooth={true} offset={-150} duration={1000} containerId={"root"} className={"linkToScroll"}>Full Stack</Link>, apporte une expertise technique précieuse.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p><strong>Design Personnalisé :</strong> En travaillant en étroite collaboration avec vous, nous créons une interface utilisateur unique et personnalisée en harmonie avec l'identité visuelle de votre entreprise.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p><strong>Gain de Temps et d'Énergie :</strong> En nous confiant la partie technique du développement, vous pouvez vous concentrer sur votre cœur de métier. <Logo /> économise vos ressources, vous permettant d'obtenir un résultat professionnel plus rapidement.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p><strong>Suivi et Support :</strong> Au-delà de la livraison, <Logo /> assure un suivi constant et un support technique pour garantir le bon fonctionnement de votre site ou application, résoudre les problèmes, effectuer des mises à jour et répondre à vos questions.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p><strong>Éviter les Erreurs Coûteuses :</strong> Collaborer avec une agence expérimentée comme <Logo /> minimise le risque d'erreurs coûteuses, assurant que votre projet est entre les mains de professionnels fiables.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p>En résumé, choisir <Logo /> signifie investir dans la réussite de votre projet. Contactez-nous aujourd'hui pour discuter de vos idées et transformer votre vision en réalité.</p>
                    </ScrollIntersectionEffect>
                </div>
            </section>
        </ScrollIntersectionEffect>

    );
};

export default WhyPowegSection;
