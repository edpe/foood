import React, { Component } from 'react';
import RecipeService from './RecipeService';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        title: '',
        image: '',
        duration: ''
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

  handleSubmit(event) {
    event.preventDefault();
    this.addRecipeService.sendData(this.state.recipe);
    this.props.history.push('/index');
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
