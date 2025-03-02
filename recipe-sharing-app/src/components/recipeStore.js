import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: "Spaghetti Carbonara", description: "A classic Italian pasta dish." },
    { id: 2, title: "Chicken Biryani", description: "A flavorful rice dish with spices and chicken." },
    { id: 3, title: "Avocado Toast", description: "A simple and healthy breakfast option." },
  ],
  favorites: [],
  recommendations: [],

  // Add to favorites
  addFavorite: (recipeId) => {
    const { favorites } = get();
    if (!favorites.includes(recipeId)) {
      set({ favorites: [...favorites, recipeId] });
    }
  },

  // Remove from favorites
  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
  },

  // Generate recommendations (basic logic)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) => favorites.includes(recipe.id) && Math.random() > 0.3
    );
    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;