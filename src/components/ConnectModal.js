import React, { useState } from "react";
import Login from "./Login";
import SelectBlindTest from "./SelectBlindTest"

const ConnectModal = () => {
    const [connecter, setConnecter] = useState(true);


    return (
        <div>
            {connecter ? <Login/> : <SelectBlindTest/>};
        </div>
    )
}

export default ConnectModal;