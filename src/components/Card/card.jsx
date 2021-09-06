import React from 'react';
import './card.css';

export const Card = ({ name, image, heroes, setHeroes }) => {

    const getHeroData = () => {

        let heroObj = { name: name, image: image };
        let arr = heroes;
        let counter = 0;

        if (heroes.length === 0) {
            arr = heroes.concat(heroObj);
            setHeroes(arr);
        }
        else {
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                if (element.name === heroObj.name) {
                    counter++;
                }
            }
            if (counter === 0) {
                arr = heroes.concat(heroObj);
                setHeroes(arr);
            }
        }
    }

    return (
        <div className="cardFrame">
            <div className="card">

                <div className="heroName">
                    <p>{name}</p>
                </div>

                <div className="image" style={{ backgroundImage: `url(${image})` }}>

                </div>

                <div className="buttons">
                    <button className="info">Info</button>
                    <button className="add" onClick={getHeroData}>Add</button>
                </div>

            </div>
        </div>
    )
}