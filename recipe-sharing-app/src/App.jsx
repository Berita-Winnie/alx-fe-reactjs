import React from "react";
import useRecipeStore from "./store/recipeStore";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

const App = () => {
  const { recipes, addFavorite } = useRecipeStore();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">All Recipes</h2>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border p-2 my-2 rounded shadow">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
              onClick={() => addFavorite(recipe.id)}
            >
              Add to Favorites
            </button>
          </div>
        ))}
      </div>

      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default App;
