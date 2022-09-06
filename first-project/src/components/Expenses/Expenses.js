import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [currentFiltration, setCurrentFiltration] = useState('2022');
  const getFilterHandler = (filtrationData) => {
    setCurrentFiltration(filtrationData);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === currentFiltration;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={currentFiltration}
        onFiltration={getFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
};

export default Expenses;
