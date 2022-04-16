// Libraries
import React, { useEffect } from 'react';

// Hooks and Handlers
import useContexts from './Hooks/useContexts';

// Components
import Shelf from '../../Components/Home/Shelf/Shelf';
import ShelfCall from './../../Logic/API/Books/ShelfCall';

// Stylesheets
import './Home.css';

const updateShelf = async (token, bookDispatch, appDispatch) => {
  await ShelfCall(token, bookDispatch);
  appDispatch({ type: 'UPDATE-SHELF' });
};

export default function Home() {
  const {
    currentPage,
    lastShelfUpdate,
    appDispatch,
    token,
    shelves,
    bookDispatch,
  } = useContexts();

  useEffect(() => {
    if (currentPage !== '/app') {
      appDispatch({ type: 'CHANGE-PAGE', currentPage: '/app' });
    }
    if (lastShelfUpdate === '') {
      updateShelf(token, bookDispatch, appDispatch);
    }
  });

  console.log('rendering home');

  const shelvesArray = shelves.map(shelf => (
    <Shelf title={shelf.title} books={shelf.books} key={shelf.title} />
  ));

  return <div className="home">{shelvesArray}</div>;
}
