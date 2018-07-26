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

    const selectedMethod = data.recipes.find(obj => {
      return obj.id === this.state.selectedMeal;
    }).method;

    const listItems = selectedIngredients.map(ingredient => {
      return <li>{ingredient}</li>;
    });

    const method = selectedMethod.map(step => {
      return <li>{step}</li>;
    });

    return (
      <div>
        <h2>foood</h2>
        <hr />
        <Menu onChange={this.handleChange} />
        <ul>{listItems}</ul>
        <ol>{method}</ol>
      </div>
    );
  }
}

export default App;
