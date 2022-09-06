import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RecipeCard.module.css";

const RecipeCard = ({recipe}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }
  
  return (
    <div className={styles.recipe}>
      <div>
        <div className={styles.image}>
          <img src={recipe.image_url} alt="No source"/>
        </div>
        <h3>{recipe.recipe_name}</h3>
      </div>
      <button onClick={handleClick}>See More</button>
    </div>
  );
};

export default RecipeCard;
