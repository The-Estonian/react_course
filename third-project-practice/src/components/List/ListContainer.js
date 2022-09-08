import React from 'react';
import Card from '../UI/Card';

import styles from './ListContainer.module.css';

const ListContainer = (props) => {
  return (
    <Card styles={styles.listContainer}>
      <div className={styles.listContainer}>{props.children}</div>
    </Card>
  );
};

export default ListContainer;
