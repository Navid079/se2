// Libraries
import React from "react";

//Components
import Stars from "../../Components/UI/Stars/Stars.js";

// Stylesheets
import "./SearchItems.css";

export default function SearchItems() {
  return (
    <div className="search-items">
      <div className="search-item__details">
        <img
          className="search-items__image"
          src={require("../../images/cover.png")}
        />
        <div className="search-items__text">
          <h1 className="search-items__bookname">این داستان تمام شدنی نیست</h1>
          <h3 className="search-items__authorname">اسما توانگر </h3>
        </div>
      </div>

      <Stars className='search-item__stars' stars={4}/>
    </div>
  );
}
