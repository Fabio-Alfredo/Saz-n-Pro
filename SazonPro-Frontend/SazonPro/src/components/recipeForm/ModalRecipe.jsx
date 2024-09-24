import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const ModalRecipe = ({ recipe, sendRecipe }) => {

  const [showForm, setShowForm] = useState(null);

  const toggleForm = (index) => {
    setShowForm((pireIndex) => (pireIndex === index ? null : index))
  }

  const resetRecipe = () => {
    sendRecipe('')
  }


  return (
    <div className='flex flex-col items-center absolute  bg-gray w-11/12 max-h-[80vh] overflow-auto'>
      <h2 className='text-xl md:text-2xl text-center text-gray-800 font-sans font-bold p-6'>{recipe.title}</h2>
      <section className='w-full max-h-[35vh] overflow-y-auto'>
        <h3 className='text-xl md:text-2xl text-center text-gray-800 font-sans font-bold p-6'>Ingredients</h3>
        {
          recipe.ingredients.map((ingredient, index) => (
            <ul key={ingredient.id} className='text-center font-sans text-lg md:text-xl'>{ingredient.name} u:{ingredient.quantity}</ul>

          ))
        }
      </section>

      <section className='flex flex-col overflow-y-auto items-center  w-full max-h-[35vh] '>
        <h3 className='text-xl md:text-2xl text-center text-gray-800 font-sans font-bold p-6'>Steps</h3>
        {
          recipe.steps.map((step, index) => (
            <div key={step.id} className='w-full break-words text-wrap'>
              <div className={`flex items-center ${showForm === index ? 'justify-start' : 'justify-center'}`}>
                <p className='text-lg md:text-xl font-sans font-semibold p-3' >Step {index + 1}</p>
                <MdArrowDropDown className='text-2xl cursor-pointer' onClick={() => toggleForm(index)} />
              </div>
              <p className={showForm === index ? 'block' : 'hidden'}>{step.description}</p>
            </div>
          ))
        }
        <input
          className='bg-primary m-1'
          type="submit"
          value="done"
          onClick={resetRecipe}
        />
      </section>
    </div>
  )
}

export default ModalRecipe
