import React from "react";

export default function TransactionsList({ transactions }) {
  if (transactions.length === 0) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* empty body */}
          </tbody>
        </table>
        <p>No transactions found</p>
      </div>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t, index) => (
          <tr key={index}>
            <td>{t.description}</td>
            <td>{t.category}</td>
            <td>{t.amount}</td>
            <td>{t.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
