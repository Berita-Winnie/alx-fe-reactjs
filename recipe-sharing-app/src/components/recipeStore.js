import {create} from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set (state => ({ recipes: [...state.recipes, newRecipe]})), // adding new recipes
  setRecipes: (recipes) => set({ recipes }) //initializing the list
}));

export default useRecipeStore;