import React from 'react';
import Collapse from '../components/collapse';


const Sophie = () => {

    
    return (
        <>
            
            <main className="main">

                <div className="prez">               

                    <div className="banner">
                        <img src="/assets/images/sophie-bluel-desktop.webp" alt="Aperçu du site Sophie Bluel, architecte d'intérieur" />
                    </div>

                    <div className="branding">
                        <div className="infos">
                            <h2 className="title">Sophie Bluel</h2>
                            <h3 className="subtitle">Architecte d'intérieur</h3>
                        </div>
                        <div className="logo">
                            <img src="/assets/images/sophie-bluel-logo.png" alt="Logo de Sophie Bluel" />
                        </div>
                    </div>

                    <div className="description">
                        <p>
                        Le projet consiste à développer un site portfolio interactif pour une architecte d’intérieur, 
                        en mettant l'accent sur une interface dynamique et intuitive. </p>
                        <p>
                        L’objectif est de présenter les travaux réalisés par l’architecte tout en offrant 
                        une gestion simplifiée des contenus pour l’administrateur. 
                        </p><p>
                        Le projet inclut trois missions principales : <br />
                        - intégrer une page de présentation des réalisations à partir du HTML fourni, <br />
                        - développer une page de connexion sécurisée pour l’administrateur, <br />
                        - et concevoir une modale permettant d’uploader de nouveaux médias 
                        directement depuis le site. 
                        </p><p>
                        Le design du site est basé sur des maquettes fournies via Figma, et l’ensemble des 
                        tâches est coordonné à l’aide d’un Kanban partagé avec l’équipe. 
                        </p><p>
                        Le projet met également en œuvre un back-end existant pour persister les données 
                        et tester les fonctionnalités développées, garantissant une expérience utilisateur 
                        fluide et fonctionnelle.
                        </p>
                    </div>

                    
                    <div className="collapse">
                        <Collapse title="Technologie utilisées" content={
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript (front-end)</li>
                                <li>Back-end (fourni)</li>
                                <li>Git</li>
                            </ul>} />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Sophie;