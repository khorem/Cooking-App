import React, { useEffect, useState } from 'react';
import api from '../services/api';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        const data = await api.fetchRecipes();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchAllRecipes();
  }, []);

  return (
    <main>
      <h2>Our Recipes</h2>
      <div className="recipe-cards">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} image={recipe.image} title={recipe.title} />
        ))}
      </div>
    </main>
  );
};

export default Recipes;