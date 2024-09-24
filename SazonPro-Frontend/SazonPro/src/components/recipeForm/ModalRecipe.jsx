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
    <div className='flex flex-col items-center absolute  bg-gray bg-opacity-40 w-11/12 max-h-[80vh] overflow-auto'>
      <h2 className='text-xl md:text-2xl text-center text-gray-800 font-sans font-bold p-4'>{recipe.title}</h2>
      <section className='flex flex-col items-center w-full max-h-[35vh] overflow-y-auto gap-3'>
        <h3 className='text-xl md:text-2xl text-gray-800 font-sans font-bold pt-2'>Ingredients</h3>
        {
          recipe.ingredients.map((ingredient, index) => (
            <div key={ingredient.id} className='grid grid-cols-3 items-center bg-white w-5/6 justify-items-center  rounded-md p-3'>
              <ul className=' font-sans text-lg md:text-xl'>{ingredient.name}</ul>
              <p>{ingredient.quantity}</p>
              <p>{ingredient.unit}</p>
            </div>
          ))
        }
      </section>

      <section className='w-full max-h-[35vh]'>
        <h3 className='text-xl md:text-2xl text-center text-gray-800 font-sans font-bold pt-6'>Steps</h3>
        <div className='flex flex-col items-center overflow-y-auto w-full gap-3'>
          {
            recipe.steps.map((step, index) => (
              <div key={step.id} className='break-words text-wrap bg-white rounded-lg w-5/6'>
                <div className='flex items-center  justify-center'>
                  <p className='text-lg md:text-xl font-sans font-semibold p-3' >Step {index + 1}</p>
                  <MdArrowDropDown className='text-2xl cursor-pointer' onClick={() => toggleForm(index)} />
                </div>
                <p className={`${showForm === index ? 'block' : 'hidden'} px-3 pb-3`}>{step.description}</p>
              </div>
            ))
          }

          <input
            className='bg-primary mb-2 p-2 w-32 h-10 rounded-lg font-sans text-lg'
            type="submit"
            value="Salir"
            onClick={resetRecipe}
          />
        </div>
      </section>
    </div>
  )
}

export default ModalRecipe
