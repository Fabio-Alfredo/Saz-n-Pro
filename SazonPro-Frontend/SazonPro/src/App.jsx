import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateRecipe from "./pages/CreateRecipe";
import ViewRecipe from "./pages/ViewRecipes";

function App() {
  return (
    <div className='w-full bg-primary'>
      {/*<Register />
      <CreateRecipe />
<Login />
      */}

      <ViewRecipe />


    </div>
  );
}

export default App;
