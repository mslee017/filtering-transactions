import { useEffect, useState } from 'react';
import { fetchData } from './api.js';
import Transactions from './components/Transactions.jsx';
import TotalSum from './components/TotalSum.jsx';
import './style.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setTransactions(data);
    }

    getData();
  }, []);

  const filteredTransactions = transactions.filter(transaction => {
    return transaction.merchant.toLowerCase().includes(userInput.toLowerCase());
  });

  const sum = filteredTransactions.reduce((acc, current) => {
    return acc + current.amount;
  }, 0);

  return (
    <main className="wrapper">
      <input
        type="text"
        className="user-input"
        value={userInput}
        onChange={event => setUserInput(event.target.value)}
      />
      {filteredTransactions ? (
        <Transactions data={filteredTransactions} />
      ) : (
        <p>Sorry, No Transactions Were Found</p>
      )}

      <TotalSum sum={sum} />
    </main>
  );
}

export default App;
