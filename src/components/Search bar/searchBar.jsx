import React from 'react';
import './searchBar.css';

export const SearchBar = () => {
    return(
        <div className="searchBar">
            <input type="text" name="heroName" placeholder="Search"/>
            <button>Go</button>
        </div>
    )
}