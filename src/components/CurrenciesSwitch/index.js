import React from 'react';

import './styles.scss';

import arrowSwitch from '../../assets/images/arrow-switch.png';

const CurrenciesSwitch = () => {
  return (
    <div className="container__currencies-switch">
      <button className="currencies-switch__button">
        <img className="currencies-switch__button__icon" src={arrowSwitch} alt="two arrow, one target the top, the other target the bottom" />
      </button>
    </div>
  );
};

export { CurrenciesSwitch }