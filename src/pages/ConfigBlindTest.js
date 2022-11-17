import React, { useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import SelectBlindTest from '../components/SelectBlindTest';
import ConnectModal from '../components/ConnectModal';
//import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utilis/firebase.config';
import BlindTestGame from '../components/BlindTestGame';

const ConfigBlindTest = () => {
    const [user, setUser] = useState(null);

    /*
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    */

    /*
    const handleLogOut = async () => {
        await signOut(auth);
    }
    */

    /*
    window.addEventListener("beforeunload", (ev) => 
    {  
        //A retirer pour LogOut automatiquement lorsque l'on quitte la page
        handleLogOut();
    });
    */
   
    /*
    { user ? (
        <SelectBlindTest/>
    ) : (
        <ConnectModal/>
    )}
    */
    return (
        <div>
            <Logo/>
            <Navigation/>
            <div className="app-header">
                {user && (
                    <div className="user-infos">
                        <h4>{user?.displayName}</h4>
                    </div>
                )}

                <SelectBlindTest/>

            </div>
            <div className='post-containers'></div>
        </div>
    );
};

export default ConfigBlindTest;