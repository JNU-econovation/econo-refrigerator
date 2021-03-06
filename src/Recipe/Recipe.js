import "./Recipe.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import CircularProgress from "@material-ui/core/CircularProgress";
import ingredientData from "../data/ingredientData";
import Toggle from "../Search/Toggle";
import Comment from "./Comment";
import Api from "../Api";

const Recipe = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState();
  const [comments, setComments] = useState();

  useEffect(() => {
    async function initWithServer() {
      const recipeData = await Api.getRecipeById(id);
      setRecipe(recipeData);

      setComments(recipeData.comments);
    }
    initWithServer();
  }, []);

  const deleteComment = async (commentId) => {
    const inputPassword = prompt("비밀번호를 입력해주세요.");

    const result = await Api.deleteComment(commentId, inputPassword);
    if (result === true) {
      alert("삭제되었습니다.");
      setComments((prev) => prev.filter((comment) => comment.id !== commentId));
    } else {
      alert("비밀번호가 일치하지 않습니다..");
    }
  };

  return (
    <div className="page">
      {recipe ? (
        <div className="recipe">
          <h1 className="recipe-name">{recipe.name}</h1>
          <div className="like recipe-like-button">
            <Toggle id={recipe.id} likeCount={recipe.likeCount} />
          </div>
          <div className="recipe-thumbnail">
            <img
              className="recipe-thumbnail-image"
              src={recipe.imagePath}
              alt="대체 텍스트가 들어갈 곳"
            ></img>
          </div>
          <h2>레시피 소개</h2>
          <div>{recipe.description}</div>
          <h2>필요한 재료!</h2>
          <div className="recipe-ingredient recipe-ingredient-mapping">
            {recipe.ingredients &&
              recipe.ingredients.map((e) => {
                return (
                  <span key={e.id}>
                    {ingredientData.getIngredientNameById(e.id)},{" "}
                  </span>
                );
              })}
          </div>
          <h2>레시피 설명</h2>
          <div className="recipe-description recipe-step">
            {recipe.steps &&
              recipe.steps.map((e) => {
                return (
                  <div key={e.id}>
                    <img src={e.imagePath}></img>
                    <div>{e.description}</div>
                  </div>
                );
              })}
          </div>

          <h3 className="comment-header">Comment</h3>
          <div className="comment-container">
            {comments &&
              comments.map((e) => (
                <div className="comment-box comment-mapping" key={e.id}>
                  <div className="comment-author">{e.author}</div>
                  <div className="comment-content">{e.content}</div>
                  <Button
                    className="comment-delete-button"
                    onClick={() => {
                      deleteComment(e.id);
                    }}
                  >
                    <ClearIcon></ClearIcon>
                  </Button>
                </div>
              ))}
          </div>
          <Comment recipeId={id} setComments={setComments} />
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Recipe;
