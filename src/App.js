import React, { Suspense } from 'react';
import { Helmet } from './components/Helmet';

import { Articles, Banner, Footer, Info, Navbar } from './components/modules';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Helmet
        title={'Easybank App- Tu banco de confianza'}
        description={
          'Easybank es una aplicación que gestiona tus finanzas asociadas a cualquier banco internacional '
        }
      />
      <Navbar />
      <Banner />
      <Info />
      <Articles />
      <Footer />
    </Suspense>
  );
};

export default App;
