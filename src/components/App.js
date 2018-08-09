import React, { Component } from 'react';
import Menu from './Menu';
import data from '../data.json';
import styles from './App.module.css';

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
      <div className={styles.wrapper}>
        <h2 className={styles.header}>foood</h2>
        <div className={styles.menu}>
          <Menu onChange={this.handleChange}>
            {data.recipes.map(recipe => (
              <option key={recipe.id} value={recipe.id}>{recipe.title}</option>
            ))}
          </Menu>
        </div>
        <article className={styles.article}>
          <ul className={styles.ingredients}>{listIngredients}</ul>
          <ol className={styles.method}>{listMethod}</ol>
        </article>
        <aside
          className={styles.aside}
          style={{ backgroundImage: 'url(' + selectedRecipe.image + ')' }}
        >
          <img
            className={styles.foodImage}
            src={selectedRecipe.image}
            alt="image of selected recipe"
          />
        </aside>
        <div className={styles.footer} />
      </div>
    );
  }
}

export default App;
