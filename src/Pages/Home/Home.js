// Libraries
import React, { useContext, useEffect } from 'react';

// Components
import Shelf from '../../Components/Home/Shelf/Shelf';
import AppContext from '../../Logic/Context/AppContext/AppContext';
import BookContext from '../../Logic/Context/BookContext/BookContext';

// Stylesheets
import './Home.css';

export default function Home() {
  const { currentPage, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (currentPage !== '/app') {
      dispatch({ type: 'CHANGE-PAGE', currentPage: '/app' });
    }
  });

  const { shelves } = useContext(BookContext);
  const shelvesArray = shelves.map(shelf => (
    <Shelf title={shelf.title} books={shelf.books} />
  ));

  return <div className="home">{shelvesArray}</div>;
}
