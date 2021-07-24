import "./Recipe.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ingredientData from "../data/ingredientData";
import Toggle from "../Search/Toggle";
import Comment from "./Comment";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";

const Recipe = () => {
  const [recipeData, setRecipeData] = useState({});
  useEffect(() => setRecipeData(recipeListData), []);

  let likeCountProps = recipeData.likeCount;
  console.log("likeCountProps : " + recipeData.likeCount);
  console.log("likeCountProps 의 타입 : " + typeof recipeData.likeCount);

  // 비밀번호 입력을 받아옵니다.
  const deleteComment = (commentId) => {
    let password = prompt("비밀번호를 입력해주세요.");
    console.log("비밀번호 확인" + password);
    console.log("해당 댓글 id" + commentId);
  };

  return (
    <div className="recipe">
      <h1 className="recipe-name">{recipeData.name}</h1>
      <div className="like">
        <Toggle id={recipeData.id} likeCount={likeCountProps} />
      </div>
      <img
        className="recipe-image"
        src={recipeData.imageUrl}
        alt="대체 텍스트가 들어갈 곳"
      ></img>
      <h2>레시피 소개</h2>
      <div>{recipeData.description}</div>
      <h2>필요한 재료!</h2>
      <div className="recipe-ingredient">
        {recipeData.ingredients &&
          recipeData.ingredients.map((e) => {
            return (
              <span key={e.id}>
                {ingredientData.getIngredientNameById(e.id)}
              </span>
            );
          })}
      </div>
      <h2>레시피 설명</h2>
      <div className="recipe-description">
        {recipeData.steps &&
          recipeData.steps.map((e) => {
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
        {recipeData.comments &&
          recipeData.comments.map((e) => (
            <div className="comment-box" key={e.id}>
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
      <Comment recipeData={recipeData} setRecipeData={setRecipeData} />
      <Link to="/search">뒤로가기</Link>
    </div>
  );
};

export default Recipe;

const recipeListData = {
  id: 10,
  name: "토마토 파스타",
  description: "토마토를 곁들인 매콤달콤 파스타",
  imageUrl: "/images/test_pasta.jpg",
  likeCount: 0,
  ingredients: [
    {
      id: 1,
      ingredient: 1,
    },
    {
      id: 2,
      ingredient: 2,
    },
  ],
  steps: [
    {
      id: 1,
      description: "1. 면을 삶는다.",
      imagePath: "/images/1.jpg",
    },
    {
      id: 2,
      description: "1. 소스를 만든다.",
      imagePath: "/images/test_img.jpeg",
    },
  ],
  likeCount: 0,
  comments: [
    {
      id: 1,
      author: "guedfsdfsfsdfsdfsdfsst01",
      content: "맛있어요",
      password: "1234",
    },
    {
      id: 2,
      author: "guest02",
      content: "파스타 좋아하는데 좋은거 같아요",
      password: "1234",
    },
  ],
};
