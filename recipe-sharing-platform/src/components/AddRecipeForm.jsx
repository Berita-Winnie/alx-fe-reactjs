import React, { useState } from "react";

const AddRecipeForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        ingredients: "",
        PreparationSteps: "",
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value, // Explicitly using event.target.value
        }));
    };

    // Form validation function
    const validateForm = () => {
        let newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = "Recipe Title is required";
        }
        if (formData.ingredients.trim().split(/\s+/).length < 2) {
            newErrors.ingredients = "Ingredients must contain at least two words";
        }
        if (!formData.PreparationSteps.trim()) {
            newErrors.PreparationSteps = "Preparation steps are required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            console.log("Form Submitted:", formData);
            alert("Recipe added successfully!");
            setFormData({ title: "", ingredients: "", PreparationSteps: "" }); // Reset form
            setErrors({});
        }
    };

    return (
        <div className="bg-slate-400 min-h-screen flex flex-col items-center p-6">
            <h1 className="text-gray-800 text-2xl font-bold text-center py-8 px-4">Add Recipe Form</h1>
            <form onSubmit={handleSubmit} className="text-center">
                <div className="flex items-center gap-4 mb-4">
                    <label> Recipe Title </label>
                    <input
                        className="border border-gray-300 rounded-lg p-3 w-[350px] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>

                <div className="flex items-center gap-4 mb-4">
                    <label> Ingredients </label>
                    <textarea
                        className="border border-gray-300 rounded-lg shadow-md p-2 w-[350px] h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-200"
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                    />
                    {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
                </div>

                <div className="flex items-center gap-4 mb-4">
                    <label>Preparation <br /> Steps </label>
                    <textarea
                        className="border border-gray-300 rounded-lg shadow-md p-2 w-[350px] h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-200"
                        name="PreparationSteps"
                        value={formData.PreparationSteps}
                        onChange={handleChange}
                    />
                    {errors.PreparationSteps && <p className="text-red-500 text-sm">{errors.PreparationSteps}</p>}
                </div>

                <div className="justify-center flex items-center mt-8">
                    <button className="bg-blue-400 py-2 px-12 text-white rounded-full shadow-md hover:bg-blue-500 active:scale-95 transition duration-200 ">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipeForm;
