import { createRecipe, existsRecipe, getNameRecipes } from "../services/recipe.service.js";
import { handdleHttpError, HttpError } from "../utils/error.handdle.js";

export const createRecipeController = async (req, res) => {
    try {
        const { id, email } = req.user;
        if (!email) throw new HttpError(404, "User not found");

        const { title, ingredients, steps } = req.body;
        console.log(req.files)
        const img = req.files[0].buffer;
    

        const existRecipe = await existsRecipe(title);
        if (existRecipe) throw new HttpError(400, "Recipe already exists");

        const response = await createRecipe(title, ingredients, steps, id, img);
        res.status(201).send(response);
    } catch (e) {
        handdleHttpError(res, e.message, e)
    }
}

export const getNameRecipesController = async (req, res) => {
    try {
        const { email, id } = req.user;
        if (!email) throw new HttpError(404, "User not found");

        const response = await getNameRecipes();
        res.status(200).send(response);
    } catch (e) {
        handdleHttpError(res, e.message, e)
    }
}