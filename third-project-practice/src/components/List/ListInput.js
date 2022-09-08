import React, { useState } from 'react';
import styles from './ListInput.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const ListInput = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const getUsername = (name) => {
    setUsername(name.target.value);
  };

  const getAge = (age) => {
    setAge(age.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (username === '') {
      props.getError("username")
    } else if (age === '') {
      props.getError("age")
    } else if (parseInt(age) <= 0) {
      props.getError("age-value")
    } else {
      const gatheredData = {
        key: Math.random(),
        username: username,
        age: +age,
      };
      props.getData(gatheredData);
    }
    setUsername('');
    setAge('');
  };

  return (
    <Card styles={styles.form}>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>
            <span>Username</span>
            <input type='text' value={username} onChange={getUsername}></input>
          </label>
        </div>
        <div>
          <label>
            <span>Age (Years)</span>
            <input type='number' value={age} onChange={getAge}></input>
          </label>
        </div>
        <div>
          <Button type='submit'>Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default ListInput;
