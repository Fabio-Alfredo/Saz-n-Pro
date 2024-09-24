import { createRecipe, existsRecipe } from "../services/recipe.service.js";
import { handdleHttpError, HttpError } from "../utils/error.handdle.js";
import { existsUser } from "../services/user.service.js";
import { verifyToken } from "../utils/jwt.handdle.js";

export const createRecipeController = async (req, res) => {
    try {
        const { title, ingredients, steps } = req.body;

        const token = req.headers.authorization.split(' ')[1];
        
        const {email, id} = verifyToken(token);

        if (!email) throw new HttpError(404, "User not found");

        const existRecipe = await existsRecipe(title);
        if(existRecipe) throw new HttpError(400, "Recipe already exists");

        const response = await createRecipe(title, ingredients, steps, id);
        res.status(201).send(response);
    } catch (e) {
        handdleHttpError(res, e.message, e)
    }
}