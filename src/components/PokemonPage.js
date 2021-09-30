import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeList, setPokeList] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => setPokeList(data))
  }, [])
  
  function handleNewPokemon(pokeObj) {
    console.log(pokeObj)
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {"Content-Type": "applicaton/json"},
      body: JSON.stringify(pokeObj)
    })
  }

  const searchList = pokeList.filter(pokemonObj => pokemonObj.name.toLowerCase().includes(searchValue.toLowerCase()))
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPokemon={handleNewPokemon} />
      <br />
      <Search setSearchValue={setSearchValue} />
      <br />
      <PokemonCollection pokeList={searchList} />
    </Container>
  );
}

export default PokemonPage;
