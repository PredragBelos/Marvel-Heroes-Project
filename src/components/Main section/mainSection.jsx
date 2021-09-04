import React from 'react';
import { HeroCards } from '../Hero Cards/heroCards';
import { MyTeam } from '../My Team/myTeam';
import './mainSection.css';

export const MainSection = () => {
    return(
        <div className="mainSection">
            <HeroCards/>
            <MyTeam/>
        </div>
    );
}