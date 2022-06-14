import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expeneseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
