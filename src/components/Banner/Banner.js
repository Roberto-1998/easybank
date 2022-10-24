import React from 'react';
import './Banner.css';
import { Button } from '..//shared/Button';
import cel from '../../../public/images/image-mockups.png';
import backgroundSm from '../../../public/images/bg-intro-mobile.svg';
import backgroundMd from '../../../public/images/bg-intro-desktop.svg';
import useMediaQuery from '../../hooks/useMediaQuery';

const Banner = () => {
  const matches = useMediaQuery('(min-width: 850px)');

  return (
    <section className='banner-main-box'>
      <div
        className='banner-right-box'
        style={{
          backgroundImage:
            'url(' + (!matches ? backgroundSm : backgroundMd) + ')',
        }}
      >
        <img src={cel} alt='EasyBank App' />
      </div>
      <div className='banner-left-box'>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button />
      </div>
    </section>
  );
};

export default Banner;
