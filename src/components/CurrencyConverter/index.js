import React from 'react';

import { Header } from '../Header';
import { BaseAmount } from '../BaseAmount';
import { ConvertedAmount } from '../ConvertedAmount';
import { CurrenciesSwitch } from '../CurrenciesSwitch';

import './styles.scss';

const CurrencyConverter = () => {
  return (
    <div className="container__currency-converter">
      <Header />
      <div className="container__components">
        <BaseAmount />
        <CurrenciesSwitch />
        <ConvertedAmount />
      </div>
    </div>
  )
};

export { CurrencyConverter };
