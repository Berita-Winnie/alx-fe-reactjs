import React from 'react'
import { useState }from 'react';

const AddRecipeForm = () => {
    const [formData, setFormData] =useState({
        RecipeTitle:"",
        Ingredients:"",
        PreparationSteps:""
    });

//Handle input changes
    const handleChange = (event) =>{
        const{name, value} = event.target;
        setFormData((prevData) =>({
            ...prevData,
            [name]:value,
        }));
    };

// Form validation function
const validateForm = () => {
 let newErrors = {};

 if(!formData.RecipeTitle.trim()){
    newErrors.RecipeTitle = "Recipe Title is required";
 }
 if (IngredientWords.length < 2 ){
    newErrors.Ingredients = "Ingredie must contain at least two words";
 }
 if(!formData.PreparationSteps.trim()){
    newErrors.PreparationSteps="Preparation steps are required";
 }

 setErrors(newErrors);
 return Objects.keys(newErrors).length === 0;
};

//handle Form submission
    const handleSubmit = (event) =>{
        event.preventDefault();
        
        if (validateForm()){
            console.log("Form Submitted:", formData);
            alert("Recipe added successfully!");
            setFormData({ RecipeTitle: "", Ingredients: "", PreparationSteps: "" }); // Reset form
            setErrors({});

        }
        
    };


  return (

    <div className="bg-slate-400 min-h-screen flex flex-col items-center p-6">
    <h1 className="text-gray-800 text-2xl font-bold text-center py-8 px-4">Add Recipe Form</h1>
    <form onSubmit={handleSubmit} className="text-center">
        <div className="flex items-center gap-4 mb-4">
        <label> Recipe Title  </label>
            <input
            className="border border-gray-300 rounded-lg p-3 w-[350px] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="text"
            name="RecipeTitle"
            value={formData.RecipeTitle}
            onChange={handleChange}
            />
             {errors.RecipeTitle && <p className="text-red-500 text-sm">{errors.RecipeTitle}</p>}
        </div>

        <div className="flex items-center gap-4 mb-4">
        <label> Ingredients </label>
            <textarea
            className="border  border-gray-300 rounded-lg shadow-md p-2 w-[350px] h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-200"
            name="Ingredients"
            value={formData.Ingredients}
            onChange={handleChange}
            />
            {errors.Ingredients && <p className="text-red-500 text-sm">{errors.Ingredients}</p>}
        </div>

        <div className="flex items-center gap-4 mb-4">
        <label>Preparation <br /> Steps  </label>
            <textarea
            className="border  border-gray-300 rounded-lg shadow-md p-2 w-[350px] h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-200"
            name="PreparationSteps"
            value={formData.PreparationSteps}
            onChange={handleChange}
            />
            {errors.PreparationSteps && <p className="text-red-500 text-sm">{errors.PreparationSteps}</p>}
        </div>

        <div className=" justify-center flex items-center mt-8">
        <button className="bg-blue-400 py-2 px-12 text-white rounded-full shadow-md hover:bg-blue-500 active:scale-95 transition duration-200 ">
            Submit
        </button>
        </div>
    
    </form>

    </div>
  )
}

export default AddRecipeForm