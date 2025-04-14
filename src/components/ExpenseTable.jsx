function ExpenseTable({ expenses, onDeleteExpense }) {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Expense</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount (Ksh)</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp, index) => (
          <tr key={index}>
            <td>{exp.name}</td>
            <td>{exp.description}</td>
            <td>{exp.category}</td>
            <td>{exp.amount}</td>
            <td>{exp.date}</td>
            <td>
              <button onClick={() => onDeleteExpense(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
