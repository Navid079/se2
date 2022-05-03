// Libraries
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AgendaItem from '../../Components/BookView/AgendaItem/AgendaItem';
import BookContext from '../../Logic/Context/BookContext/BookContext';
import { findBook } from '../../util/findBook';

// Stylesheets
import './Agenda.css';

export default function Agenda() {
  const { bookId } = useParams();
  const { shelves } = useContext(BookContext);

  const foundBook = findBook(bookId, shelves);
  if (!foundBook) {
    return <h1>404 - Not Found!</h1>;
  }

  const agendaItems = [];
  for (let chapter of foundBook.chapters) {
    agendaItems.push(
      <AgendaItem
        title={chapter.title}
        price={chapter.price}
        stars={chapter.stars}
        bookId={foundBook._id}
        chapterId={chapter._id}
        pages={10}
      />
    );
  }

  return <div className="agenda">{agendaItems}</div>;
}
