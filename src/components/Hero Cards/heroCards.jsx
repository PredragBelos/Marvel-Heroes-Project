import React, { useEffect, useState } from 'react';
import { caracterURL } from '../../data/publicData';
import { getHeroData } from '../../services/createHeroesList';
import { Card } from '../Card/card';
import './heroCards.css';

export const HeroCards = () => {

    const [heroData, setHeroData] = useState([]);

    useEffect(() => {
        getHeroData(caracterURL).then(result => {
            setHeroData(result);
        })
    }, [])

    return (
        <div className="heroCards">
            {
                heroData.map((hero, index) => {
                    return <Card name={hero.name} image={hero.image} key={index} />
                })
            }
        </div>
    );
}