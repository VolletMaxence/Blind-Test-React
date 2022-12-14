import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import SelectBlindTest from '../components/SelectBlindTest';
//import { onAuthStateChanged, signOut } from 'firebase/auth';
//import { auth } from '../utilis/firebase.config';
import '../assets/style/scroll.scss';

const BlindTestGeneral = () => {
    return (
        <div>
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