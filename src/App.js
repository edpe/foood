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
      return <li key={ingredient.id}>{ingredient.name}</li>;
    });

    const listMethod = method.map(step => {
      return <li key={step.id}>{step.name}</li>;
    });

    return (
      <div>
        <h2>foood</h2>
        <hr />
        <Menu onChange={this.handleChange} />
        <ul>{listIngredients}</ul>
        <ol>{listMethod}</ol>
        <img src={selectedRecipe.image}/>
      </div>
    );
  }
}

export default App;
