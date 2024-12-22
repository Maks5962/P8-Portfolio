import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Définit le défilement en haut à gauche
  }, [pathname]);

  return null;
};

export default ScrollToTop;
