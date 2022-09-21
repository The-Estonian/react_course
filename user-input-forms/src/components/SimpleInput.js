import { useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [nameInputError, setNameInputError] = useState(false);
  const [emailInputError, setEmailInputError] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    setNameInputError(false);
  };

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    setEmailInputError(false);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length < 1) {
      setNameInputError(true);
      return;
    } else {
      setNameInputError(false);
    }
    if (!enteredEmail.includes('@')) {
      setEmailInputError(true);
    } else {
      setEmailInputError(false);
    }
    setEnteredEmail('');
    setEnteredName('');
  };

  const onBlurNameChangeHandler = () => {
    if (enteredName.trim().length < 1) {
      setNameInputError(true);
    } else {
      setNameInputError(false);
    }
  };
  const onBlurEmailChangeHandler = () => {
    if (!enteredEmail.includes('@')) {
      setEmailInputError(true);
    } else {
      setEmailInputError(false);
    }
  };

  const nameClass = nameInputError ? 'form-control invalid' : 'form-control';
  const emailClass = emailInputError ? 'form-control invalid' : 'form-control';
  

  const {jsx:lastNameInput, inputHasError} = useInput({
    labelName: 'Family Name',
    styleInput: 'form-control',
    styleInvalidInput: 'invalid',
    type: 'text',
    id:"last-name",
    errorMessage:"Please enter a correct Last Name",
    errorStyles: "error-text"
  });
  console.log(inputHasError);

  let formIsValid = false;
  if (nameInputError || emailInputError || inputHasError) {
    formIsValid = true;
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={enteredName}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={onBlurNameChangeHandler}
        />
      </div>
      {nameInputError ? (
        <p className='error-text'>Entered name is invalid!</p>
      ) : (
        ''
      )}
      <div>{lastNameInput}</div>
      <div className={emailClass}>
        <label htmlFor='email'>Your Email</label>
        <input
          value={enteredEmail}
          type='text'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={onBlurEmailChangeHandler}
        />
      </div>
      {emailInputError ? (
        <p className='error-text'>Entered email is invalid!</p>
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
