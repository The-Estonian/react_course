import React from 'react';
import styles from './ListInput.module.css';
import Card from '../UI/Card';

const ListInput = () => {
  return (
    <Card styles={styles.form}>
      <form>
        <div>
          <label>
            <span>Username</span>
            <input type='text'></input>
          </label>
        </div>
        <div>
          <label>
            <span>Age (Years)</span>
            <input type='text'></input>
          </label>
        </div>
      </form>
    </Card>
  );
};

export default ListInput;
