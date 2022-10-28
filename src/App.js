import React, { Suspense } from 'react';
import { Articles, Banner, Footer, Info, Navbar } from './components/modules';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Banner />
      <Info />
      <Articles />
      <Footer />
    </Suspense>
  );
};

export default App;
