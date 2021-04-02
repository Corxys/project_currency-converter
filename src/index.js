import React from 'react';
import { render } from 'react-dom';

import './index.css';

import { App } from './components/App';

const rootReactElement = (
  <App />
);

const target = document.querySelector('#root');
render(rootReactElement, target);
