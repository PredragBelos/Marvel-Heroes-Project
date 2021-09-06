import React from 'react';
import './teamUser.css';

export const TeamUser = ({hero}) => {
    return(
        <div className="teamUser">
            <div className="userImg" style={{backgroundImage:`url(${hero.image})`}}>
                <i className="fa fa-trash icon" aria-hidden="true"></i>
            </div>
            <div className="userName">
                <p>{hero.name}</p>
            </div>
        </div>
    );

}