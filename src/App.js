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
        <h2 style={styles.title}>foood</h2>
        <hr/>
        <Menu style={styles.menu} onChange={this.handleChange} />
        <main style={styles.main}>
          <article>
            <ul>{listIngredients}</ul>
            <ol>{listMethod}</ol>
          </article>
          <aside>
            <img style={styles.foodImage} src={selectedRecipe.image}/>
          </aside>
        </main>
      </div>
    );
  }
}

const main = {
  display: "flex",
  flex: 1,
  fontFamily: "garamond"
}

const foodImage = {
  width: "500px",
  height: "250px",
  marginLeft: 20
}

const title = {
  fontFamily: "garamond",
  fontSize: "4rem"
}

const menu = {
  fontFamily: "garamond"
}

const styles = {
  foodImage: foodImage,
  main: main,
  title: title,
  menu: menu
}

export default App;
