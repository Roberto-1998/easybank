import React from 'react';
import { ClockLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Loader = () => {
  return (
    <ClockLoader
      color={'black'}
      cssOverride={override}
      size={50}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  );
};

export default Loader;
