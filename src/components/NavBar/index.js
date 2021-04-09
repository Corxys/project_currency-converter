import React from 'react';

import './styles.scss';

import logo from '../../assets/images/logo_currency-converter.svg';

const NavBar = () => {
  return (
    <div className="container__navbar">
      <img className="navbar__logo" src={logo} alt="logotype of the website" />
    </div>
  );
};

export default NavBar;