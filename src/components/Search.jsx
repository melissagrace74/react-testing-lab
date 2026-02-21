// src/components/Search.jsx
import React from 'react';

export default function Search({ value, onChange }) {
  return (
    <input
      placeholder="Search your Recent Transactions"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}
