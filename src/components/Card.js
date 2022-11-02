import React from "react";

const Card = ({videos}) => {
    return (
        <div className="card">            
            <div className="infos">
                <h2> {videos.basename}</h2>
            </div>
            <video width="550" controls preload="none">
                <source src={videos.link} type="video/webm"/>
            </video>
        </div>
    );
};

export default Card;