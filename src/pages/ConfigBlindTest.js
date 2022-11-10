import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import SelectBlindTest from '../components/SelectBlindTest';

import Firebase, {FirebaseContext} from '../components/Firebase';

const ConfigBlindTest = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <SelectBlindTest/>

            <FirebaseContext.Provider value={new Firebase()}>
                <div>
                    fehfzefhzeif
                </div>
            </FirebaseContext.Provider>
        </div>
    );
};

export default ConfigBlindTest;