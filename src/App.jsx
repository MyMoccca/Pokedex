import PokemonCard from "./PokemonCard"

import { useState } from "react";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  //return (

  // <div>
  //   <PokemonCard pokemon={pokemonList[0]} />
  // </div>

  //);

  const [pokemon, setIndexPokemon] = useState(0);

  const handleClickNext = () => {
    setIndexPokemon(pokemon + 1)
  }
  const handleClickBack = () => {
    setIndexPokemon(pokemon - 1)
  }
  return (
    <div>
      <PokemonCard name={pokemonList[pokemon].name} imgSrc={pokemonList[pokemon].imgSrc} />
      {(pokemon > 0) ? (<button onClick={handleClickBack}>derriere</button>) : (<button >derriere</button>)}
      {(pokemon < pokemonList.length - 1) ? (<button onClick={handleClickNext}>suivant</button>) : (<button >suivant</button>)}
    </div>
  )

}

export default App
