// Libraries
import React, { useContext } from 'react';

// Components
import Shelf from './../../Components/Home/Shelf/Shelf';
import AppContext from '../../Logic/Context/AppContext/AppContext';

// Stylesheets
import './MainPage.css';

export default function MainPage() {
  const { currentPage, dispatch } = useContext(AppContext);

  if (currentPage !== '/app') {
    dispatch({ type: 'CHANGE-PAGE', currentPage: '/app' });
  }

  return (
    <div className="main-page">
      <Shelf className="main-shelf" title={'امروز بخوان'} />
      <Shelf className="main-shelf" title={'تازه ها'} />
      <Shelf className="main-shelf" title={'پیشنهادها'} />
    </div>
  );
}
