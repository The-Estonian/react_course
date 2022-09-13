import React, { Fragment } from 'react';
import HeaderCartButton from "./HeaderCartButton"

import styles from './Header.module.css';
import img from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
      </header>
      <div className={styles["main-image"]}>
        <img src={img} alt='Table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
