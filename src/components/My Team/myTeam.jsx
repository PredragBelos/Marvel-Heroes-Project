import React from 'react';
import { TeamUser } from '../Team user/teamUser';
import './myTeam.css';

export const MyTeam = () => {
    return(
        <div className="myTeam">

            <h3>My Team</h3>
           <TeamUser/>
           <TeamUser/>
           <TeamUser/>
           <TeamUser/>
        </div>
    );
}