import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const firstNameValidation = (input) => input.trim() < 1;
  const lastNameValidation = (input) => input.trim() < 1;
  const emailValidation = (input) => !input.includes('@');

  const {
    jsx: firstNameInput, // jsx output that generates input with label
    reset: firstNameReset, // resets input value on execution
    data: firstName, // outputs input value
    inputHasError: firstNameHasError, // outputs true if input validation fails
  } = useInput({
    styleInput: 'form-control', // input/label styles
    styleInvalidInput: 'invalid', // input/label styles if validation fails
    labelName: 'First name', // input label name
    type: 'text', // input type
    id: 'first-name', // input ID
    errorMessage: 'Please enter your first name!', // input validation fail message
    errorStyles: 'error-text', // input validation fail message styles
    isValidInput: firstNameValidation, // input validation
  });

  const {
    jsx: lastNameInput,
    reset: lastNameReset,
    data: lastName,
    inputHasError: lastNameHasError,
  } = useInput({
    styleInput: 'form-control',
    styleInvalidInput: 'invalid',
    labelName: 'Last name',
    type: 'text',
    id: 'last-name',
    errorMessage: 'Please enter your last name!',
    errorStyles: 'error-text',
    isValidInput: lastNameValidation,
  });

  const {
    jsx: emailInput,
    reset: emailReset,
    data: email,
    inputHasError: emailHasError,
  } = useInput({
    styleInput: 'form-control',
    styleInvalidInput: 'invalid',
    labelName: 'Email',
    type: 'email',
    id: 'email',
    errorMessage: 'Please enter your email!',
    errorStyles: 'error-text',
    isValidInput: emailValidation,
  });

  let submitButtonDisabled = true;
  if (
    !firstNameValidation(firstName) &&
    !lastNameValidation(lastName) &&
    !emailValidation(email)
  ) {
    submitButtonDisabled = false;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    console.log('Sending data to server!');
    console.log({
      firstName,
      lastName,
      email,
    });
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        {firstNameInput}
        {lastNameInput}
      </div>
      {emailInput}
      <div className='form-actions'>
        <button disabled={submitButtonDisabled}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
