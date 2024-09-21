import React, { useState } from "react"
import { useForm } from "../../hooks/useForm"


const ListIngredients = () => {

  const { ingredients, handleArrayChange, handleInputChange } = useForm({
    ingredients: [{ name: '', quantity: '', unit: '' }]
  })

  const addIngredient = () => {
    handleInputChange({
      target: {
        name: 'ingredients',
        value: [...ingredients, { name: '', quantity: '' }],
      },
    });
  };

  return (
    <>
      <div className="mt-4">
        <label className="pb-1 font-sans font-normal text-sm md:text-base">Ingredientes:</label>
        {
          ingredients && ingredients.length > 0 ? (
            ingredients.map((ingredient, index) => (
              <div key={index} className="flex mb-2 gap-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={ingredient.name}
                  onChange={(e) => handleArrayChange(e.target.value, index, 'ingredients')}
                  className="w-1/3 h-10 pl-2 rounded-xl bg-gray bg-opacity-40 text-sm md:text-base"
                  required
                />
                <input
                  type="number"
                  name="quantity"
                  placeholder="Cantidad"
                  value={ingredient.quantity}
                  onChange={(e) => handleArrayChange(e.target.value, index, 'ingredients')}
                  className="w-1/3 h-10 pl-2 rounded-xl bg-gray bg-opacity-40 text-sm md:text-base"
                  required
                />
                <input
                  type="text"
                  name="unit"
                  placeholder="Unidad gm..."
                  value={ingredient.unit}
                  onChange={(e) => handleArrayChange(e.target.value, index, 'ingredients')}
                  className="w-1/3 h-10 pl-2 rounded-xl bg-gray bg-opacity-40 text-sm md:text-base"
                  required
                />
              </div>
            ))
          ) : (
            <p>No hay ingredientes añadidos.</p>
          )
        }
        <button
          type="button"
          onClick={addIngredient}
          className="text-tertiary hover:text-gray-900 font-sans text-sm md:text-base"
        >
          + Añadir Ingrediente
        </button>
      </div>
    </>
  )
}

export default ListIngredients
