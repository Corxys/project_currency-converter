import axios from 'axios';

const API_KEY = '';
const HOST = 'currency-converter5.p.rapidapi.com';

const reorderCurrenciesList = (currenciesList, currencySymbol) => {
  // on trouve l'item
  const currencyObject = currenciesList.find((currency) => {
    return currency.symbol === currencySymbol;
  });

  // on trouve l'index de l'item
  const indexOfCurrency = currenciesList.map((currency) => {
    return currency.symbol;
  }).indexOf(currencySymbol);

  // on créé une copie du tableau
  const newCurrenciesList = currenciesList.map((currency) => currency);

  // on retire l'item grâce à l'index
  newCurrenciesList.splice(indexOfCurrency, 1);
  
  // et on le remet au premier index du tableau
  newCurrenciesList.splice(0, 0, currencyObject);

  return newCurrenciesList;
};

const currencies = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case 'INIT_DATAS':
      (async () => {
        try {
          const response = await axios.get(`https://${HOST}/currency/list`, {
            headers: {
              'x-rapidapi-key': API_KEY,
              'x-rapidapi-host': 'currency-converter5.p.rapidapi.com'
            },
          });
          
          let currencies = [];

          let data = Object.entries(response.data.currencies);

          data.forEach((item) => {
            let currency = {};
            currency['symbol'] = item[0];
            currency['name'] = item[1];
            currencies.push(currency);
          });

          currencies = reorderCurrenciesList(currencies, state.rateCurrency);
          
          (async () => {
            try {
              const response = await axios.get(`https://${HOST}/currency/convert`, {
                params: {
                  amount: state.baseAmount,
                  from: state.baseCurrency,
                  to: state.rateCurrency,
                },
                headers: {
                  'x-rapidapi-key': API_KEY,
                  'x-rapidapi-host': 'currency-converter5.p.rapidapi.com'
                },
              });

              let currency = {};

              let data = Object.entries(response.data.rates);
              data.forEach((item) => {
                currency['symbol'] = item[0];
                currency['rate'] = parseFloat(item[1].rate);
              });

              store.dispatch({
                type: 'CURRENCIES_LIST_SUCCESS',
                payload: {
                  currencies: currencies,
                  rateAmount: currency.rate,
                },
              });
            }
            catch (error) {
              console.log(error);
            }
          })();
        }
        catch (error) {
          console.log(error);
        };
      })();
      break;

    case 'GET_NEW_RATE_AMOUNT':
      (async () => {
        try {
          const newRateCurrencyObject = state.currencies.find((currency) => {
            return currency.name === action.payload.newRateCurrency;
          });

          const response = await axios.get(`https://${HOST}/currency/convert`, {
            params: {
              amount: state.baseAmount,
              from: state.baseCurrency,
              to: newRateCurrencyObject.symbol,
            },
            headers: {
              'x-rapidapi-key': API_KEY,
              'x-rapidapi-host': 'currency-converter5.p.rapidapi.com'
            },
          });

          let currency = {};

          let data = Object.entries(response.data.rates);
          data.forEach((item) => {
            currency['symbol'] = item[0];
            currency['rate'] = parseFloat(item[1].rate_for_amount);
          });
          
          store.dispatch({
            type: 'UPDATE_RATE_AMOUNT',
            payload: {
              rateAmount: currency.rate,
              rateCurrency: newRateCurrencyObject.symbol,
            },
          });
        }
        catch (error) {
          console.log(error.response);
        };
      })();
      break;

    case 'GET_NEW_BASE_AMOUNT':
      const baseAmount = action.payload.baseAmount.replace(/,/g, '.');

      // if the user leaves the field blank
      if (action.payload.baseAmount === '') {
        // we empty the "baseAmount" and "rateAmount" property
        store.dispatch({
          type: 'UPDATE_BASE_AND_RATE_AMOUNT',
          payload: {
            baseAmount: '',
            rateAmount: '',
          },
        });
      }
      // if the user enters something in the field
      else if (action.payload.baseAmount !== '') {
        // if the string contains something other than numbers
        if (isNaN(baseAmount)) {
          store.dispatch({
            type: 'UPDATE_BASE_AMOUNT_AND_ERROR_MESSAGE',
            payload: {
              baseAmount: action.payload.baseAmount,
              errorMessage: 'Please enter a valid number.',
            },
          });
        // if the string contains only numbers
        } else if (!isNaN(baseAmount)) {
          // we manage decimals numbers and replace a potential comma by a point
          const baseAmount = parseFloat(action.payload.baseAmount.replace(/,/g, '.'));

          // we make the request to the API
          (async () => {
            try {
              const response = await axios.get(`https://${HOST}/currency/convert`, {
                params: {
                  amount: baseAmount,
                  from: state.baseCurrency,
                  to: state.rateCurrency,
                },
                headers: {
                  'x-rapidapi-key': API_KEY,
                  'x-rapidapi-host': 'currency-converter5.p.rapidapi.com'
                },
              });
        
              let currency = {};
    
              let data = Object.entries(response.data.rates);
              data.forEach((item) => {
                currency['symbol'] = item[0];
                currency['rate'] = parseFloat(item[1].rate_for_amount);
              });
        
              store.dispatch({
                type: 'UPDATE_BASE_AND_RATE_AMOUNT',
                  payload: {
                    baseAmount: action.payload.baseAmount,
                    rateAmount: currency.rate,
                    errorMessage: '',
                  },
              });
            }
            catch (error) {
              console.log(error.response);
            };
          })();
        };
      };
      break;
    default: 
      next(action);
  };
};

export default currencies;