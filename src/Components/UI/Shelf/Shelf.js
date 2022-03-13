// Libraries
import React from 'react';

// Components
import Book from '../../Book/Book';

//Stylesheets
import './Shelf.css';

export default function Shelf() {
  return (
    <div className="shelfs">
      <div className="shelfs-row">
        <h1 className="shelfs-row__header">امروز بخوان</h1>
        <hr className="shelfs-row__header-line" />
        <div className="shelfs-row__book">
          <Book />
          <Book />
          <br/>
        </div>
      </div>
      <div className="shelfs-row">
        <h1 className="shelfs-row__header">تازه ها</h1>
        <hr className="shelfs-row__header-line" />
        <div className="shelfs-row__book">
          <Book />
          <Book />
          <br/>
        </div>
      </div>
      <div className="shelfs-row">
        <h1 className="shelfs-row__header">پیشنهادها</h1>
        <hr className="shelfs-row__header-line" />
        <div className="shelfs-row__book">
          <Book />
          <Book />
          <br/>
        </div>
      </div>
    </div>
  );
}
