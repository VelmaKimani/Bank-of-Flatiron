import './App.css';

import React, { useEffect, useState } from 'react';

import Form from './components/Form';
import Navbar from './components/Navbar';
import Table from './components/Table';

function App() {
  const [transactions, setTransactions] = useState([])

  // Fetch data from the the db.json using useEffect

  useEffect (()=> {
    fetch ("https://my-json-server.typicode.com/VelmaKimani/Bank-of-Flatiron/transactions")
      .then ((r)=> r.json ())
      .then ((data)=> setTransactions(data))
  }, [])

  function updatedTransactions (newData) {
    const updatedTransactionsArray = [...transactions, newData]
    setTransactions (updatedTransactionsArray)
  }

  return (
    <div className="App">
      <Navbar/><br/>
      <Form newTransaction = {updatedTransactions}/><br/>
      <Table arayOfAllTransactions = {transactions}/>
    </div>
  );
}

export default App;