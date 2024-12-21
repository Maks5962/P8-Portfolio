import React from 'react';
import Collapse from '../components/collapse';


const Grimoire = () => {

    
    return (
        <>
            
            <main className="main">

                <div className="prez">               

                    <div className="banner">
                        <img src="./src/assets/images/mon-vieux-grimoire.webp" alt="Aperçu de Mon Vieux Grimoire, application de notation de livres" />
                    </div>

                    <div className="branding">
                        <div className="infos">
                            <h2 className="title">Mon vieux grimoire</h2>
                            <h3 className="subtitle">Application de notation de livres</h3>
                        </div>
                        <div className="logo">
                            <img src="./src/assets/images/mon-vieux-grimoire-logo.png" alt="Logo de Kasa" />
                        </div>
                    </div>

                    <div className="description">
                        <p>Le projet Mon Vieux Grimoire consiste à développer un site de référencement et de 
                            notation de livres pour une chaîne de librairies. </p><p>
                            
                            Les utilisateurs peuvent ajouter de nouveaux livres, leur attribuer une note, 
                            et consulter les avis laissés par les autres membres. 
                            </p><p>
                            En tant que développeur back-end, ma mission est de concevoir une API robuste 
                            pour gérer les données et garantir le bon fonctionnement du site, en collaboration 
                            avec Kévin, qui s’occupe du front-end en React. </p><p>
                            
                            L’API doit inclure des fonctionnalités <br />
                            - de gestion des livres, <br />
                            - de notation, <br />
                            - et d’authentification des utilisateurs, <br />
                            tout en respectant les principes du Green Code avec une optimisation des images. 
                            </p><p>
                            Je travaille à partir d’un cahier des charges précis et des spécifications 
                            techniques fournies, ainsi que du front-end déjà finalisé. 
                            </p><p>
                            Une fois l’API développée, un point est prévu pour valider l’intégration complète 
                            avec le front-end.
                        </p>
                    </div>

                    
                    <div className="collapse">
                        <Collapse title="Technologie utilisées" content={
                            <ul>
                                <li>Node.js & Express</li>
                                <li>Base de données MongoDB</li>
                                <li>Multer & Sharp</li>
                                <li>JWT (JSON Web Token)</li>
                                <li>Git</li>
                            </ul>} />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Grimoire;