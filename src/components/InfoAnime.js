import axios from "axios";
import React, { useEffect, useState } from "react";
import CardAnime from "./CardAnime";

const WatchList = () => {
    const [url, setURL] = useState("");
    const [data, setData] = useState([]);
    let urlWithSpace



    function upadteUseEffect()
    {
        urlWithSpace = url.replace(' ', '%20');


        console.log(" url :https://kitsu.io/api/edge/anime?filter[text]="+urlWithSpace)
        axios
        .get("https://kitsu.io/api/edge/anime?filter[text]="+urlWithSpace)
        .then((res) => setData(res.data.data));
        console.log(data);
    }

    return (
        <div className="listanime">
            <div className="searchAnime">
                <input type="text" defaultValue={url} onChange={(e) => setURL(e.target.value, upadteUseEffect())}/>
            </div>
            <h1>Anime</h1>
            <div className="anime">
                {data.map((data) => (
                    <CardAnime key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default WatchList;