import React from 'react';
import { Link } from 'react-router-dom';


const Portfolio = () => {

    
    return (
        <>
            
            
                <div id="portfolio">
                    <h2 className="portfolio__title">Réalisations</h2>
                    <div className="portfolio__content">
                       
                       <Link to="booki">
                       <div className="card">
                            <div className="card__main">
                                <div className="card__detail">
                                    <h3 className="card__detail--title">Booki</h3>
                                    <h4 className="card__detail--subtitle">Plateforme de réservation d'hôtels et 
                                        d'activités</h4>
                                    <p>
                                        Création d’un site moderne et intuitif permettant aux utilisateurs 
                                        de trouver et réserver facilement des hébergements et des activités 
                                        adaptés à leurs besoins. Design responsive, navigation fluide, et focus 
                                        sur l’expérience utilisateur.
                                    </p>
                                </div>
                                <div className="card__picture">
                                    <img src="/assets/images/booki-desktop.webp" className="image image--1" alt="Aperçu de Booki version ordinateur" />
                                    <img src="/assets/images/booki-mobile.webp" className="image image--2" alt="Aperçu de Booki version mobile" />
                                </div>
                            </div>
                            <div className="card__tagsMore">
                                <div className="tags">
                                    <span className="tag">HTML</span>
                                    <span className="tag">CSS</span>
                                    <span className="tag">Responsive</span>
                                </div>
                                <div className="more">
                                    <Link to="booki">
                                        <span className="viewMore">Voir en détail</span>
                                    </Link>
                                </div>
                            </div>


                       </div>
                       </Link>

                       <Link to="sophie-bluel">
                       <div className="card">
                            <div className="card__main">
                                <div className="card__detail">
                                    <h3 className="card__detail--title">Sophie Bluel</h3>
                                    <h4 className="card__detail--subtitle">Architecte d'intérieure</h4>
                                    <p>
                                        Développement d’un site vitrine mettant en avant les réalisations 
                                        de Sophie Bluel, architecte d’intérieur. Fonctionnalité en 
                                        JavaScript permettant de charger dynamiquement de nouvelles 
                                        images depuis un espace administrateur, offrant une gestion 
                                        simplifiée des projets présentés. Design élégant et axé sur la 
                                        présentation visuelle.
                                    </p>
                                </div>
                                <div className="card__picture">
                                <img src="/assets/images/sophie-bluel-desktop.webp" className="image image--1" alt="Aperçu de Sophie Bluel version ordinateur" />
                                <img src="/assets/images/sophie-bluel-edit.webp" className="image image--2" alt="Aperçu de Sophie Bluel en mode administrateur" />
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <div className="card__tagsMore">
                                <div className="tags">
                                    <span className="tag">HTML</span>
                                    <span className="tag">CSS</span>
                                    <span className="tag">Javascript</span>
                                </div>
                                <div className="more">
                                    <Link to="sophie-bluel">
                                        <span className="viewMore">Voir en détail</span>
                                    </Link>
                                </div>
                            </div>

                       </div>
                       </Link>

                       <Link to="kasa">
                       <div className="card">
                            <div className="card__main">
                                <div className="card__detail">
                                    <h3 className="card__detail--title">Kasa</h3>
                                    <h4 className="card__detail--subtitle">Application de location immobilière</h4>
                                    <p>
                                        Développement d’une application web en React dédiée à la 
                                        location immobilière. Interface moderne et dynamique permettant 
                                        aux utilisateurs de rechercher et explorer des biens locatifs. 
                                        Gestion des données optimisée grâce à des composants réutilisables 
                                        et une navigation fluide pour une expérience utilisateur agréable.
                                    </p>
                                </div>
                                <div className="card__picture">
                                <img src="/assets/images/kasa-desktop.webp" className="image image--1" alt="Aperçu de la plateforme Kasa" />
                                <img src="/assets/images/kasa-mobile.webp" className="image image--2" alt="Aperçu de la plateforme Kasa en version mobile" />
                                </div>
                            </div>
                            <div className="card__tagsMore">
                                <div className="tags">
                                    <span className="tag">HTML</span>
                                    <span className="tag">Sass</span>
                                    <span className="tag">Responsive</span>
                                    <span className="tag">React.js</span>
                                </div>
                                <div className="more">
                                    <Link to="kasa">
                                        <span className="viewMore">Voir en détail</span>
                                    </Link>
                                </div>
                            </div>

                       </div>
                       </Link>

                        <Link to="mon-vieux-grimoire">
                       <div className="card">
                            <div className="card__main">
                                <div className="card__detail">
                                    <h3 className="card__detail--title">Mon vieux grimoire</h3>
                                    <h4 className="card__detail--subtitle">Application de notation de livre</h4>
                                    <p>
                                        Création d’une application web en Node.js avec Express pour la 
                                        gestion et la notation de livres. Les utilisateurs peuvent ajouter, 
                                        noter, et commenter des ouvrages pour partager leurs avis. 
                                        Backend performant avec une architecture claire, assurant une gestion 
                                        fluide des données et une expérience utilisateur intuitive.
                                    </p>
                                </div>
                                <div className="card__picture">
                                <img src="/assets/images/mon-vieux-grimoire.webp" className="image image--1" alt="Mon vieux grimoire - application de notation de livre" />
                                <img src="/assets/images/mon-vieux-grimoire-livre.webp" className="image image--2" alt="Aperçu d'un livre mon vieux grimoire" />
                                </div>
                            </div>
                            <div className="card__tagsMore">
                                <div className="tags">
                                    <span className="tag">React.js</span>
                                    <span className="tag">Node.js</span>
                                    <span className="tag">Express</span>
                                </div>
                                <div className="more">
                                    <Link to="mon-vieux-grimoire">
                                        <span className="viewMore">Voir en détail</span>
                                    </Link>
                                </div>
                            </div>

                       </div>
                       </Link>

                    </div>
                </div>

        </>
    );
};

export default Portfolio;