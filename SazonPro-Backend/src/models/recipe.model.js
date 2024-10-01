import mongoose, { model, Schema } from "mongoose";

const recipesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: [{
            name: String,
            quantity: Number,
            unit: String
        }],
        required: true
    }
    ,
    steps: {
        type: [{
            stepNumber: Number,
            description: String
        }],
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dateCreation: {
        type: Date,
        default: Date.now
    },
})

const Recipe = model('Recipe', recipesSchema);
export {
    Recipe
}