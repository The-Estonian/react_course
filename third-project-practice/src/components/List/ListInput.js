import React, { useState } from 'react';
import styles from './ListInput.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const ListInput = (props) => {
  const [username, setUsername] = useState();
  const [age, setAge] = useState('');

  const getUsername = (name) => {
    setUsername(name.target.value);
  };

  const getAge = (age) => {
    setAge(age.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault()
    const gatheredData = {
      username: username,
      age: +age
    }
    props.getData(gatheredData)
  }


  return (
    <Card styles={styles.form}>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>
            <span>Username</span>
            <input type='text' onChange={getUsername}></input>
          </label>
        </div>
        <div>
          <label>
            <span>Age (Years)</span>
            <input type='text' onChange={getAge}></input>
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
