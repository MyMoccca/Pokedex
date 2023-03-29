import PropTypes from "prop-types";
import { useState } from "react";
import PokemonCard from "./PokemonCard";


function NavBar({ pokemonIndex, setIndexPokemon, pokemonList }) {

  const handleClickNext = () => {
    setIndexPokemon(pokemonIndex + 1)
  }
  const handleClickBack = () => {
    setIndexPokemon(pokemonIndex - 1)
  }
  return (<div>
    {(pokemonIndex > 0) ? (<button onClick={handleClickBack}>precedent</button>) : (<button >precedent</button>)}
    {(pokemonIndex < pokemonList.length - 1) ? (<button onClick={handleClickNext}>suivant</button>) : (<button >suivant</button>)}
  </div>)

}

export default NavBar