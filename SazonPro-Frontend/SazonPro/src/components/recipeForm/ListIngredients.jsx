import React, { useState } from "react"


const ListIngredients = () => {

  const [ingredients, setIngredients] = useState([{ name: '', quantity: '', unit: '' }])

  return (
    <>
      <div className="mb-4">
        <label className="pb-1 font-sans font-normal text-sm md:text-base">Ingredientes:</label>
        {ingredients.map((ingredient, index) => (
          <div key={index} className="flex mb-2 gap-2">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={ingredient.name}
              className="w-1/3 h-10 pl-2 rounded-xl bg-gray bg-opacity-40 text-sm md:text-base"
              required
            />
            <input
              type="number"
              name="quantity"
              placeholder="Cantidad"
              value={ingredient.quantity}
              className="w-1/3 h-10 pl-2 rounded-xl bg-gray bg-opacity-40 text-sm md:text-base"
              required
            />
            <input
              type="text"
              name="unit"
              placeholder="Unidad gm..."
              value={ingredient.unit}
              className="w-1/3 h-10 pl-2 rounded-xl bg-gray bg-opacity-40 text-sm md:text-base"
              required
            />
          </div>
        ))}
        <button
          type="button"
          className="text-tertiary hover:text-gray-900 font-sans text-sm md:text-base"
        >
          + Añadir Ingrediente
        </button>
      </div>
    </>
  )
}

export default ListIngredients
