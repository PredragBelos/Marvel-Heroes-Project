import React from 'react';
import './card.css';

export const Card = () => {
    return (
        <div className="cardFrame">

            <div className="heroName">
                <p>Some Hero</p>
            </div>

            <div className="image">
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nYUKHA8kkUlIr9DG9woo_y0QtY9m9SGylQ&usqp=CAU" alt="avatar img" /> */}
            </div>

            <div className="buttons">
                <button className="info">Info</button>
                <button className="add">Add</button>
            </div>
            
        </div>
    )
}