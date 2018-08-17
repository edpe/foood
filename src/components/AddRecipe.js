import React, { Component } from 'react';
import RecipeService from './RecipeService';

class AddRecipe extends Component {

  constructor(props) {
      super(props);
      this.state = {title: '',
                    duration: ''
                    };
      this.addRecipeService = new RecipeService();

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });

      console.log(this.state);
   }

    handleSubmit(event) {
      event.preventDefault();
      this.addRecipeService.sendData(this.state);
      this.props.history.push('/index');
    }

    render() {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label>
              Recipe Title:
              <input name="title" type="text" value={this.state.title} onChange={this.handleChange} className="form-control"/>
            </label><br/>
            <label>
              Cooking Time:
              <input name="duration" type="text" value={this.state.duration} onChange={this.handleChange} className="form-control"/>
            </label><br/>
            <input type="submit" value="Submit" className="btn btn-primary"/>
          </form>
      </div>
      );
    }
  }

export default AddRecipe;
