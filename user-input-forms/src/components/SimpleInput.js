import useInput from '../hooks/use-input';
import useInputTeacher from '../hooks/use-input-teacher';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInputTeacher((value) => value.trim() !== '');

  const nameClass = nameInputHasError ? 'form-control invalid' : 'form-control';

  const {data: lastName, reset: lastNameReset, jsx: lastNameInput, inputHasError:lastNameHasError } = useInput({
    labelName: 'Last Name',
    styleInput: 'form-control',
    styleInvalidInput: 'invalid',
    type: 'text',
    id: 'last-name',
    errorMessage: 'Please enter a correct Last Name',
    errorStyles: 'error-text',
    isValidInput: (input) => input.trim().length < 1,
  });

  const {data: email, reset: emailReset, jsx: emailInput, inputHasError: emailHasError} = useInput({
    labelName: "Email",
    styleInput: "form-control",
    styleInvalidInput: 'invalid',
    type: "email",
    id: "email",
    errorMessage: "Please enter an email!",
    errorStyles: "error-text",
    isValidInput: (input => !input.includes("@"))
  })

  let formButtonDisabled = false;
  if (nameInputHasError || emailHasError || lastNameHasError) {
    formButtonDisabled = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log("Sending data to server!");
    console.log({
      enteredName,
      lastName,
      email
    });
    lastNameReset()
    emailReset()
    resetNameInput()
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={enteredName}
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      {nameInputHasError ? (
        <p className='error-text'>Entered name is invalid!</p>
      ) : (
        ''
      )}
      <div>{lastNameInput}</div>
      <div>{emailInput}</div>
      <div className='form-actions'>
        <button disabled={formButtonDisabled}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
