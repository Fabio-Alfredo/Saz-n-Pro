import React, { useState } from "react";

const ListSteps = ({ steps = [], handleArrayChange, handleInputChange }) => {

  const addStep = () => {
    handleInputChange({
      target: {
        name: 'steps',
        value: [...steps, { description: '', number: steps.length + 1 }],
      },
    });
  }



  return (
    <div className="mt-4 w-full md:w-2/3">
      <label className="pb-1 font-sans font-normal text-sm md:text-base">Pasos:</label>
      {
        steps && steps.length > 0 ? (
          steps.map((step, index) => (
            <div key={index} className="flex flex-col mb-2 gap-2 items-center">
              <label>{index + 1}</label>
              <textarea
                name="description"
                value={step.description || ''}
                onChange={(e) => handleArrayChange(index, e, 'steps')}
                placeholder="Descripción del paso"
                className="w-full h-16 p-2 rounded-xl bg-gray font-sans bg-opacity-40 text-sm md:text-base"
              />
            </div>
          ))) : (
          <p>No hay pasos añadidos.</p>
        )
      }
      <button
        type="button"
        onClick={addStep}
        className="text-tertiary hover:text-gray-900 font-sans text-sm md:text-base"
      >
        + Añadir Ingrediente
      </button>
    </div>

  )
}

export default ListSteps;
