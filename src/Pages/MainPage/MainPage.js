// Libraries
import React, { useContext } from 'react';

// Components
import Shelf from './../../Components/Home/Shelf/Shelf';
import AppContext from '../../Logic/Context/AppContext/AppContext';
import BookContext from '../../Logic/Context/BookContext/BookContext';

// Stylesheets
import './MainPage.css';

export default function MainPage() {
  const { currentPage, dispatch } = useContext(AppContext);
  const { shelves } = useContext(BookContext);
  const shelvesArray = [];
  for (let shelf of shelves) {
    const { title, books } = shelf;
    shelvesArray.push(
      <Shelf className="main-shelf" title={title} books={books} />
    );
  }

  if (currentPage !== '/app') {
    dispatch({ type: 'CHANGE-PAGE', currentPage: '/app' });
  }

  return <div className="main-page">{shelvesArray}</div>;
}
