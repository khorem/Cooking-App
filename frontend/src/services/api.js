import axios from 'axios';

// Créer une instance Axios configurée
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Remplacez par l'URL de votre backend
  timeout: 10000, // Temps limite pour une requête
});

// Intercepteur pour ajouter un token d'authentification (si nécessaire)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Récupération du token dans le stockage local
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Gestion des ressources (exemple avec des recettes)
const fetchRecipes = async () => {
  try {
    const response = await api.get('/recipes'); // Endpoint des recettes
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

const fetchRecipeById = async (id) => {
  try {
    const response = await api.get(`/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching recipe with ID ${id}:`, error);
    throw error;
  }
};

const createRecipe = async (recipeData) => {
  try {
    const response = await api.post('/recipes', recipeData);
    return response.data;
  } catch (error) {
    console.error('Error creating recipe:', error);
    throw error;
  }
};

const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials); // Exemple de route pour l'authentification
    const { token } = response.data;
    localStorage.setItem('token', token); // Stocker le token pour les requêtes futures
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Exporter les fonctions pour utilisation
export default {
  fetchRecipes,
  fetchRecipeById,
  createRecipe,
  login,
};
