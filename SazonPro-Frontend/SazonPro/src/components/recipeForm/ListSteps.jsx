import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";

const ListSteps = () => {
  const { steps, handleArrayChange, handleInputChange } = useForm({
    steps: [{ description: "", number: 1 }],
  })

  const addStep = () => {
    handleInputChange({
      target: {
        name: 'steps',
        value: [...steps, { description: '', number: steps.length + 1 }],
      },
    });
  }



  return (
    <div className="mt-4">
      <label className="pb-1 font-sans font-normal text-sm md:text-base">Pasos:</label>
      {
        steps && steps.length > 0 ? (
          steps.map((step, index) => (
            <div key={index} className="flex mb-2 gap-2 items-center">
              <label>{index + 1}</label>
              <textarea
                name="description"
                value={step.description}
                onChange={(e) => handleArrayChange(e.target.value, index, 'steps', 'description')}
                placeholder="Descripción del paso"
                className="w-full h-16 px-2 rounded-xl bg-gray font-sans bg-opacity-40 text-sm md:text-base"
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
