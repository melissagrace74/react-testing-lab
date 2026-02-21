import React, { useState } from "react";

export default function AddTransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.description && formData.amount) {
      onAddTransaction(formData);
      setFormData({ description: "", category: "", amount: "", date: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />
      <input
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />
      <input
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}
