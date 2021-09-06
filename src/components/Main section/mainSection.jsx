import React, { useEffect, useState } from 'react';
import { HeroCards } from '../Hero Cards/heroCards';
import { MyTeam } from '../My Team/myTeam';
import './mainSection.css';

export const MainSection = () => {

    const [heroCards, setHeroCards] = useState("");
    const [myTeam, setMyTeam] = useState("");
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        setHeroCards(document.querySelector(".heroCards"));
        setMyTeam(document.querySelector(".myTeam"));

    }, [])

    const setHeroesProps = heroes => setHeroes(heroes);

    const myTeamBtnClick = () => {
        if (heroCards.style.display === "none") {
            heroCards.style.display = "block";
            myTeam.style.display = "none";
        }
        else {
            heroCards.style.display = "none";
            myTeam.style.display = "block";
        }
    }

    return (
        <div className="mainSection">
            <div className="heroTeamBtn">
                <i className="fas fa-mask teamBtn" onClick={myTeamBtnClick}></i>
                <p>My Team</p>
            </div>
            <HeroCards 
            heroes={heroes}
            setHeroes={setHeroesProps}
            />
            <MyTeam heroes={heroes} setHeroes={setHeroesProps}/>
        </div>
    );
}