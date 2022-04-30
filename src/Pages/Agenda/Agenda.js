// Libraries
import React from 'react';
import AgendaItem from '../../Components/BookView/AgendaItem/AgendaItem';

// Stylesheets
import './Agenda.css';

export default function Agenda() {
  return (
    <div className='agenda'>
      <AgendaItem title='مقدمه' pages={10}/>
      <AgendaItem title='مقدمه' pages={10}/>
      <AgendaItem title='مقدمه' pages={10}/>
      <AgendaItem title='مقدمه' pages={10}/>
    </div>
  );
}
