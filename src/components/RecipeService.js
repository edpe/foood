import axios from "axios";

class RecipeService {
  sendData(data) {
    axios
      .post("http://localhost:4200/recipes/add/post", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  /**
    TODO: Rewrite so that the required functionality is in place.
   */
  updateData(data, id) {
    axios
      .post("http://localhost:4200/recipes/update/" + id, {
        recipe: {
          title: data.title,
          duration: data.duration
        }
      })
      .then(res =>
        this.setState({
          recipe: {
            title: data.title,
            duration: data.duration
          }
        })
      )
      .catch(err => console.log(err));
  }

  async getRecipes(){
    const result = await axios.get('http://localhost:4200/recipes');
    return result.data;
  }

  deleteData(id) {
    axios
      .get("http://localhost:4200/recipes/delete/" + id)
      .then()
      .catch(err => console.log(err));
  }
}

export default RecipeService;
