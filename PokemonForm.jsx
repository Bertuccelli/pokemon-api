import React, { useState } from 'react'


const PokemonForm = (props) => {
    const [pokemonName, setPokemonName] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if(pokemonName.length ==0){
            return;
        }
        props.onNewName(pokemonName)
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='Navbar'>
                <input placeholder='Type a Name Here...' type="text" name="pokemonName" value={pokemonName} onChange={e => setPokemonName(e.target.value)} />
            </div>
            <div className='box'>
                <button className='button' type="submit">Search Pokémon!</button>
            </div>
        </form>
    )
}

export default PokemonForm