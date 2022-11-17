import React from "react";

const CardOpening = ({data}) => {
    console.log("CardOp"+data.id);
    return (
        <div className="cardopening">            
            <div className="name">
                <h2> {data.attributes.canonicalTitle}</h2>
            </div>
            <div className="abreviationName">
                <h3> {data.attributes.abbreviatedTitles}</h3>
            </div>
            <img width="550" src={data.attributes.posterImage.original} loading="lazy"/>
        </div>
    );
};

export default CardOpening;