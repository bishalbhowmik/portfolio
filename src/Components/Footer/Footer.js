import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Camera, GitHub, Instagram, Linkedin, Twitter, Youtube } from 'react-feather';
import './Footer.css'
import { Link } from 'react-router-dom';




const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black text-white">
            <div>
                <h2 className='text-xl font-bold'>BISHAL BHOWMIK</h2>
                <p className='text-sm'>A Frontend focused Web Developer <br/> building the Frontend of Websites and Web Applications <br/> that leads to the success of the overall product</p>
                
            </div>
            <div>
                <div >
                    <span id="icons" className="grid grid-flow-col gap-1">
                        <p><Camera /></p>
                        <p> <Linkedin /></p>
                        <p> <GitHub /></p>
                        <p> <Twitter /></p>
                        <p><Youtube /></p>
                        <p><Instagram /></p>
                    </span>
                </div>
            </div>

            <p>Copyright © 2023 - All right reserved By BISHAL BHOWMIK</p> 
        </footer>
    );
};

export default Footer;