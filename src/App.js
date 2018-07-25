import React, {Component} from 'react';
import Menu from './menu';
import data from './data.json';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { selectedMeal: "" }

  }

  handleChange = (evt) => {
    this.setState({selectedMeal: evt.target.value})
  }

  }

  render() {
  //  const recip = data.recipes.find((recipeObj) => )
    return (
      <div>
        <h2>foood</h2>
        <hr/>
        <Menu onChange={this.handleChange} />
      </div>
    )
  }
}

export default App;
