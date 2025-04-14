import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");

  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(search.toLowerCase()) ||
    expense.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="main">
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseTable expenses={filteredExpenses} />
      </div>
    </div>
  );
}

export default App;
