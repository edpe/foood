import axios from 'axios';

class RecipeService {

  sendData(data) {
    axios.post('http://localhost:4200/recipes/add/post', {
      recipe: data
    })
    .then(res => this.setState({ recipes: res.data }))
    .catch(err => console.log(err))
  }

  updateData(data, id){
    axios.post('http://localhost:4200/recipes/update/'+id, {
      recipe: data
    })
    .then(res => this.setState({ recipes: res.data }))
    .catch(err => console.log(err))
  }

  deleteData(id){
    axios.get('http://localhost:4200/recipes/delete/'+id)
    .then().catch(err => console.log(err))
  }
}

export default RecipeService;
