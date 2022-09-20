import {useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [nameInputError, setNameInputError] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);


  let formIsValid = false
  if (nameInputError) {
    formIsValid = true
  }
  // useEffect(() => {
  //   if (nameInputError) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false)
  //   }
  // }, [nameInputError]);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    setNameInputError(false);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length < 1) {
      setNameInputError(true);
      return;
    } else {
      setNameInputError(false);
    }
    setEnteredName('');
  };

  const onBlurChangeHandler = () => {
    if (enteredName.trim().length < 1) {
      setNameInputError(true);
    } else {
      setNameInputError(false);
    }
  };

  const classes = nameInputError ? 'form-control invalid' : 'form-control';

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
      {nameInputError ? (
        <p className='error-text'>Entered name is invalid!</p>
      ) : (
        ''
      )}
      <div className='form-actions'>
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
