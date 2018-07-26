import React, { Component } from "react";
import Menu from "./menu";
import data from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedMeal: "salmonLinguine" };
  }

  handleChange = evt => {
    this.setState({ selectedMeal: evt.target.value });
  };

  render() {
    const selectedIngredients = data.recipes.find(obj => {
      return obj.id === this.state.selectedMeal;
    }).ingredients;

    const listItems = selectedIngredients.map(ingredient => {
      return <li>{ingredient}</li>;
    });

    return (
      <div>
        <h2>foood</h2>
        <hr />
        <Menu onChange={this.handleChange} />
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default App;
