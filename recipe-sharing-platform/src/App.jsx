import HomePage from "./components/HomePage";
import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

const App = () => {
  return (
      
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/add-recipe" element={<AddRecipeForm/>} />
      </Routes>
  
  );
}

export default App