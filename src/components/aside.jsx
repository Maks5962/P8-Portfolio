import React, { useEffect, useState } from 'react';
import { Link, Events, scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";

const Aside = () => {
    // État pour suivre l'ID actif
    const [activeId, setActiveId] = useState("");
    const navigate = useNavigate(); // Permet la navigation entre les pages
    const location = useLocation(); // Permet de récupérer l'URL actuelle

    useEffect(() => {
        // Listener qui est appelé lorsqu'une section est activée
        Events.scrollEvent.register("begin", (to) => {
            // Met à jour l'URL avec l'ID de la section
            window.history.pushState(null, null, `#${to}`);
            // Met à jour l'état avec l'ID actif
            setActiveId(to);
        });

        // Si une ancre est présente dans l'URL, faites défiler vers la section correspondante
        const hash = window.location.hash.substring(1); // Récupère l'ID sans le #
        if (hash && location.pathname === "/") { // Vérifie que nous sommes sur la page d'accueil
            setActiveId(hash); // Définit l'état avec l'ID du hash initial
            scroller.scrollTo(hash, {
                smooth: true,
                duration: 500,
            });
        }

        // Nettoyage pour éviter des listeners multiples
        return () => {
            Events.scrollEvent.remove("begin");
        };
    }, [location]);

    const handleNavigation = (to) => {
        if (location.pathname !== "/") {
            // Redirige vers la page d'accueil avec le hash
            navigate(`/#${to}`);
        } else {
            // Scrolle vers la section si nous sommes déjà sur la page d'accueil
            scroller.scrollTo(to, {
                smooth: true,
                duration: 500,
            });
        }
    };

    return (
        <>
            <aside className="aside">
                <header className="header">
                    <h1 className="header__title">
                        <span>Maxence</span>
                        <span>DELVINQUIER</span>
                    </h1>
                    <h2 className="header__subtitle">Développeur Web</h2>
                </header>

                <nav className="navbar">
                    <ul className="navbar__list">
                        <li
                            className={activeId === "about" ? "navbar__list--item active" : "navbar__list--item"}
                            onClick={() => handleNavigation("about")}
                        >
                            À propos
                        </li>
                        <li
                            className={activeId === "portfolio" ? "navbar__list--item active" : "navbar__list--item"}
                            onClick={() => handleNavigation("portfolio")}
                        >
                            Réalisations
                        </li>
                        <li
                            className={activeId === "contact" ? "navbar__list--item active" : "navbar__list--item"}
                            onClick={() => handleNavigation("contact")}
                        >
                            Contact
                        </li>
                    </ul>
                </nav>

                <div className="link">
                    <ul className="link__list">
                        <a href="https://github.com/Maks5962/" target='_blank' rel="noopener noreferrer">
                            <li className="link__list--item"><i className="fa-brands fa-github"></i></li>
                        </a>
                        <a href="https://www.linkedin.com/in/maxence-delvinquier-07a08a311/" target='_blank' rel="noopener noreferrer">
                            <li className="link__list--item"><i className="fa-brands fa-linkedin"></i></li>
                        </a>
                        <a href="./src/assets/download/cv.pdf">
                            <li className="link__list--item"><i className="fa-solid fa-file"></i>CV</li>
                        </a>
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Aside;
