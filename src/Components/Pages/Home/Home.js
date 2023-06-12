import React from 'react';
import bishal from '../../../image/final.jpg';
import './Home.css';
import ContactUs from './ContactUs/ContactUs';
import Banner from './Banner/Banner';
import About from '../About/About';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Project></Project>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;