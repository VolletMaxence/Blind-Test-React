import React from 'react';
import BlindTestGame from '../components/BlindTestGame';
import Firebase, {FirebaseContext} from '../components/Firebase';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const BlindTest = () => {
    return (
        <div>
        <Logo/>
        <Navigation/>

        <FirebaseContext.Provider value={new Firebase()}>
        <div>
          fehfzefhzeif
        </div>
      </FirebaseContext.Provider>
      
    </div>
    );
};

export default BlindTest;