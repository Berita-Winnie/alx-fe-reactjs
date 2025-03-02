import useRecipeStore from "../store/recipeStore";

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore();
  const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold">My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="border p-2 my-2 rounded shadow">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded mt-2"
              onClick={() => removeFavorite(recipe.id)}
            >
              Remove from Favorites
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;