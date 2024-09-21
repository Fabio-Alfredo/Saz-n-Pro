import React, { useState } from 'react';
import ListIngredients from '../components/recipeForm/ListIngredients';
import ListSteps from '../components/recipeForm/ListSteps'


const CreateRecipe = () => {

  return (
    <div className='flex justify-center items-center bg-hero-pattern w-full h-screen'>
      <form className='bg-white p-5 w-11/12 sm:w-4/5 lg:w-1/2 lg:px-48 h-[60vh]  max-h-[80vh] overflow-y-auto'>
        <div className="w-full">
          <label className="pb-1 font-sans font-normal text-sm md:text-base">
            Your username:
          </label>
          <input
            name="name"
            className="h-10 w-full rounded-xl pl-2 bg-gray bg-opacity-40 text-sm md:text-base"
            placeholder="Enter your name"
          />
        </div>
        <ListIngredients />
        <ListSteps />
        <label className='pb-1 pt-4 font-sans font-normal text-sm md:text-base'>Tiempos:</label>
        <div className="flex mb-2 gap-2">
          <input
            type="text"
            name="cookTime"
            placeholder="Cock Time"
            className="w-1/2 h-10 pl-2 rounded-xl bg-gray bg-opacity-40 text-sm md:text-base"
            required
          />
          <input
            type="number"
            name="prepTime"
            placeholder="Prep Time"
            className="w-1/2 h-10 pl-2 rounded-xl bg-gray bg-opacity-40 text-sm md:text-base"
            required
          />
        </div>
        {/*añadir el boton de envio del formulario */}
      </form>
    </div>
  )
}

export default CreateRecipe;
