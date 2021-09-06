import React from 'react';
import './teamUser.css';

export const TeamUser = ({hero, setHeroes, heroes}) => {

    const deleteHero = () => {
        let heroArr = heroes.filter(item => {
            return item.name !== hero.name;
        })
        setHeroes(heroArr);
    };

    return(
        <div className="teamUser">
            <div className="userImg" style={{backgroundImage:`url(${hero.image})`}}>
                <i className="fa fa-trash icon" aria-hidden="true" onClick={deleteHero}></i>
            </div>
            <div className="userName">
                <p>{hero.name}</p>
            </div>
        </div>
    );

}