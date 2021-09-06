import React from 'react';
import { TeamUser } from '../Team user/teamUser';
import './myTeam.css';

export const MyTeam = ({heroes}) => {
    return(
        <div className="myTeam">

            <h3>My Team</h3>
           {
               (heroes.length > 0)? heroes.map((item, index) => {
                   return (
                       <TeamUser key={index} hero={item}/>
                   )
               }):""

               
           }
        </div>
    );
}