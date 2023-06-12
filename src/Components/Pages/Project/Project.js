import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../../image/project/project-1.png';
import project2 from '../../../image/project/project-2.png';
import { Camera, GitHub, Instagram, Linkedin, Twitter, Youtube, ExternalLink } from 'react-feather';

const Project = () => {
    return (

        <section className='max-w-[70%] mx-auto'>
            <h1 className="text-xl font-bold text-[#5164E8]">Portfolio</h1>
            <h1 className="text-2xl font-bold">Each Project Has a unique piece of development</h1>

            <div className='grid gap-x-7 gap-y-20 grid-cols-1 md:grid-cols-2 py-20'>

                <div className='w-[100%] lg:w-3/4 shadow-lg border border-solid rounded-lg'>
                    <img src={project1} alt="project1" />
                </div>

                <div className='text-center md:2/3'>
                    <h1 className='text-xl font-bold'>E-commerce Website</h1>
                    <p className='text-sm'>Implement JavaScript Core Concepts to Build a Simple and Interactive Shopping Cart. Customer Will Be Able to Change the Product Quantity Dynamically. Also, Will Be Able to Calculate the Price, Tax, Discount Amount for The Added Products to Shopping Cart</p>
                    <span className='flex items-center justify-center text-sm font-semibold my-3'>
                        <p className='mr-3'>React</p>
                        <p>Tailwind</p>
                    </span>

                    <span className='flex items-center justify-center font-lg font-semibold'>

                        <Link className='mr-7 flex items-center tracking-widest' to="https://github.com/bishalbhowmik/shopping-cart">Code <GitHub /></Link>

                        <Link className='flex items-center tracking-widest' to="https://dazzling-peony-0d6139.netlify.app/">Live Demo <ExternalLink /></Link>

                    </span>
                </div>

                <div className='text-center md:2/3'>
                    <h1 className='text-xl font-bold'>Car Servicing</h1>
                    <p className='text-sm'>On the Client Side, React, React Router, Firebase Authentication System, CRUD Operations, Tailwind, Etc. On The Server Side, I used Node, Express, Mongo dB, Jwt, Dotenv Etc. </p>
                    <span className='flex items-center justify-center text-sm font-semibold my-3'>
                        <p >React</p>
                        <p className='mx-3'>Tailwind</p>
                        <p>Node</p>
                        <p className='mx-3'>Mongo DB</p>
                    </span>

                    <span className='flex items-center justify-center font-lg font-semibold'>

                        <Link className='mr-5 flex items-center tracking-widest' to="https://github.com/bishalbhowmik/shopping-cart">Code <GitHub /></Link>

                        <Link className='flex items-center tracking-widest' to="https://dazzling-peony-0d6139.netlify.app/">Live Demo <ExternalLink /></Link>

                    </span>
                </div>

                <div className='w-[100%] lg:w-3/4 shadow-lg border border-solid rounded-lg'>
                    <img src={project2} alt="project2" />
                </div>



            </div>
        </section>


    );
};

export default Project;