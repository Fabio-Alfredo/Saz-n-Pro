import { cloudinary } from "../config/cloundinary.config.js";
import { Recipe } from "../models/recipe.model.js";
import { HttpError } from "../utils/error.handdle.js";

export const createRecipe = async (title, ingredients, steps, author, img) => {
    const image = await saveImage(img);
    
    const newRecipe = await Recipe.create({ title, ingredients, steps, image, author });

    return { newRecipe };
}


export const existsRecipe = async (title) => {
    const recipe = await Recipe.findOne({ title });
    return recipe;
}


export const getNameRecipes = async () => {
    const recipes = await Recipe.find({}, "title");
    return recipes;
}

export const saveImage = async (image) => {

    
    const res = await new Promise((resolve, reject) => {

        cloudinary.uploader.upload_stream
        ({
            folder: 'food',
            stream: image,
            resource_type: 'image',
            public_id: `recipe-${Date.now()}`

        },
        (error, result) => {
            if (error) {
                console.log(error)
                return reject(new HttpError(400, error.message));
            }
            resolve(result.secure_url);

        }).end(image);


    })

    return res;

}