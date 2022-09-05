import "./DateComponent.css"

const DateComponent = (props) => {
  const dateDay = props.date.toLocaleString('en-us', { day: '2-digit' });
  const dateMonth = props.date.toLocaleString('en-us', { month: 'long' });
  const dateYear = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{dateMonth}</div>
      <div className="expense-date__year">{dateYear}</div>
      <div className="expense-date__day">{dateDay}</div>
    </div>
  );
};

export default DateComponent
