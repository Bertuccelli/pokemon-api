import React, { useState } from 'react'
import DisplayOnLoad from './DisplayOnLoad'
import Pokedex from './Pokedex'
import PokemonForm from './PokemonForm'



const AxiosPokemon = () => {
    const [pokemonName, setPokemonName] = useState("persian")

    const receivePokemonName = newName => {
        setPokemonName(newName);
    }

    return (
        <div>
            <PokemonForm onNewName = {receivePokemonName} />
            <DisplayOnLoad pokemonName={pokemonName} />
            <Pokedex/>
        </div>
    )
}

export default AxiosPokemon