import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [inputError, setInputError] = useState(false);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    setInputError(false)
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length < 1) {
      setInputError(true);
      return;
    } else {
      setInputError(false);
    }
    setEnteredName('');
  };

  const onBlurChangeHandler = () => {
    if (enteredName.trim().length < 1) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  }

  const classes = inputError ? "form-control invalid":"form-control"

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={classes}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={enteredName}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={onBlurChangeHandler}
        />
      </div>
      {inputError ? <p className="error-text">Entered name is invalid!</p> : ""}
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
