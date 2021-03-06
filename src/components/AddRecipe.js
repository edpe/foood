import React, { Component } from "react";
import IngredientForm from "./IngredientForm";
import RecipeService from "./RecipeService";

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        title: "",
        image: "",
        duration: "",
        ingredients: [{ title: "", quantity: "", measurement: "" }]
      }
    };
    this.addRecipeService = new RecipeService();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.currentTarget;
    const value = target.value;
    const name = target.name;
    this.setState(state => ({
      recipe: {
        ...state.recipe,
        [name]: value
      }
    }));
  }

  onIngredientFormChange(evt, targetIndex) {
    const currentTarget = evt.currentTarget;

    this.setState(state => {
      const ingredients = state.recipe.ingredients;
      const ingredientField = currentTarget.name;
      const ingredientValue = currentTarget.value;
      return {
        recipe: {
          ...state.recipe,
          ingredients: ingredients.map((oldIngredientForm, i) => {
            if (i === targetIndex) {
              return {
                ...oldIngredientForm,
                [ingredientField]: ingredientValue
              };
            } else {
              return oldIngredientForm;
            }
          })
        }
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addRecipeService.sendData(this.state.recipe);
    this.props.history.push("/index");
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              name="title"
              type="text"
              value={this.state.recipe.title}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Cooking Time:
            <input
              name="duration"
              type="text"
              value={this.state.recipe.duration}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />

          {this.state.recipe.ingredients.map((ing, i) => (
            <IngredientForm
              key={i}
              onChange={evt => this.onIngredientFormChange(evt, i)}
              name={ing.title}
              quantity={ing.quantity}
              measurement={ing.measurement}
            />
          ))}

          <button
            type="button"
            onClick={() =>
              this.setState(oldState => ({
                recipe: {
                  ...oldState.recipe,
                  ingredients: oldState.recipe.ingredients.concat({
                    title: "",
                    measurement: "",
                    quantity: ""
                  })
                }
              }))
            }
            children="Add Ingredient"
          />

          <button
            type="button"
            onClick={() =>
              this.setState(oldState => ({
                recipe: {
                  ...oldState.recipe,
                  ingredients: oldState.recipe.ingredients.slice(0, -1)
                }
              }))
            }
            children="Remove Ingredient"
          />

          <label>
            Image:
            <input
              name="image"
              type="text"
              value={this.state.image}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default AddRecipe;
