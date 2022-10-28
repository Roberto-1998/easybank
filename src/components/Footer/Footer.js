import React from 'react';
import './Footer.css';
import logo from '../../../public/images/logo.svg';
import facebook from '../../../public/images/icon-facebook.svg';
import youtube from '../../../public/images/icon-youtube.svg';
import pinterest from '../../../public/images/icon-pinterest.svg';
import instagram from '../../../public/images/icon-instagram.svg';
import twitter from '../../../public/images/icon-twitter.svg';
import { Logo } from '../shared/Button/Logo';

const Footer = () => {
  return (
    <footer>
      <div className='footer-left-box'>
        <div className='footer-logo-content'>
          <div className='footer-logo'>
            <Logo white={true} />

            <div>
              <img src={facebook} alt='Facebook' />

              <img src={youtube} alt='youtube' />

              <img src={twitter} alt='twitter' />

              <img src={pinterest} alt='pinterest' />

              <img src={instagram} alt='instagram' />
            </div>
          </div>
          <div className='footer-icons'></div>
        </div>
        <ul>
          <li> About Us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className='footer-right-box'></div>
      <div></div>
    </footer>
  );
};

export default Footer;
