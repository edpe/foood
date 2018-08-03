import React, { Component } from 'react';
import Menu from './menu';
import data from './data.json';


const main = {
  display: "flex",
  flex: 1,
  fontFamily: "Open Sans Condensed",
}

const ingredients = {
  textAlign: "left",
  listStyleType: "none",
  marginRight: "20px",
  fontSize: "1.5rem"
}

const foodImage = {
  width: "100%",
  height: "auto",
  paddingRight: "5%"
}

const title = {
  fontFamily: "garamond",
  fontSize: "4rem",
  marginTop: "0.1em",
  marginRight: "5%",
  marginBottom: "0.1em",
  textAlign: "right",
}

const article = {
  flex: "50%"
}

const aside = {
  flex: "50%"
}

const styles = {
  foodImage: foodImage,
  main: main,
  title: title,
  ingredients: ingredients,
  article: article,
  aside: aside
}

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
        <h2 style={styles.title}>foood</h2>
        <hr/>
        <Menu style onChange={this.handleChange}/>
        <hr/>
        <main style={styles.main}>
          <article style={styles.article}>
            <ul style={styles.ingredients}>{listIngredients}</ul>
            <ol style={styles.ingredients}>{listMethod}</ol>
          </article>
          <aside style={styles.aside}>
            <img style={styles.foodImage} src={selectedRecipe.image} alt={this.state.selectedMeal}/>
          </aside>
        </main>
      </div>
    );
  }
}


export default App;
