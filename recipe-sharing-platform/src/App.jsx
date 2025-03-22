import HomePage from "./components/HomePage";
import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import RecipeDetail from "./components/RecipeDetail";


const App = () => {
  return (

      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
 
  );
}

export default App