import React from 'react'
import  {useState, useEffect } from 'react';
 
const HomePage = () => {
   const [Recipes, setRecipes] = useState([]);
   useEffect(() =>{
    fetch("/data.json")
    .then(responce => responce.json())
    .then(data => setRecipes(data))
   },[]);
   

  return (
    <div className="font-poppins min-h-screen bg-slate-400 " >
    <h1 className = "text-gray-900 text-2xl font-bold text-center py-8 px-4" >Todays Recommended Recipes</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 justify-items-center">
    {Recipes 
     .slice(0,2)
     .map((recipe) => (
        <div key = {recipe.id} className="max-w-sm  bg-slate-100 hover:bg-neutral-200 rounded-lg drop-shadow-2xl  ">
            <h2 className="py-4 pr-4 text-center "> {recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="p-3  rounded-lg w-40 h-40 mx-auto"/>
            <p className="p-5 italic  text-sm">{recipe.summary}</p>

        </div>
     ))
     }</div>
    </div>
  )
}
export default HomePage;