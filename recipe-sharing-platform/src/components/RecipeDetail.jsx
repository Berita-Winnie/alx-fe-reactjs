import React from 'react'
import { useParams } from 'react-router-dom'
import{useState, useEffect } from 'react';


const RecipeDetail = () => {
    const[recipe, setRecipe] = useState(null);
    let { id } =useParams();

    useEffect(() => {
      fetch("/data.json")
      .then((response) => response.json())
      .then((data) =>{
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("error fetching data:", error));

    }, [id]);//runs everytime id changes

    if(!recipe) {
        return <div> Loading...</div>; //show loading is data isn't ready
    }
  return (
    <div className="font-poppins bg-slate-400 flex flex-col items-center justify-center mb-4">
        <h1 className="text-gray-800 text-2xl font-bold text-center p-6">Recipe Details</h1>

        <div className="bg-slate-100 max-w-sm rounded-lg drop-shadow-2xl p-6">
        <h2 className="text-gray-700 text-center pb-4">{recipe.title}</h2>
        <img className="w-40 h-40 rounded-sm  mx-auto"src={recipe.image} alt={recipe.title} />
        </div>

        <h2 className="text-slate-100 m-6">Ingredients:</h2>
            <ul className="flex flex-wrap gap-2 justify-center px-8 text-sm italic">
                {recipe.ingredients.split(",").map((item, index) => ( // Split string into an array
                    <li key={index} className="after:content-[','] last:after:content-[''] ">{item.trim()}</li> // Trim to remove extra spaces
                ))}
            </ul>

        <h2 className="text-slate-100 m-6">Instructions:</h2>
        <ul className="list-disc list-inside text-slate-900  px-4 italic text-sm space-y-4">
            {recipe.cookinginstructions.map((step, index) => (
            <li key={index}>{step}</li>
            ))}
        </ul>
        

    </div>
  );
};

export default RecipeDetail;