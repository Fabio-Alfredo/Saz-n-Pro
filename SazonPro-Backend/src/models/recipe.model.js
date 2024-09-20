import mongoose, { model, Schema } from "mongoose";

const recipesSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    ingredients:[{
        name: String,
        quantity: Number,
        unit: String
    }],
    steps:[{
        stepNumber: Number,
        description: String
    }],
    prepTime:{
        type: Number,
        required: true
    },
    cookTime:{
        type: Number,
        required: true
    },
    serves:{
        type: Number,
        required: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dateCreation:{
        type:Date,
        default: Date.now
    },
})

const Recipe = model('Recipe', recipesSchema);
export {
    Recipe
}