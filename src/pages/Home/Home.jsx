import React from 'react';
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';

function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Category />
    </>
  );
}

export default Home;
