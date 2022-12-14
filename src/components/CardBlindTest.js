import React from "react";

/*
//Set timer de 30 secondes
function startTimer() {
    console.log("startTimer");
    
    setTimeout(() => {
        console.log("30 secondes sont passer")
         }, 30000)
}
*/


const CardOpening = ({videos}) => {
    return (
        <div className="card">            
            <div className="infos">
                <h2> {videos.filename}</h2>
            </div>
            <video width="500" preload autoPlay volume="0.3" /*onPlay={startTimer}*/>
                <source src={videos.link} type="video/webm"/>
            </video>
        </div>
    );
};

export default CardOpening;