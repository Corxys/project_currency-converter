import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.scss';

const BaseAmount = ({
  baseAmount,
  baseCurrency,
  setNewBaseAmount
}) => {
  return (
    <div className="container__base-amount">
      <div className="base-amount__currency">
        <div className="currency__symbol">
          {baseCurrency}
        </div>
        <div className="currency__name">
          Euro
        </div>
      </div>
      <input
        className="base-amount__value"
        type="text"
        value={baseAmount}
        onChange={setNewBaseAmount}
        maxLength="6"
      />
    </div>
  );
};

BaseAmount.propTypes = {
  baseAmount: PropTypes.string.isRequired,
  baseCurrency: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape({
    symbol: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  baseAmount: state.baseAmount,
  baseCurrency: state.baseCurrency,
  currencies: state.currencies,
  errorMessage: state.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  setNewBaseAmount: (event) => {
    dispatch({
      type: 'GET_NEW_BASE_AMOUNT',
      payload: {
        baseAmount: event.target.value,
      },
    });
  },
});

let container = connect(mapStateToProps, mapDispatchToProps)(BaseAmount);

export default container;