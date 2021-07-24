import "./Content.css";
import React, { useState, useEffect } from "react";
import ResultBox from "./ResultBox";
import recipeData from "../data/recipeData";

const Content = () => {
  const [searchingResultRecipes, setSearchingResultRecipes] = useState([]);

  useEffect(() => {
    setSearchingResultRecipes(recipeData.testRecipeList);
    searchingResultRecipes.map((element) => {
      const Id = element.id;
      console.log("처음에만 실행되나요?");
      if (
        localStorage.getItem(Id) === null ||
        localStorage.getItem(Id) === undefined
      ) {
        window.localStorage.setItem(Id, false);
      }
    });
  }, []);

  // 서버로 부터 요청 by axios

  return (
    <div className="search-content">
      <h1 className="select-result-title">우리가 추천하는 레시피는...</h1>
      {searchingResultRecipes.map((element) => {
        return (
          <ResultBox
            id={element.id}
            name={element.name}
            description={element.description}
            imageUrl={element.imageUrl}
            likeCount={element.likeCount}
          />
        );
      })}
    </div>
  );
};

export default Content;

// likeCount : 내가 추가한 항목
const searchingResultRecipeListData = [
  {
    id: 1,
    name: "토마토 파스타",
    description: "토마토 베이스인 파스타",
    imagePath: "/images/onion.jpg",
    likeCount: 10,
  },
  {
    id: 2,
    name: "해물 파스타",
    description: null,
    imagePath: "/images/1.jpg",
    likeCount: 0,
  },
  {
    id: 3,
    name: "그냥 파스타",
    description: "그냥",
    imagePath: "/images/party_noodle.jpg",
    likeCount: 0,
  },
];
