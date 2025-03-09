import React from 'react'
import useRecipeStore from './recipeStore'

const RecipeDetails = ({recipeId}) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
    return (
      <>
      <h1>{recipe.title}</h1>
      <p>{ recipe.description}</p>
      </>
    )
  
};

export default RecipeDetails;