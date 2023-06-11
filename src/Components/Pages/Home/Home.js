import React from 'react';
import bishal from '../../../image/final.jpg';
import './Home.css';
import ContactUs from './ContactUs/ContactUs';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <section className="about-area">
                <div className="about-top">
                    <h2>ABOUT ME</h2>
                    <hr />
                    <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                </div>
                <div className="about-bottom">
                    <div className="about-left">
                        <h3>Get to know me!</h3>
                        <> <p>I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.</p>
                            <p>I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/bishal-bhowmik/">Linkedin</a> where I post useful content related to Web Development and Programming</p>
                            <p>I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.</p></>
                        <button className='about-btn'>contact</button>
                    </div>
                    <div className="about-right">
                        <h2>my skills</h2>
                        <p className='skill-1'>
                            <small className='skill'>HTML</small>
                            <small className='skill'>CSS</small>
                            <small className='skill'>JavaScript</small>
                            <small className='skill'>React</small>
                        </p>
                        <p className='skill-2'>
                            <small>SASS</small>
                            <small>GIT</small>
                            <small>Github</small>

                        </p>
                        <p className='skill-3'>
                            <small>Responsive Design</small>
                            <small>SEO</small>
                            <small>Terminal</small>

                        </p>
                        <p className='skill-4'>
                            <small>Express Basics</small>
                            <small>
                                SQL Basics</small>

                        </p>

                    </div>
                </div>

            </section>
                <ContactUs></ContactUs>
        </div>
    );
};

export default Home;