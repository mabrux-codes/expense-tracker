import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(formData);
    setFormData({ name: "", description: "", category: "", amount: "", date: "" });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <input name="name" placeholder="Enter expense name" value={formData.name} onChange={handleChange} />
      <input name="description" placeholder="Enter expense description" value={formData.description} onChange={handleChange} />
      <input name="category" placeholder="Enter category" value={formData.category} onChange={handleChange} />
      <input name="amount" type="number" placeholder="Enter amount" value={formData.amount} onChange={handleChange} />
      <input name="date" type="date" value={formData.date} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
