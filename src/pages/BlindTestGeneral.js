import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import SelectBlindTest from '../components/SelectBlindTest';

//var location = window.location.pathname;
const BlindTestGeneral = () => {

    return (
        <div class="noScroll">
            <Logo/>
            <Navigation/>
            <div className="app-header">

                <SelectBlindTest/>

            </div>
            <div className='post-containers'></div>
        </div>
    );
};

export default BlindTestGeneral;