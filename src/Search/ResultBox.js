import "./ResultBox.css";
import React from "react";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import ingredientData from "../data/ingredientData";

const ResultBox = ({
  id,
  name,
  description,
  imagePath,
  ingredients,
  insufficientIngredients,
  likeCount,
}) => {
  return (
    <div className="result-box result-box-container">
      <Link to={"/recipe/" + id} className="result-box recipe-link">
        <div className="result-box thumbnail">
          <img
            className="result-box thumbnail-img"
            src={imagePath}
            alt={imagePath}
          />
        </div>
        <div className="result-box box-content">
          <div className="box-content-title">{name}</div>
          <div className="box-content-description">
            {description === null ? "레시피의 설명이 없습니다." : description}
          </div>
          <div className="box-content-ingredient-title">재료</div>
          <div className="box-content-ingredient-list">
            {insufficientIngredients &&
              insufficientIngredients.map(({ id }) => (
                <div className="box-content-ingredient insufficient" key={id}>
                  {ingredientData.getIngredientNameById(id)}
                </div>
              ))}
            {ingredients.map(({ id }) => (
              <div className="box-content-ingredient" key={id}>
                {ingredientData.getIngredientNameById(id)}
              </div>
            ))}
          </div>
        </div>
      </Link>
      <Toggle id={id} likeCount={likeCount} />
    </div>
  );
};

export default ResultBox;
