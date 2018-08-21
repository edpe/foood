import React, { Component } from 'react';
import RecipeService from './RecipeService';
import axios from 'axios';
import TableRow from './TableRow';

class IndexRecipe extends Component {

  constructor(props) {
      super(props);
      this.state = {value: '', recipes: ''};
      this.addRecipeService = new RecipeService();
    }
    componentDidMount(){
      axios.get('http://localhost:4200/recipes')
      .then(response => {
        this.setState({ recipes: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
      if(this.state.recipes instanceof Array){
        return this.state.recipes.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        })
      }
    }

    render() {
      return (
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>No.</td>
                  <td>Item</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }

export default IndexRecipe;
