import React from 'react';
import { connect } from 'react-redux';

import NavBar from '../NavBar';
import BaseAmount from '../BaseAmount';
import ConvertedAmount from '../ConvertedAmount';
import Footer from '../Footer';

import './styles.scss';

const CurrencyConverter = ({ errorMessage }) => {
  return (
    <div className="container__currency-converter">
      <NavBar />
      <div className="container__components">
        <BaseAmount />
        <ConvertedAmount />
      </div>
      <div className="container__error-message">
        {errorMessage}
      </div>
      <Footer />
    </div>
  )
};

const mapStateToProps = (state) => ({
  errorMessage: state.errorMessage,
});

let container = connect(mapStateToProps, null)(CurrencyConverter);

export default container;
