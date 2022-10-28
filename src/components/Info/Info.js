import React from 'react';
import { infoBank } from '../../constants/info-bank';
import './Info.css';

const Info = () => {
  return (
    <section className='info-size'>
      <div className='info-content'>
        <h1>Why choose Easybank?</h1>
        <p className='text-info'>
          {' '}
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className='info-box'>
          {infoBank.map((info) => (
            <div key={info.title} className='info-card-box'>
              <img src={info.img} alt={info.title} />
              <h4>{info.title}</h4>
              <p>{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
