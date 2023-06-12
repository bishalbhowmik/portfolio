import React from 'react';
import laptop from '../../../image/laptop-2.webp';

const About = () => {
    return (
        <section className="grid gap-3 grid-cols-1 md:grid-cols-2 py-20 max-w-[70%] mx-auto">

            <div>
                <img className='w-[100%] lg:w-3/4 shadow-lg border border-solid rounded-lg' src={laptop} alt='laptop' />
            </div>

            <div>
                <h1 className="text-xl font-bold text-[#5164E8]">About Me</h1>
                <h2 className="text-2xl font-bold leading-[3.5rem] mb-3">A dedicated React Js Developer</h2>
                <p className='w-[100%] lg:w-2/3'>I am an experienced React Js Developer. I have developed many Web applications in educational and industrial fields. I have expertise in React Js, Redux, Tailwind CSS for frontend. I am proficient in Node JS, Express JS, MongoDB, and MySQL for backend & database. I have expertise in implementing authentication and authorization using Firebase. I can develop any kind of web application according to your business requirements. My top priority is to provide excellent work and ongoing support even after the project is finished.</p>
            </div>


        </section>
    );
};

export default About;