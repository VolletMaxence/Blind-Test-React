import axios from "axios";
import React, { useState } from "react";
import CardBlindTest from "./CardBlindTest";

const BlindTestGame = ({url}) => {
    const [data, setData] = useState([]);
    const [dataName, setDataName] = useState([]);
    const [canonicalTitle, setCanonicalTitle] = useState([]);
    const [titles_en_jp, setTitles_en_jp] = useState([]);
    const [titles_ja_jp, setTitles_ja_jp] = useState([]);
    const [titles_en, setTitles_en] = useState([]);
    const [nomAnimeEspace, setNomAnimeEspace] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [showResults, setShowResults] = useState(false)

    const [input, setInput] = useState("");
    /*
    useEffect(() => { 
        console.log(" url useEffect : "+url)
        axios
        .get(url)
        .then((res) => setData(res.data.videos), console.log(data));

    }, [])
    */

    function newGame()
    {
        setShowResults(true);
        setDisabled(false);

        axios
        .get(url)
        .then((res) => {
            setData(res.data.videos);
        })
    }

    function checkReponse(e)
    {
        setInput(e)
        //vérifier la réponse de l'utilisateur avec ET le nom jap ET le nom anglais (ET le nom fr ??????)
        //Rentre pas dans la fonction
        e = e.toLowerCase()
        if(e === canonicalTitle || e === titles_en || e === titles_en_jp || e === titles_ja_jp || e === nomAnimeEspace.toLowerCase())
        {
            console.log("Bonne Réponse")
            lancementNouvelleGame();  
        }
        //console.log(canonicalTitle+" / "+titles_en+" / "+titles_en_jp+" / "+titles_ja_jp+" / "+ nomAnimeEspace.toLowerCase())

        /*
        Si trouve dans temps impartie, +1 score
        Lorsque trouvé / temps écoulé, on montre la vidéo avec le nom
        */
    }

    function lancementNouvelleGame() {
        setShowResults(false);
        setDisabled(true);

        setInput("");
        setCanonicalTitle("");
        setTitles_en_jp("");
        setTitles_ja_jp("")
        setTitles_en();

        clearTimeout();

        setTimeout(() => 
        {
            newGame();
            createUsableName();
        }, 10000)
    }
    //Trouve et stock les différents noms possibles pour la réponse
    function checkTitle(nomAnimeEspace) {

        axios
        .get("https://kitsu.io/api/edge/anime?filter[text]="+nomAnimeEspace)
        .then((resp) => setDataName(resp.data.data[0]))
        //Ces 3 elements sont toujours présents
        setCanonicalTitle(dataName.attributes.canonicalTitle.toLowerCase());
        setTitles_en_jp(dataName.attributes.titles.en_jp.toLowerCase());
        setTitles_ja_jp(dataName.attributes.titles.ja_jp.toLowerCase())
        if (dataName.attributes.titles.en)
        {
            setTitles_en(dataName.attributes.titles.en.toLowerCase());
        }
        //console.log(canonicalTitle+" / "+titles_en+" / "+titles_en_jp+" / "+titles_ja_jp+" / "+ nomAnimeEspace)
    }

    //Renvoie un nom de série utilisable pour l'api kitsu.io
    function createUsableName() {
        //Nom sans S*number*, -OP, -ED
        let name = data.map((videos) => (videos.filename)) + '';
        let nomAnime
        nomAnime = name.split('-');

        if (name.match(/S\d/) != null) 
        {
            nomAnime = nomAnime + '';
            nomAnime = nomAnime.match(/[^S\d]+/)
        }
        nomAnime = nomAnime[0] + '';

        //Séparrer lorsque l'animé à plusieurs mot dans son titre

        let nomAnimeTab = nomAnime.match(/[a-zA-Z][^A-Z]*/gm);
        let nomAnimeEspace = nomAnimeTab[0];

        if (nomAnimeTab.length !== 1) 
        {
            var i = 1;
            while (i < nomAnimeTab.length)
            {
                nomAnimeEspace = nomAnimeEspace+" "+nomAnimeTab[i];
                i++;
            }
        }
        setNomAnimeEspace(nomAnimeEspace);

        while(nomAnimeEspace.match(/\s/))
        {
            nomAnimeEspace = nomAnimeEspace.replace(' ', '%20');
        }

        checkTitle(nomAnimeEspace);
    }

    return (
        <div>
            <div className='select-container'>
                <button onClick={newGame}>
                    Lancer la Game
                </button>
            </div>
            <div className="imgCard">
                {showResults ?
                <img src="./Searching.jpg" alt="Cache de la vidéo" width="600"/>
                : null }
            </div>
            <div className="opening">
                {data.map((videos) => (
                    <CardBlindTest key={videos.filename} videos={videos} />
                ))}
            </div>
            <div id="searchName" className="searchName">
                <input type="text" value={input} disabled={disabled} onChange={(e) => {createUsableName(); checkReponse(e.target.value)}} />
                <input type="button" value="! SKIP !" disabled={disabled} onClick={(e) => {lancementNouvelleGame()}}/>
            </div>
        </div>
    );
};

export default BlindTestGame;

//Wait 3 sec before user can be able to use the input