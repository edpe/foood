import React, {Component} from 'react';
import Meal from './meal';
import Menu from './menu';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {selectedMeal: ""}

  }

  handleChange = (evt) => {
    this.setState({selectedMeal: evt.target.value})
  }

  render() {
    return (
      <div>
        <h2>foood</h2>
        {this.state.selectedMeal}
        <hr/>
        <Menu onChange={this.handleChange} />
      </div>
    )
  }
}

export default App;
