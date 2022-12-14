import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const BlindTestList = () => {
    return (
        <div>
        <Logo/>
        <Navigation/>
      
    </div>
    );
};

export default BlindTestList;

// database avec redux : https://nerdgeschoss.github.io/redux-database/
// redux thunk : https://www.youtube.com/watch?v=lmyKHYmgUYc
//  -> Formulaire pour ajouter opening -> Lien Youtube / Titre / Pseudo -> Envoyer ca via base
//  -> Récuperer Toutes les données -> Lancer BlindTest avec X opening