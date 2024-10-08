import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound'; // Adicione uma página 404 opcional

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} /> Rota para página 404 */}
    </Routes>
  );
};

export default AppRoutes;
