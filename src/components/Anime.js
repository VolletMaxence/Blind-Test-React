import axios from "axios";
import React, { useEffect, useState } from "react";
import CardOpening from "./CardOpening";

const Anime = () => {
    const [data, setData] = useState([]);
    const [url, setURL] = useState("");

    useEffect(() => {
        axios
        .get("https://api.animethemes.moe/video?filter[basename-like]=%"+url+"%")
        .then((res) => setData(res.data.videos));
    }, [])

    function upadteUseEffect()
    {
        axios
        .get("https://api.animethemes.moe/video?filter[basename-like]=%"+url+"%")
        .then((res) => setData(res.data.videos));
    }

    return (
        
        <div className="anime">
            <div className="searchAnime">
                <input type="text" defaultValue={url} onChange={(e) => setURL(e.target.value, upadteUseEffect())}/>
            </div>
            <h1>Anime</h1>
            <div className="opening">
                {data.map((videos) => (
                    <CardOpening key={videos.basename} videos={videos} />
                ))}
            </div>
        </div>
    );
};

export default Anime;

//https://api.animethemes.moe/audio?sort=random&path=2022/

//random
//https://api.animethemes.moe/audio?filter[path-like]=60%s%&sort=random