import axios from "axios";

const baseUrl = "http://localhost:300/recipe/"

export const createRecipe = async (recipe) => {
  try {
    const res = await axios.post(`${baseUrl}recipe`, recipe,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
    return res
  } catch (e) {
    console.error(e);
  }
}
