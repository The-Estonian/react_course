import React, { useState } from 'react';
import styles from './List.module.css';

let content = <li>List is empty!</li>;

const List = (props) => {
  console.log(props.itemsInList);
  return (
    <ul className={styles.list}>
      {props.itemsInList.map((items) => (
        <li>{items.username} ({items.age} years old)</li>
      ))}
      {content}
    </ul>
  );
};

export default List;
