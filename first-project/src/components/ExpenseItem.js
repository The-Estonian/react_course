import './ExpenseItem.css';

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
      <div>March 28th 2021</div>
      <div className='expense-item__description'>
        <h2>Title</h2>
        <div className='expense-item__price'>299,99</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
