import axios from "axios";

async function get10RandomRecipes() {
  const url = process.env.REACT_APP_API_URL + "recipe/randomList";

  const result = await axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });

  return result;
}

async function searchSufficientRecipes(ingredientsParam) {
  const url =
    process.env.REACT_APP_API_URL +
    "recipe/sufficientSearch" +
    ingredientsParam;

  const result = await axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });

  return result;
}

async function searchInsufficientRecipes(ingredientsParam) {
  const url =
    process.env.REACT_APP_API_URL +
    "recipe/insufficientSearch" +
    ingredientsParam;

  const result = await axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });

  return result;
}

export default {
  get10RandomRecipes,
  searchSufficientRecipes,
  searchInsufficientRecipes,
};
