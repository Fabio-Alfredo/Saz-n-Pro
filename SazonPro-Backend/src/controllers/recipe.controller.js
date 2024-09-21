import { createRecipe, existsRecipe } from "../services/recipe.service.js";
import { handdleHttpError, HttpError } from "../utils/error.handdle.js";
import { existsUser } from "../services/user.service.js";

export const createRecipeController = async (req, res) => {
    try {
        const { title, ingredients, steps, prepTime, cookTime, author } = req.body;
        const existUser = await existsUser(author);
        if (!existUser) throw new HttpError(404, "User not found");

        const existRecipe = await existsRecipe(title);
        if(existRecipe) throw new HttpError(400, "Recipe already exists");

        const response = await createRecipe(title, ingredients, steps, prepTime, cookTime, existUser.id);
        res.status(201).send(response);
    } catch (e) {
        handdleHttpError(res, e.message, e)
    }
}