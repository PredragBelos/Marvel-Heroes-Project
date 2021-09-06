import React from 'react';
import { TeamUser } from '../Team user/teamUser';
import './myTeam.css';

export const MyTeam = ({heroes, setHeroes}) => {
    return(
        <div className="myTeam">

            <h3>My Team</h3>
           {
               (heroes.length > 0)? heroes.map((item, index) => {
                   return (
                       <TeamUser key={index} heroes={heroes} hero={item} setHeroes={setHeroes}/>
                   )
               }):""

               
           }
        </div>
    );
}