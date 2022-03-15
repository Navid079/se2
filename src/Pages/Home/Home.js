// Libraries
import React, { useEffect } from 'react';

// Hooks and Handlers
import useContexts from './Hooks/useContexts';

// Components
import Shelf from '../../Components/Home/Shelf/Shelf';
import ShelfCall from './../../Logic/API/Books/ShelfCall';

// Stylesheets
import './Home.css';

const updateShelf = async (jwt, bookDispatch, appDispatch) => {
  await ShelfCall(jwt, bookDispatch);
  appDispatch({ type: 'UPDATE-SHELF' });
};

export default function Home() {
  const {
    currentPage,
    lastShelfUpdate,
    appDispatch,
    jwt,
    shelves,
    bookDispatch,
  } = useContexts();

  useEffect(() => {
    if (currentPage !== '/app') {
      appDispatch({ type: 'CHANGE-PAGE', currentPage: '/app' });
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
