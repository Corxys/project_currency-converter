const initialState = {
  currencies: [],
  baseAmount: '1',
  baseCurrency: 'EUR',
  rateAmount: 0,
  rateCurrency: 'USD',
  pendingCurrency: '',
  errorMessage: '',
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'CURRENCIES_LIST_SUCCESS':
      return {
        ...oldState,
        rateAmount: action.payload.rateAmount,
        currencies: action.payload.currencies,
      }
    case 'UPDATE_RATE_AMOUNT':
      return {
        ...oldState,
        rateAmount: action.payload.rateAmount,
        rateCurrency: action.payload.rateCurrency,
      }
    case 'UPDATE_BASE_AMOUNT_AND_ERROR_MESSAGE':
      return {
        ...oldState,
        baseAmount: action.payload.baseAmount,
        errorMessage: action.payload.errorMessage,
      }
    case 'UPDATE_BASE_AND_RATE_AMOUNT':
      return {
        ...oldState,
        baseAmount: action.payload.baseAmount,
        rateAmount: action.payload.rateAmount,
        errorMessage: action.payload.errorMessage,
      }
    default: 
      return {
        ...oldState,
      };
  };
};

export default reducer;