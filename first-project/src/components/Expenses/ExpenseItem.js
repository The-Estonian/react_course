import React, { useState } from 'react';

import './ExpenseItem.css';
import DateComponent from './DateComponent';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("New Name!");
  };
  return (
    <Card className='expense-item'>
      <DateComponent date={props.date}></DateComponent>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.price}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
