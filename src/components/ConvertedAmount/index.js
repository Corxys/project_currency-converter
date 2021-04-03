import React from 'react';

import './styles.scss';

const ConvertedAmount = () => {
  return (
    <div className="container__converted-amount">
      <div className="converted-amount__value">
        1
      </div>
      <select className="base-amount__currencies">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export { ConvertedAmount };