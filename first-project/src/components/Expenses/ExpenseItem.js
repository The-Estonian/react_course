import React from 'react';

import './ExpenseItem.css';
import DateComponent from './DateComponent';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <DateComponent date={props.date}></DateComponent>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.price}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
