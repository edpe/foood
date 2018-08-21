import React, { Component } from 'react';
import axios from 'axios';
import RecipeService from './RecipeService';

class EditRecipe extends Component {

  constructor(props) {
      super(props);
      this.addRecipeService = new RecipeService();
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {value: '' };
  }

  componentDidMount(){
    axios.get('http://localhost:4200/items/edit/'+this.props.match.params.id)
    .then(response => {
      this.setState({ value: response.data});
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addRecipeService.updateData(this.state.value,this.props.match.params.id);
    this.props.history.push('/index');
  }

  render() {
    return (
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <label>
                Edit Item:
                <input type="text" value={this.state.value.item} onChange={this.handleChange}  className="form-control"/>
              </label><br/>
              <input type="submit" value="Update" className="btn btn-primary"/>
            </form>
        </div>
    );
  }
}

export default EditRecipe;
