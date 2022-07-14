import React, { useState, useEffect } from "react";
import axios from "axios";


const Pokedex = props => {
    const [responseData, setResponseData] = useState([])
    const [fetched, setFetched] =useState(false)

    useEffect(()=> {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1200`)
            .then(response=>{setResponseData(response.data.results)})
    }, [fetched]);


    return (
        <div>
            <div className="box">
                <button className="button" onClick={e => setFetched(true)}>Fetch All Pokémon!</button>
            </div>
            <ul>
            {
                fetched?
                responseData.map((item, i) =>
                    <li key={i}>{item.name}</li>
                    ):
                    <p></p>
                }
            </ul>
        </div>
    )
}

export default Pokedex