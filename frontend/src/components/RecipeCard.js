import React from 'react';

const RecipeCard = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default RecipeCard;
