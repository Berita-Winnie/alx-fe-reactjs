import useRecipeStore from "../store/recipeStore";
import { useEffect } from "react";

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  // Generate recommendations when component mounts
  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold">Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="border p-2 my-2 rounded shadow">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;