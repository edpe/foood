import React from 'react';

const Menu = props => (
  <div>
    <select style={styles.chooseRecipe}id="recipe-select" onChange={props.onChange}>
        <option value="salmonLinguine">Salmon Linguine</option>
        <option value="greenChickenCurry">Green Thai Chicken Curry</option>
    </select>
  </div>
)

const chooseRecipe = {
  fontFamily: "Open Sans Condensed",
  fontSize: "2rem",
  fontWeight: 500,
  marginBottom: "10px",
  marginLeft: "35%",
  textAlignLast: "center",
  border: "0px",
  outline: "0px",
  marginTop: "2%",
  backgroundColour: "white"

}

const styles = {
  chooseRecipe: chooseRecipe
}

export default Menu;
