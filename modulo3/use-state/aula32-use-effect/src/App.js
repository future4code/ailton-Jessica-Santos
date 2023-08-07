import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import styled from "styled-components";

const PostContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 2px solid purple;
border-radius: 10px;
height: 200px;
width: 400px;
padding: 40px;
color: purple;
background-color: antiquewhite; 
margin-top: 150px;
margin-bottom: 420px;
margin-left: 450px;

`

export default function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {

    const pegarPokemon = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then((response) => {

          setPokeList(response.data.results)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    pegarPokemon()
  }, [pokeName]);

  const pegarIdPersonagem = (event) => {
    setPokeName(event.target.value);
  };

  return (

    <PostContainer >

      <select onChange={pegarIdPersonagem}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </PostContainer>
  )
}


