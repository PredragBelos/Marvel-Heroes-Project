import React from 'react';
import './searchBar.css';


export const SearchBar = ({ filteredData, setFilteredData, heroData }) => {

    const heroInput = document.querySelector(".heroInput");

    const onClick = () => {
        let result = heroData.filter(item => {
            return item.name.toUpperCase().includes(heroInput.value.toUpperCase());
        });

        setFilteredData(result);
    }


    return (
        <div className="searchBar">
            <input className="heroInput" type="text" name="heroName" placeholder="Search" />
            <button onClick={onClick}>Go</button>
        </div>
    )
}