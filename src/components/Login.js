import React, { useRef, useState } from "react";
import { auth } from "../utilis/firebase.config";

const Login = () => {
    const registerPseudo = useRef();
    const [displayName, setDisplayName] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        try {
            auth.signInAnonymously().catch(function(error) {
                console.log(error.message)
              }).then(async (userAuth) => {
                await userAuth.user.updateProfile({
                    displayName
                })
              })
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="signup-container">
            <div className="signup">
                <h3>Entrez votre nom d'utilisateur</h3>
                <form onSubmit={e => handleRegister(e)}>
                    <input type="text" placeholder="Pseudo" required onChange={(e) => setDisplayName(e.target.value)}/>
                    <input type="submit" value="Valider votre pseudo"/>
                </form>
            </div>
        </div>
    )
}

export default Login;