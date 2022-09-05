import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }
  return (
    <div>
      <div>
        <img src={recipe.image_url} />
        <h3>{recipe.recipe_name}</h3>
      </div>
      <button onClick={handleClick}>See More</button>
    </div>
  );
};

export default RecipeCard;
