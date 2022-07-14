import React, { useState, useEffect } from 'react'
import axios from 'axios'


const DisplayOnLoad = (props) => {
    const {pokemonName} = props
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
    axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(
            res => {
                console.log(res.data)
                setPokemon(res.data)})
        .catch(err => console.log(err))
    }, [pokemonName])


    return (
        <div className='Pokemon'>
        {
            pokemon ?
            <div>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>:
            <h3>....Loading....</h3>
        }
        </div>
    )
}

export default DisplayOnLoad