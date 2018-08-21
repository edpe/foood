import axios from "axios";

class RecipeService {
  sendData(data) {
    axios
      .post("http://localhost:4200/recipes/add/post", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

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

  deleteData(id) {
    axios
      .get("http://localhost:4200/recipes/delete/" + id)
      .then()
      .catch(err => console.log(err));
  }
}

export default RecipeService;
