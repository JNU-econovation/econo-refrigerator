import React, { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = ({ selectedIngredients, setSelectedIngredients }) => {
  // localStorage 초기화
  let firstCheck = [];
  firstCheck = window.localStorage.getItem("refrigerator");
  if (firstCheck === null) {
    window.localStorage.setItem(
      "refrigerator",
      JSON.stringify(selectedIngredients)
    );
  }
  //localstorage에서 받은 값을 selectedIngredient에 저장하는법?
  console.log("임시 저장소 : " + selectedIngredients);
  console.log("selected에 저장된 값 : " + selectedIngredients);

  return (
    <div className="sidebar">
      <h1 className="ingredient">재료 목록</h1>
      <ul className="ingredient-list">
        {selectedIngredients.map((selected) => {
          return (
            <li>
              {selected} <button>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;