import React from "react";
import "./Body.css";
import resList from "../utils/mockData";
import ResCard from "./ResCard";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="app-body">
      <div className="app-body-upper">
        <button
          className="btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Restaurants
        </button>
        <div className="search-container">
          <input type="text" className="search-bar" />
          <button className="search-btn">🔍</button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
