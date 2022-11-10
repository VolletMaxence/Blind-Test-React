import React, { useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import Firebase, {FirebaseContext} from '../components/Firebase';

const BlindTestGame = () => {
  /*  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    function initGame(){
      const allPlayerRef = firebase.database().ref(`players`);

      allPlayerRef.on("value", (snapshot) => {
        //Se lance quand un changement se fait
      })
      allPlayerRef.on("child_added", (snapshot) => {
        //Se fait quand une nouveau noeud dans la base se cré
        const addedPlayer = snapshot.val();
        const characterElement = document.createElement("div");
        characterElement.classList.add("Charecter", "grid-cell");
        if (addedPlayer.id === playerID)
        {
          //Faire quelque chose pour se démarquer 
          characterElement.classList.add("you");
        }
      })
      playerElements[addedPlayer.id] = characterElement;
    }
*/

    return (
        
      <FirebaseContext.Provider value={new Firebase()}>
        <div>
          fehfzefhzeif
        </div>
      </FirebaseContext.Provider>
    );
};

export default BlindTestGame;