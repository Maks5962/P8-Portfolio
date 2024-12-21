import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from './components/aside';
import Footer from './components/footer';
import ParticlesComponent from './components/particles';


const Layout = () => {
    return (
        <>
            <Aside />
            <div className="body"> 
                <ParticlesComponent />    

                <Outlet/> {/* Affichage de la page dans le layout */}
                <Footer />
            </div>
        </>
    );
};

export default Layout;