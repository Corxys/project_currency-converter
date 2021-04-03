import React from 'react';

import './styles.scss';

const BaseAmount = () => {
  return (
    <div className="container__base-amount">
      <div className="base-amount__value">
        1
      </div>
      <select className="base-amount__currencies">
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
};

export { BaseAmount };