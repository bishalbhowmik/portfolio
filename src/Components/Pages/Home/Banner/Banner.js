import React from 'react';
import bishal from '../../../../image/bishal.jpg';
import { Camera, GitHub, Instagram, Linkedin, Twitter, Youtube } from 'react-feather';
import html from '../../../../image/html.png';
import css from '../../../../image/css.png';
import js from '../../../../image/JS.png';
import react from '../../../../image/react.png';
import tailwind from '../../../../image/tailwind.png';
import node from '../../../../image/node.png';
import mongodb from '../../../../image/mongodb.png';
import mysql from '../../../../image/mysql.png';
import { Link } from 'react-router-dom';




const Banner = () => {
    return (
        <section className=''>

            <div className="flex items-center justify-center p-10">

                <div className="w-[40%]">
                    <h2 className="text-5xl font-bold leading-[3.5rem] mb-3">Front-End React <br /> Developer</h2>
                    <h3 className='mb-3'>Hi, I'm Bishal Bhowmik. A passionate Front-End React Developer from Dhaka, Bangladesh.</h3>

                    <span className='flex gap-4 mb-20'>

                        <Link to="https://www.linkedin.com/in/bishal-bhowmik/"> <Linkedin /></Link>
                        <Link to="https://github.com/bishalbhowmik"> <GitHub /></Link>

                    </span>

                    <div className='flex gap-3 md:gap-8 w-5 lg:w-[2rem]'>
                        
                        <img src={html} alt="html" />
                        <img src={css} alt="css" />
                        <img src={js} alt="js" />
                        <img src={react} alt="react" />
                        <img src={tailwind} alt="tailwind" />
                        <img src={node} alt="node" />
                        <img className='' src={mongodb} alt="mongodb" />
                        <img src={mysql} alt="mysql" />
                    </div>
                </div>

                {/* <div className='w-[50%]'>
                    <img className='' src={bishal} alt="Bishal" />
                </div> */}


            </div>




        </section>

    );
};

export default Banner;