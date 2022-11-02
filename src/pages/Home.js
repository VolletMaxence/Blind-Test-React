import React from 'react';
import Anime from '../components/Anime';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <Anime/>
        </div>
    );
};

export default Home;