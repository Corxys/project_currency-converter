const initialState = {
  baseAmount: 0,
  baseCurrency: '',
  rateAmount: 0,
  rateCurrency: '',
  currencies: [],
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    default: 
      return {
        ...oldState,
      };
  };
};

export default reducer;