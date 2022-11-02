import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Anime = () => {
    const [data, setData] = useState([]);
    const [url, setURL] = useState("");

    useEffect(() => { 
        console.log(" url : https://api.animethemes.moe/video?filter[basename-like]=%"+url+"%")
        axios
        .get("https://api.animethemes.moe/video?filter[basename-like]=%"+url+"%")
        .then((res) => setData(res.data.videos));
    }, [])

    function upadteUseEffect()
    {
        console.log(" url : https://api.animethemes.moe/video?filter[basename-like]=%"+url+"%")
        axios
        .get("https://api.animethemes.moe/video?filter[basename-like]=%"+url+"%")
        .then((res) => setData(res.data.videos));
    }

    return (
        
        <div className="anime">
            <div className="searchName">
                <input type="text" defaultValue={url} onChange={(e) => setURL(e.target.value, upadteUseEffect())}/>
            </div>
            <h1>Anime</h1>
            <div className="opening">
                {data.map((videos) => (
                    <Card key={videos.basename} videos={videos} />
                ))}
            </div>
        </div>
    );
};

export default Anime;

//https://api.animethemes.moe/audio?sort=random&path=2022/

//random
//https://api.animethemes.moe/audio?filter[path-like]=60%s%&sort=random