import React, { useState } from 'react';
import ListIngredients from '../components/recipeForm/ListIngredients';
import ListSteps from '../components/recipeForm/ListSteps'


const CreateRecipe = () => {

  return (
    <div className='flex justify-center items-center bg-hero-pattern w-full h-screen'>
      <form className='bg-white flex flex-col items-center px-5 pt-6 lg:pt-16 sm:px-16 w-11/12 sm:w-4/5 lg:w-1/2 h-[60vh] max-h-[80vh] overflow-y-auto'>
        <div className="w-full md:w-2/3">
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
        <div className="w-full md:w-2/3 mb-2 mt-4">
          <label className='pb-1 pt-4 font-sans font-normal text-sm md:text-base'>Tiempos:</label>
          <div className='flex justify-between'>
            <input
              type="text"
              name="cookTime"
              placeholder="Cock Time"
              className="w-5/12 h-10 pl-2 rounded-xl bg-gray bg-opacity-40 text-sm md:text-base"
              required
            />
            <input
              type="number"
              name="prepTime"
              placeholder="Prep Time"
              className="w-5/12 h-10 pl-2 rounded-xl bg-gray bg-opacity-40 text-sm md:text-base"
              required
            />
          </div>
        </div>
        <div className='flex justify-center w-full mt-4 md:mt-8'>
          <input
            type='submit'
            className='bg-primary rounded-md h-10 w-3/5 cursor-pointer font-sans font-semibold text-sm'
          />
        </div>
      </form>
    </div>
  )
}

export default CreateRecipe;
