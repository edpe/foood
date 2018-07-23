import React from 'react';

const Menu = props => (
  <div>
    <label htmlFor="recipe-select">Choose a recipe:</label>
    <select id="recipe-select" onChange={props.onChange}>
        <option value="">--Please choose an option--</option>
        <option value="salmonliguine">Salmon Linguine</option>
        <option value="greenchickencurry">Green Thai Chicken Curry</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
    </select>
  </div>
)

export default Menu;
