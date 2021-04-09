import React from 'react';

import './styles.scss';

import icoTwitter from '../../assets/images/ico_twitter.svg';

const Footer = () => {
  return (
    <div className="container__footer">
      <div className="footer__copyright">
        <a href="http://jennblngr.com" target="_blank" rel="noreferrer">
          JENNY-LEE BOULANGER
        </a> © 2021
      </div>
      <div className="footer__socials">
        <a href="https://twitter.com/blngrjnn">
          <img className="socials__ico" src={icoTwitter} alt="icon twitter" />
        </a>
      </div>
    </div>
  );
};

export default Footer;