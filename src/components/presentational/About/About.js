import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <h2 className='about-header'>About</h2>
            <hr />
            <div>
                {/* <img src={Image1} alt="champion shirt picture" />
                <img src={Image2} alt="hackathon champion picture" />
                <img src={Image3} alt="child picture" /> */}
            </div>
            <div>
                <p>
                I am a nerd who is enthusiastic and curios about the technologies. 
                Someone who is willing to learn new things on the fly quickly and efficiently. 
                I have dabbled in, not created apps just used programming languages is C#, php, swift. 
                But I primarily specialize in react, node, express, postgreSQL, and MongoDB and more regarding javascript.
                </p>
            </div>
        </div>
    );
};

export default About;