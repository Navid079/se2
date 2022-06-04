// Libraries
import React from "react";

// Components

// Stylesheets
import "./ChapterButton.css";

export default function ChapterButton() {
  return (
    <div className="chapter-button">
      <span className="chapter-button__dash" />
      <h2 className="chapter-button__number">فصل اول</h2>
      <p className="chapter-button__price">رایگان</p>
    </div>
  );
}
