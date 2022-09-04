import './ExpenseItem.css';
import DateComponent from './DateComponent';
import Card from './Card';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <DateComponent date={props.date}></DateComponent>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
