import React from 'react';
import styles from './List.module.css';
import ListContainer from './ListContainer';

const List = (props) => {
  return (
    <ul className={styles.list}>
      {props.itemsInList.length > 0
        ? props.itemsInList.map((items) => (
            <ListContainer key={items.key}>
              <li>
                {items.username} ({items.age} years old)
              </li>
            </ListContainer>
          ))
        : ''}
    </ul>
  );
};

export default List;
