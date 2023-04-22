import React, { useState } from "react";
import Recipie from "./Recipie";

const RecipeList = ({ reciepe }) => {
  const [filter, setFilter] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredRecipes = reciepe.filter((recipe) => {
    if (filter) {
      return recipe.mealType === filter;
    }
    if (searchKeyword) {
      return recipe.name.toLowerCase().includes(searchKeyword.toLowerCase());
    }
   
    return true;
  });

  return (
    <div>
      <form>
        <label htmlFor="criteria">Filter by:</label>
        <select id="criteria" onChange={handleFilterChange}>
          <option value="">All Reciepes</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>
      </form>
      <form>
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          value={searchKeyword}
          onChange={handleSearchChange}
        />
      </form>
      <ul>
        {filteredRecipes.map((recipe) => (
          <Recipie value={recipe} />))}
      </ul>
    </div>
  );
};

export default RecipeList;
