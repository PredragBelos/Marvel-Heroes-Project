import React from 'react';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import { MainSection } from '../Main section/mainSection';
import './home.css';

export const Home = () => {
    return(
        <div className="conatiner-flow homePage">
           <Header/> 
           <MainSection/>
           <Footer/>
        </div>
    );
}