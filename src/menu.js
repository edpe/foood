import React from 'react';

const Menu = props => (
  <div>
    <label htmlFor="recipe-select">Choose a recipe:</label>
    <select id="recipe-select" onChange={props.onChange}>
        <option value="">--Please choose an option--</option>
        <option value="salmonLinguine">Salmon Linguine</option>
        <option value="greenChickenCurry">Green Thai Chicken Curry</option>
    </select>
  </div>
)

export default Menu;
