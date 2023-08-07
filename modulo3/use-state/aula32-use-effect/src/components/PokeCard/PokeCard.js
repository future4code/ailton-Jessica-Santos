import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PokeCard2 = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 3px solid purple;
color: purple;
background-color: antiquewhite;
font-family: sans-serif;
  text-align: center;

`

export default function PokeCard(props) {

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {

        pegaPokemon(props.pokemon)
    }, [props.pokemon])

    const pegaPokemon = (pokemon) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((response) => {
                setPokemon(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </div>
    );
}



