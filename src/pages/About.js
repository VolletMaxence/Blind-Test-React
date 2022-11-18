import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <h1>A Propos</h1>
            <br/>
            <img className='about' src="./AboutMe.jpg" alt="Moi"/>
        </div>
    );
};

export default About;