import React from 'react';
import Collapse from '../components/collapse';


const Booki = () => {

    
    return (
        <>
            
            <main className="main">

                <div className="prez">               

                    <div className="banner">
                        <img src="/assets/images/booki-desktop.webp" alt="Aperçu de l'application Booki" />
                    </div>

                    <div className="branding">
                        <div className="infos">
                            <h2 className="title">Booki</h2>
                            <h3 className="subtitle">Plateforme de réservation d'hôtels et d'activités</h3>
                        </div>
                        <div className="logo">
                            <img src="/assets/images/booki-logo.png" alt="Logo de Booki" />
                        </div>
                    </div>

                    <div className="description">
                        <p>
                            Le projet Booki vise à développer un site web pour permettre aux utilisateurs de 
                            rechercher des hébergements et des activités dans une ville de leur choix. 
                            Ce projet met l'accent sur une interface simple, intuitive et accessible, 
                            adaptée à tous types d'écrans.
                        </p>
                    </div>

                    
                    <div className="collapse">
                        <Collapse title="Technologie utilisées" content={
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>} />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Booki;