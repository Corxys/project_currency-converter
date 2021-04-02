import React from 'react';
import { render } from 'react-dom';

import './index.scss';

import { CurrencyConverter } from './components/CurrencyConverter';

const rootReactElement = (
  <CurrencyConverter />
);

const target = document.querySelector('#root');
render(rootReactElement, target);
