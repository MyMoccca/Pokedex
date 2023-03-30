import PropTypes from "prop-types";
import { useState } from "react";
import PokemonCard from "./PokemonCard";
import './NavBar.css'


function NavBar({ pokemonIndex, setIndexPokemon, pokemonList }) {
  const showItem = (pokemonIndex) => {
    setIndexPokemon(pokemonIndex);
  };

  return (<div>
    <ul>
      {pokemonList.map((pokemon, index) => (
        <li key={pokemon.name}>

          <button onClick={() => showItem(index)}>{pokemon.name}</button>
        </li>
      ))}
    </ul>

  </div>)
}

export default NavBar


// function NavBar({ pokemonIndex, setIndexPokemon, pokemonList }) {

//   const handleClickNext = () => {
//     setIndexPokemon(pokemonIndex + 1)
//   }
//   const handleClickBack = () => {
//     setIndexPokemon(pokemonIndex - 1)
//   }
//   return (<div>
//     {(pokemonIndex > 0) ? (<button onClick={handleClickBack}>precedent</button>) : (<button >precedent</button>)}
//     {(pokemonIndex < pokemonList.length - 1) ? (<button onClick={handleClickNext}>suivant</button>) : (<button >suivant</button>)}
//   </div>)

// }

//{pokemonIndex.imgSrc}
//{pokemonIndex.name}