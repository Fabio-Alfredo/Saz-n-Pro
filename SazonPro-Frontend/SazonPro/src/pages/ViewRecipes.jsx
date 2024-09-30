import React, { useEffect, useState } from "react";
import image from "../assets/images/chef.png"
import { getNamesRecipes } from "../service/RecipeService";
import Swal from "sweetalert2";
import Loading from "../components/gerenal/Loading";


const ViewRecipe = () => {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const res = await getNamesRecipes();
        setRecipes(res.data)
      } catch (e) {
        console.error(e)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${e.error}`,
        });
      }
    }
    getRecipes()
  }, [])



  return (
    <div className='flex flex-col justify-center  items-center max-w-[1440px] h-screen bg-primary mx-auto'>
      <h1 className='text-center m-8 text-5xl font-sans'>SazonPro Recetas</h1>
      <div className='flex flex-wrap justify-evenly mb-5 w-11/12 md:w-4/5 h-[80vh] gap-10 p-2 overflow-y-auto '>
        {
          recipes.length <= 0 ? (
            <Loading />

          ) : (
            recipes.map((recipe) => (
              <div key={recipe.id} className='flex items-center justify-center flex-col overflow-hidden bg-primary rounded-xl transition cursor-pointer ease-in hover:translate-y-2 bg-opacity-90 shadow-lg shadow-black w-5/12 h-28 md:h-48 xl:h-96'>
                <img src={image} alt='chef' className='w-1/2 h-3/4 rounded-full' />
                <h2 className='w-11/12 text-center text-xl font-bold text-black text-ellipsis whitespace-nowrap truncate'>{recipe.title}</h2>
              </div>
            ))
          )
        }
      </div>
    </div>
  )


}

export default ViewRecipe;
