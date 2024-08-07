import React from 'react';
import styles from './Menu.module.css';

const Menu = props => (
  <div>
    <select
      className={styles.chooseRecipe}
      onChange={props.onChange}
    >
      {props.children}
    </select>
  </div>
);

export default Menu;
