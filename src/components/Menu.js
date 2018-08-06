import React from 'react';
import styles from './Menu.module.css';

const Menu = props => (
  <div>
    <select className={styles.chooseRecipe}id="recipe-select" onChange={props.onChange}>
        <option value="salmonLinguine">Salmon Linguine</option>
        <option value="greenChickenCurry">Green Thai Chicken Curry</option>
    </select>
  </div>
)

export default Menu;
