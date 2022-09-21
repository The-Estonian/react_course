import React, { useState } from 'react';

const useInput = (controls) => {
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState(false)

  const inputChangeHandler = (e) => {
    setInput(e.target.value)
    setInputError(false)
  }

  const onBlurChangeHandler = () => {
    if (input.trim().length < 1) {
      setInputError(true)
    } else {
      setInputError(false)
    }
  }

  const styleClasses = inputError ? `${controls.styleInput} ${controls.styleInvalidInput}` : controls.styleInput
  return {jsx:(
    <div className={styleClasses}>
      <label htmlFor='name'>{controls.labelName}</label>
      <input
        type={controls.type}
        id={controls.id}
        value={input}
        onChange={inputChangeHandler}
        onBlur={onBlurChangeHandler}
      />
      {inputError ? <p className={controls.errorStyles}>{controls.errorMessage}</p> : ""}
    </div>
  ),
  inputHasError: inputError};
};

export default useInput;
