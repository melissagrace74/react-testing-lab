// src/components/Sort.jsx
import React from 'react';

export default function Sort({ onChange }) {
  return (
    <select onChange={onChange}>
      <option value="description">Description</option>
      <option value="category">Category</option>
      <option value="amount">Amount</option>
      <option value="date">Date</option>
    </select>
  );
}
