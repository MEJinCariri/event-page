import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DateHome from './components/DateHome';

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <DateHome />
      <Footer />
    </div>
  );
}

export default Home;
