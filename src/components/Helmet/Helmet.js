import React from 'react';
import { Helmet as OrigHelmet } from 'react-helmet';

const Helmet = ({ title, description }) => {
  return (
    <OrigHelmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </OrigHelmet>
  );
};

export default Helmet;
