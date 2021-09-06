import React from 'react';
import './card.css';

export const Card = ({ name, image }) => {
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
                    <button className="add">Add</button>
                </div>

            </div>
        </div>
    )
}