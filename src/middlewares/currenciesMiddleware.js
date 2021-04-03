const currencies = (store) => (next) => (action) => {
  const state = store.getState();

  console.log(state);
};

export default currencies;