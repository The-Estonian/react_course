import React from 'react';
import "./NewExpense.css"
import AddNewExpense from "./AddNewExpense"

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onNewExpenseData(expenseData)
    }

  return (
    <div className="new-expense">
      <AddNewExpense onSaveExpenseData={saveExpenseDataHandler}></AddNewExpense>
    </div>
  );
};

export default NewExpense;
