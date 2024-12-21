import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../src/Layout';
import Home from '../src/pages/home';
import NotFound from './pages/404';
import Booki from './pages/booki';
import Sophie from './pages/sophie-bluel';
import Kasa from './pages/kasa';
import Grimoire from './pages/mon-vieux-grimoire';

const MyRouter = () => {

    return (
        <Router>           
                <Routes>                
                    <Route element={<Layout />}>

                        <Route path="/" element={<Home />} />
                        <Route path="/booki" element={<Booki />} />
                        <Route path="/sophie-bluel" element={<Sophie />} />
                        <Route path="/kasa" element={<Kasa />} />
                        <Route path="/mon-vieux-grimoire" element={<Grimoire />} />
                        <Route path='*' element={<NotFound />} />
                        
                    </Route>                
                </Routes>
        </Router>
    );
};

export default MyRouter;