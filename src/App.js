import React from 'react';
import './App.css';
import { Articles } from './components/Articles';
import { Banner } from './components/Banner';
import { Info } from './components/Info';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Info />

      <Articles />
    </>
  );
};

export default App;
