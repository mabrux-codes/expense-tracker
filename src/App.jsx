import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("category"); // Default sorting by category

  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const handleDeleteExpense = (indexToDelete) => {
    setExpenses(expenses.filter((_, index) => index !== indexToDelete));
  };

  const filteredExpenses = expenses
    .filter((expense) =>
      expense.name.toLowerCase().includes(search.toLowerCase()) ||
      expense.description.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      } else if (sortBy === "description") {
        return a.description.localeCompare(b.description);
      }
      return 0;
    });

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="sort-options">
        <label>
          Sort by:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="category">Category</option>
            <option value="description">Description</option>
          </select>
        </label>
      </div>
      <div className="main">
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseTable expenses={filteredExpenses} onDeleteExpense={handleDeleteExpense} />
      </div>
    </div>
  );
}

export default App;
