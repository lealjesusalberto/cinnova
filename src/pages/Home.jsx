import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Values from '../components/Values';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Values />
      <Footer />
    </>
  );
};

export default Home;
