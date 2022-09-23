import React, { useState } from 'react';

const useInput = (controls) => {
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState(true);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
    setInputError(true);
  };
  const onBlurChangeHandler = () => {
    if (controls.isValidInput(input)) {
      setInputError(false);
    } else {
      setInputError(true);
    }
  };
  const reset = () => {
    setInput('');
    setInputError(true);
  };

  const styleClasses = !inputError
    ? `${controls.styleInput} ${controls.styleInvalidInput}`
    : controls.styleInput;
  return {
    jsx: (
      <div className={styleClasses}>
        <label htmlFor='name'>{controls.labelName}</label>
        <input
          type={controls.type}
          id={controls.id}
          value={input}
          onChange={inputChangeHandler}
          onBlur={onBlurChangeHandler}
        />
        {!inputError ? (
          <p className={controls.errorStyles}>{controls.errorMessage}</p>
        ) : (
          ''
        )}
      </div>
    ),
    inputHasError: !inputError,
    reset: reset,
    data: input,
  };
};

export default useInput;
