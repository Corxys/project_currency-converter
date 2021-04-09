import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.scss';

const ConvertedAmount = ({
  rateAmount,
  rateCurrency,
  currencies,
  setNewRateCurrency
}) => {
  return (
    <div className="container__converted-amount">
      <div className="converted-amount__value">
        {rateAmount}
      </div>
      <div className="converted-amount__currency">
        <div className="converted-amount__symbol">
          {rateCurrency}
        </div>
        <select
          className="converted-amount__currencies"
          onChange={setNewRateCurrency}
        >
          {
            currencies.map((currency, index) => {
              return (
                <option
                  key={index}
                  value={currency.name}
                >
                  {currency.name}
                </option>
              )
            })
          }
        </select>
      </div>
    </div>
  );
};

ConvertedAmount.propTypes = {
  rateAmount: PropTypes.number.isRequired,
  rateCurrency: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape({
    symbol: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  rateAmount: state.rateAmount,
  rateCurrency: state.rateCurrency,
  currencies: state.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setNewRateCurrency: (event) => {
    dispatch({
      type: 'GET_NEW_RATE_AMOUNT',
      payload: {
        newRateCurrency: event.target.value,
      },
    });
  }
});

let container = connect(mapStateToProps, mapDispatchToProps)(ConvertedAmount);

export default container;