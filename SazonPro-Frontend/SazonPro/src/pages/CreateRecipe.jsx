import React, { useState } from 'react';
import ListIngredients from '../components/recipeForm/ListIngredients';


const CreateRecipe = () => {

  return (
    <div className='flex justify-center items-center bg-hero-pattern w-full h-screen'>
      <form className='bg-white grid grid-rows-4 place-items-center p-5 w-11/12 max-h-[60vh]'>
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
      </form>
    </div>
  )
}

export default CreateRecipe;
