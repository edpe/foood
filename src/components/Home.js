import React, { Component } from 'react';
import Menu from './Menu';
import styles from './Home.module.css';
import RecipeService from './RecipeService';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedMeal: '', recipes: [] };
    this.addRecipeService = new RecipeService();
  }

  handleChange = evt => {
    this.setState({ selectedMeal: evt.target.value });
  };

  async componentDidMount() {
    const recipe_data = await this.addRecipeService.getRecipes()
    this.setState({
      ...this.state,
      recipes: recipe_data,
    })
  }

  render() {
    if (this.state.recipes.length === 0) return null;

    const selectedRecipe = this.state.recipes.find(obj => {
      return obj._id === this.state.selectedMeal;
    }) || this.state.recipes[0];

    const ingredients = selectedRecipe.ingredients;

    // const method = selectedRecipe.method;

    const listIngredients = ingredients.map(ingredient => {
      return (
        <li key={ingredient._id}>
          {ingredient.quantity}
          {ingredient.measurement} {ingredient.name}
        </li>
      );
    });

    // TODO: Make methods great again.
    // const listMethod = method.map(method => {
    //   return <li key={method.id}>{method.step}</li>;
    // });

    return (
      <div className={styles.wrapper}>
        <article className={styles.article}>
        <div className={styles.menu}>
          <Menu onChange={this.handleChange}>
            {this.state.recipes.map(recipe => (
              <option key={recipe._id} value={recipe._id}>
                {recipe.title}
              </option>
            ))}
          </Menu>
        </div>
          <p>Cooking time {selectedRecipe.cookingTime}</p>
          <ul className={styles.ingredients}>{listIngredients}</ul>
          {/* TODO: RE: Methods, please add them
           <ol className={styles.method}>{listMethod}</ol>*/}
        </article>
        <aside
          className={styles.aside}
          style={{ backgroundImage: 'url(' + selectedRecipe.image + ')' }}
        >
          <img
            className={styles.foodImage}
            src={selectedRecipe.image}
            alt="selected recipe"
          />
        </aside>
        <div className={styles.footer} />
      </div>
    );
  }
}


export default Home;
