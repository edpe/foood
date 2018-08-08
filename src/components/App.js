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
        <h2 className={styles.title}>foood</h2>
        <hr/>
        <Menu className onChange={this.handleChange}/>
        <hr/>
        <main className={styles.main}>
          <article className={styles.article}>
            <ul className={styles.ingredients}>{listIngredients}</ul>
            <ol className={styles.ingredients}>{listMethod}</ol>
          </article>
          <aside className={styles.aside}>
            <img className={styles.foodImage} src={selectedRecipe.image} alt={this.state.selectedMeal}/>
          </aside>
        </main>
      </div>
    );
  }
}


export default App;
