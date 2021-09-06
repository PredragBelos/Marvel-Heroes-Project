import React, { useEffect, useState } from 'react';
import { caracterURL } from '../../data/publicData';
import { getHeroData } from '../../services/createHeroesList';
import { Card } from '../Card/card';
import { SearchBar } from '../Search bar/searchBar';
import './heroCards.css';

export const HeroCards = ({heroes, setHeroes}) => {

    const [heroData, setHeroData] = useState([]);
    const [filteredHeroData, setFilteredHeroData] = useState([])

    useEffect(() => {
        getHeroData(caracterURL).then(result => {
            setHeroData(result);
            setFilteredHeroData(result);
        })
    }, [])

    const filteredHeroProps = filteredHeroData => (setFilteredHeroData(filteredHeroData))
    

    return (
        <div className="heroCards">
            <SearchBar 
            filteredData={filteredHeroData}
            setFilteredData={filteredHeroProps}
            heroData = {heroData}
            />
            {
                (heroData.length === filteredHeroData.length)
                ? heroData.map((hero, index) => {
                    return <Card name={hero.name} image={hero.image} key={index} heroes={heroes} setHeroes={setHeroes}/>
                })
                : filteredHeroData.map((hero, index) => {
                    return <Card name={hero.name} image={hero.image} key={index} heroes={heroes} setHeroes={setHeroes}/>
                })
            }
        </div>
    );
}