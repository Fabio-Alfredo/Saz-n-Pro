import { Recipe } from "../models/recipe.model.js";

export const createRecipe = async (title, ingredients, steps, prepTime, cookTime, author) => {
    const newRecipe = await Recipe.create({ title, ingredients, steps, prepTime, cookTime, author });
    return {newRecipe} ;
}


export const existsRecipe = async (title)=>{
    const recipe = await Recipe.findOne({title});
    return recipe;
}
