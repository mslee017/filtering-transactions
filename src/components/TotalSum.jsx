import React from 'react';

const TotalSum = ({ sum }) => {
  return (
    <div className="sum-container">
      <span>Total</span>
      <span className="total-sum">{sum}</span>
    </div>
  );
};

export default TotalSum;
