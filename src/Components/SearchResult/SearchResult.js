// Libraries
import React from 'react';
import {IoCloseSharp} from 'react-icons/io5';
import {FaSearch} from 'react-icons/fa';

//Components
import SearchItems from '../SearchItems/SearchItems';

// Stylesheets
import './SearchResult.css';

export default function SearchResult() {
  return (
    <div className='search-result'> 
    <div className='search'>
        <FaSearch className='search-icon'/>
        <input className='search-input' placeholder='جست و جو کنید'></input>
        <IoCloseSharp className='search-close'/>   
    </div>
    
    <SearchItems/>
    <SearchItems/>
    <SearchItems/>
    
    
    </div>
  )
}
