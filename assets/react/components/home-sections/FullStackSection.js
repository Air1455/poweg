import React from 'react';
import ScrollIntersectionEffect from "../ScrollIntersectionEffect";

const FullStackSection = () => {
    return (
        <ScrollIntersectionEffect direction={"vertical"}>
            <section className={`section section__text`} id="p__presentation">
                <div className="section__text--container" id="p__full-stack">
                    <h1>Les avantages d'un développeur full stack</h1>
                    <ScrollIntersectionEffect>
                        <p>Engager un développeur full stack pour la création de votre site Internet offre de nombreux avantages pratiques.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p>
                            Un développeur full stack est un professionnel qui a une expertise complète dans la construction d'un site, du début à la fin.
                            Voici quelques-uns des avantages convaincants de choisir un développeur full stack pour votre projet en ligne :
                        </p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p><strong>Communication Simplifiée :</strong> Avec un développeur full stack, la communication est simplifiée, car une seule personne peut comprendre et gérer tous les aspects du projet. Cela réduit les risques de malentendus entre différentes équipes et accélère le processus de développement.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p><strong>Vision Globale du Projet :</strong> En comprenant à la fois l'apparence du site et les fonctionnalités, un développeur full stack peut avoir une vision d'ensemble du projet. Cela lui permet de prendre des décisions éclairées sur la meilleure façon de structurer le site et d'en optimiser les performances.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p><strong>Gain de Temps :</strong> Un développeur full stack peut passer rapidement d'une tâche à l'autre, accélérant ainsi le développement global du projet. Cela garantit une livraison plus rapide du produit final.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p><strong>Économies de Coûts :</strong> Engager un développeur full stack peut souvent être plus économique que l'embauche de spécialistes dans chaque domaine. La capacité à gérer tout le processus de développement peut réduire les coûts liés à la coordination entre différentes équipes.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p><strong>Polyvalence et Adaptabilité :</strong> Un développeur full stack peut gérer toutes les étapes du développement, de la conception de l'apparence du site à la mise en place des fonctionnalités. Cela permet de s'adapter rapidement aux besoins changeants de votre entreprise.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p><strong>Capacité d'Adaptation :</strong> Les développeurs full stack sont souvent compétents dans diverses technologies et langages de programmation. Cela leur permet de s'adapter facilement aux besoins spécifiques du projet et d'adopter de nouvelles technologies au fur et à mesure de leur évolution.</p>
                    </ScrollIntersectionEffect>
                    <ScrollIntersectionEffect>
                        <p><strong>Maintenance Simplifiée :</strong> La maintenance du site est facilitée lorsque le même développeur est responsable de son apparence et de ses fonctionnalités. Les mises à jour et les corrections peuvent être apportées de manière cohérente et efficace.</p>
                    </ScrollIntersectionEffect>
                </div>
            </section>
        </ScrollIntersectionEffect>
    );
};

export default FullStackSection;
