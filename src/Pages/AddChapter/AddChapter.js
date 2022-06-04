// Libraries
import React from "react";

// Components
import ChapterButton from "../../Components/AddChapter/ChapterButton/ChapterButton";
import Button from "../../Components/UI/Button/Button";
import ModalCard from "../../Components/UI/ModalCard/ModalCard";
// Stylesheets
import "./AddChapter.css";

export default function AddChapter() {
  return (
    <ModalCard show fill>
      <div className="add-chapter">
        <div className="g-scrollbar add-chapter__chapter-container">
          <ChapterButton />
          <ChapterButton />
          <ChapterButton />
          <ChapterButton />
          <ChapterButton />
          <ChapterButton />
          <ChapterButton />
          <ChapterButton />
        </div>
        <div className="add-chapter__controls">
          <Button className="add-chapter__confirm-button">تایید</Button>
        </div>
      </div>
    </ModalCard>
  );
}
