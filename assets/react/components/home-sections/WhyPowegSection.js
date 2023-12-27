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
                            La création d'un site web ou d'une application personnalisée est un vrai défi. Beaucoup d'agences optent pour des solutions simples, mais cela peut limiter les fonctionnalités. Chez <Logo />, nous allons au-delà avec des solutions qui correspondent vraiment à vos besoins.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <h2>Contrôle Total et Hautes Performances</h2>
                        <p>
                            Nous codons tout de A à Z, offrant une personnalisation complète et des performances supérieures, tout en respectant les délais.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <h2>Expertise Technique Avancée</h2>
                        <p>
                            Notre équipe, dirigée par un programmeur Full Stack, utilise les dernières technologies pour garantir des solutions innovantes et efficaces.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <h2>Design Personnalisé</h2>
                        <p>
                            Nous travaillons en étroite collaboration avec vous pour créer des interfaces qui reflètent parfaitement votre marque et vos objectifs.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <h2>Efficacité et Gain de Temps</h2>
                        <p>
                            En nous confiant le développement technique, vous pouvez vous concentrer sur ce que vous faites de mieux, tout en bénéficiant de résultats rapides et professionnels.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <h2>Suivi et Support Continu</h2>
                        <p>
                            Notre assistance ne s'arrête pas après la livraison. Nous offrons un support continu pour assurer le bon fonctionnement et l'évolution de votre projet.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <h2>Minimiser les Risques</h2>
                        <p>
                            Notre expérience réduit les erreurs potentielles, garantissant que votre projet est entre des mains expertes et fiables.
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p>
                            Choisir <Logo /> c'est opter pour une expertise qui transforme vos idées en réalité réussie. Contactez-nous pour débuter votre projet.
                        </p>
                    </ScrollIntersectionEffect>
                </div>
            </section>
        </ScrollIntersectionEffect>


    );
};

export default WhyPowegSection;
