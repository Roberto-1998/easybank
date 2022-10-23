import React from 'react';
import './Navbar.css';
import logo from '../../../public/images/logo.svg';
import { FaTimes, FaStream } from 'react-icons/fa';
import useToggle from '../../hooks/useToggle';
import { Button } from '../shared/Button';
import { menuItems } from '../../contants/menu-list';

const Navbar = () => {
  const { toggle, handleToggle } = useToggle();

  return (
    <>
      <div className='navbar-fixed'>
        <div className='navbar-content'>
          <img className='navbar-logo' src={logo} alt='EasyBank' />
          <ul className='navbar-md-list'>
            {menuItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <button className='navbar-button-toggle' onClick={handleToggle}>
            {toggle ? <FaTimes /> : <FaStream />}
          </button>

          <div className='navbar-button-box'>
            <Button />
          </div>
        </div>
      </div>

      {toggle && (
        <div className='navbar-sm-list-box'>
          <ul className='navbar-sm-list'>
            {menuItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
