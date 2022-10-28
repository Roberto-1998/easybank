import React from 'react';
import './App.css';
import { Articles } from './components/Articles';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Info } from './components/Info';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Info />
      <Articles />
      <Footer />
    </>
  );
};

export default App;
