// Libraries
import React, { useContext, useEffect } from 'react';

// Components
import Shelf from '../../Components/Home/Shelf/Shelf';
import AppContext from '../../Logic/Context/AppContext/AppContext';
import BookContext from '../../Logic/Context/BookContext/BookContext';

// Stylesheets
import './Home.css';
import ShelfCall from './../../Logic/API/Books/ShelfCall';
import UserContext from '../../Logic/Context/UserContext/UserContext';

const updateShelf = async (jwt, bookDispatch, appDispatch) => {
  await ShelfCall(jwt, bookDispatch);
  appDispatch({ type: 'UPDATE-SHELF' });
};

export default function Home() {
  const {
    currentPage,
    lastShelfUpdate,
    dispatch: appDispatch,
  } = useContext(AppContext);
  const { jwt } = useContext(UserContext);
  const { shelves, dispatch: bookDispatch } = useContext(BookContext);

  useEffect(() => {
    if (currentPage !== '/app') {
      dispatch({ type: 'CHANGE-PAGE', currentPage: '/app' });
    }
    if (lastShelfUpdate === '') {
      updateShelf(jwt, bookDispatch, appDispatch);
    }
  });

  const shelvesArray = shelves.map(shelf => (
    <Shelf title={shelf.title} books={shelf.books} />
  ));

  return <div className="home">{shelvesArray}</div>;
}
