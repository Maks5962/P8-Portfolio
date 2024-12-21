import React from 'react';
import About from '../components/about';
import Portfolio from '../components/portfolio';


const Home = () => {

    
    return (
        <>
            
            <main className="main">
                <About />

                <Portfolio />
            </main>
        </>
    );
};

export default Home;