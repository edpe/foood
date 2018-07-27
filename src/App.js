import React, { Component } from 'react';
import Menu from './menu';
import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedMeal: 'salmonLinguine' };
  }

  handleChange = evt => {
    this.setState({ selectedMeal: evt.target.value });
  };

  render() {
    const selectedRecipe = data.recipes.find(obj => {
      return obj.id === this.state.selectedMeal;
    });

    const ingredients = selectedRecipe.ingredients;

    const method = selectedRecipe.method;

<<<<<<< HEAD
    const listIngredients = ingredients.map(ingredient => {
      return <li>{ingredient}</li>;
    });

    const listMethod = method.map(step => {
=======
    const selectedMethod = data.recipes.find(obj => {
      return obj.id === this.state.selectedMeal;
    }).method;

    const listItems = selectedIngredients.map(ingredient => {
      return <li>{ingredient}</li>;
    });

    const method = selectedMethod.map(step => {
>>>>>>> 182892f57e4f5f9d27c08af3c19c3ab0ae8760a6
      return <li>{step}</li>;
    });

    return (
      <div>
        <h2>foood</h2>
        <hr />
        <Menu onChange={this.handleChange} />
<<<<<<< HEAD
        <ul>{listIngredients}</ul>
        <ol>{listMethod}</ol>
=======
        <ul>{listItems}</ul>
        <ol>{method}</ol>
>>>>>>> 182892f57e4f5f9d27c08af3c19c3ab0ae8760a6
      </div>
    );
  }
}

export default App;
