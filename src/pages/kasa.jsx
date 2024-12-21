import React from 'react';
import Collapse from '../components/collapse';


const Kasa = () => {

    
    return (
        <>
            
            <main className="main">

                <div className="prez">               

                    <div className="banner">
                        <img src="../src/assets/images/kasa-desktop.webp" alt="Aperçu du site Kasa, la plateforme de location immobilière" />
                    </div>

                    <div className="branding">
                        <div className="infos">
                            <h2 className="title">Kasa</h2>
                            <h3 className="subtitle">Application de location immobilière</h3>
                        </div>
                        <div className="logo">
                            <img src="../src/assets/images/kasa-logo.png" alt="Logo de Kasa" />
                        </div>
                    </div>

                    <div className="description">
                        <p>Le projet consiste en une refonte totale du site de Kasa, 
                            leader français de la location d’appartements entre particuliers. 
                          </p><p>  
                            L’objectif est de passer à une stack JavaScript moderne en utilisant React pour le front-end. 
                            La mission est de développer une application complète et responsive à partir des maquettes Figma, 
                            incluant des fonctionnalités telles qu’une galerie interactive et des menus déroulants (Collapse). 
                        </p><p>    
                            L’absence de back-end est contournée grâce à un fichier JSON contenant les 20 dernières annonces. 
                            Je suis également chargé de styliser l’application avec Sass et de respecter les guidelines de Kasa 
                            pour garantir un code maintenable et performant.
                        </p>
                    </div>

                    
                    <div className="collapse">
                        <Collapse title="Technologie utilisées" content={
                            <ul>
                                <li>React</li>
                                <li>Vite</li>
                                <li>Json (absence de Back-end)</li>
                                <li>Sass</li>
                                <li>Figma</li>
                                <li>Git</li>
                            </ul>} />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Kasa;