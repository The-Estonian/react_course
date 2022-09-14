import React from 'react';
import MealItemForm from "./MealItemForm"

import styles from './MealItem.module.css';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm item={props.mealKey}/>
      </div>
    </li>
  );
};

export default MealItem;