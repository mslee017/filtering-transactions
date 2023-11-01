import React from 'react';

const Transactions = ({ data }) => {
  return (
    <section className="transaction-section">
      {data.map(transaction => (
        <div className="transaction-container" key={transaction.id}>
          <span>{transaction.merchant}</span>
          <span style={{ color: transaction.amount < 0 ? 'red' : 'green' }}>
            {transaction.amount}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Transactions;
