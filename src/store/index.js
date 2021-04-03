import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducer';

import currenciesMiddleware from '../middlewares/currenciesMiddleware';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      currenciesMiddleware,
    ),
  ),
);

export default store;