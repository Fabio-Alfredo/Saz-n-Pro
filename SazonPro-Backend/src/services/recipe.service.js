import { Recipe } from "../models/recipe.model.js";

export const createRecipe = async (title, ingredients, steps, prepTime, cookTime, serves, author) => {
    const newRecipe = await Recipe.create({ title, ingredients, steps, prepTime, cookTime, serves, author });
    return {newRecipe} ;
}


export const existsRecipe = async (title)=>{
    const recipe = await Recipe.findOne({title});
    return recipe;
}
