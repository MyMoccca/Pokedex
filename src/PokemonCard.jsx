import PropTypes from "prop-types";

function PokemonCard(pokemon) {
  return (
    <figure>
      {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>pas de photo</p>)}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );

}
PokemonCard.propTypes = {
  pokemonList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired
}

export default PokemonCard;