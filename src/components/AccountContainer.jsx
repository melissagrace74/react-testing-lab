import React, { useState } from "react";
import AddTransactionForm from "./AddTransactionForm";
import TransactionsList from "./TransactionsList";

export default function AccountContainer({ initialTransactions = [] }) {
  // Keep a copy of initial transactions for reset
  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("");

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Reset transactions to initial state
  const resetTransactions = () => {
    setTransactions(initialTransactions);
  };

  // Filter and sort transactions
  const filteredTransactions = transactions
    .filter((t) =>
      t.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortKey) return 0;
      if (a[sortKey] < b[sortKey]) return -1;
      if (a[sortKey] > b[sortKey]) return 1;
      return 0;
    });

  return (
    <div>
      <h1>Transactions</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Sort dropdown */}
      <select
        aria-label="Sort Transactions"
        value={sortKey}
        onChange={(e) => setSortKey(e.target.value)}
      >
        <option value="">--Sort By--</option>
        <option value="description">Description</option>
        <option value="category">Category</option>
        <option value="amount">Amount</option>
        <option value="date">Date</option>
      </select>

      {/* Add transaction form */}
      <AddTransactionForm onAddTransaction={addTransaction} />

      {/* Reset button */}
      <button onClick={resetTransactions}>Reset Transactions</button>

      {/* Transaction list */}
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
}
