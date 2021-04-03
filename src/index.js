import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import './index.scss';

import { CurrencyConverter } from './components/CurrencyConverter';

store.dispatch({
  type: 'INIT_DATAS',
});

const rootReactElement = (
  <Provider store={store}>
    <CurrencyConverter />
  </Provider>
);

const target = document.querySelector('#root');
render(rootReactElement, target);
