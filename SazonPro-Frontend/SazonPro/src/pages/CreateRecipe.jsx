import React, { useState } from 'react';
import ListIngredients from '../components/recipeForm/ListIngredients';
import ListSteps from '../components/recipeForm/ListSteps'
import { useForm } from '../hooks/useForm';
import { createRecipe } from '../service/RecipeService';
import ModalRecipe from '../components/recipeForm/ModalRecipe';



const CreateRecipe = () => {

  const recipeP = {
    title: "fsdfaff",
    ingredients: [
      { name: "sdfa", quantity: 132, unit: "232", _id: "66f23dded10935e372035d92" },
      { name: "2112fds", quantity: 121, unit: "21", _id: "66f23dded10935e372035d93" },
      { name: "fsadf", quantity: 121, unit: "323", _id: "66f23dded10935e372035d94" },
      { name: "fdsaf", quantity: 1231, unit: "321", _id: "66f23dded10935e372035d95" }
    ],
    steps: [
      { description: "fdsfadsfa", _id: "66f23dded10935e372035d96" },
      { description: "fsdafa", _id: "66f23dded10935e372035d97" },
      { description: "fdsfa", _id: "66f23dded10935e372035d98" },
      { description: "fsdfa", _id: "66f23dded10935e372035d99" }
    ],
    author: "66dbceea164604404ae36806",
    _id: "66f23dded10935e372035d91",
    dateCreation: "2024-09-24T04:19:42.166Z",
    __v: 0
  };


  const { title, ingredients, steps, cookTime, prepTime, handleInputChange, handleArrayChange, resetForm } = useForm({
    title: '',
    ingredients: [{ name: '', quantity: '', unit: '' }],
    steps: [{ description: '', number: 1 }],
  })

  const [recipe, sendRecipe] = useState(recipeP);

  const insertRecipe = async (e) => {
    e.preventDefault()
    try {
      const data = {
        title,
        ingredients,
        steps,
        cookTime,
        prepTime
      }
      const res = await createRecipe(data)
      console.log(res.data.newRecipe)
      sendRecipe(res.data.newRecipe)
      resetForm()
    } catch (e) {
      console.error(e)
    }

  }

  return (
    <div className='flex justify-center items-center bg-hero-pattern w-full h-screen'>
      {
        recipe == '' ? (
          <form className='bg-white flex flex-col relative items-center px-5 py-14 lg:pt-16 sm:px-16 w-11/12 sm:w-4/5 lg:w-1/2 h-fit max-h-[70vh] overflow-y-auto rounded-lg'>
            <div className="w-full md:w-2/3">
              <label className="pb-1 font-sans font-normal text-sm md:text-base">
                Your username:
              </label>
              <input
                name="title"
                value={title}
                onChange={handleInputChange}
                className="h-10 w-full rounded-xl pl-2 bg-gray bg-opacity-40 text-sm md:text-base"
                placeholder="Enter your name"
              />
            </div>
            <ListIngredients
              ingredients={ingredients}
              handleArrayChange={handleArrayChange}
              handleInputChange={handleInputChange}
            />
            <ListSteps
              steps={steps}
              handleArrayChange={handleArrayChange}
              handleInputChange={handleInputChange}
            />
            <div className='flex justify-center w-full mt-4 md:mt-8'>
              <input
                type='submit'
                onClick={insertRecipe}
                className='bg-primary rounded-md h-10 w-3/5 cursor-pointer font-sans font-semibold text-sm'
              />
            </div>
          </form>
        ) : (
          <ModalRecipe recipe={recipe} sendRecipe={sendRecipe} />
        )
      }
    </div >
  )
}

export default CreateRecipe;
