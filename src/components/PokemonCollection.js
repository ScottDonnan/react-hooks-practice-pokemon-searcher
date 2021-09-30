import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeList}) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokeList.map(pokemonObj => <PokemonCard key={pokemonObj.id} {...pokemonObj} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
