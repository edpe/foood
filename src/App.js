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

    const listIngredients = ingredients.map(ingredient => {
      return <li>{ingredient}</li>;
    });

    const listMethod = method.map(step => {
      return <li>{step}</li>;
    });

    return (
      <div>
        <h2>foood</h2>
        <hr />
        <Menu onChange={this.handleChange} />
        <ul>{listIngredients}</ul>
        <ol>{listMethod}</ol>
      </div>
    );
  }
}

export default App;
