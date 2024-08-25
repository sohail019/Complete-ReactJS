import { useState, useEffect } from "react";
import "./Pokemon.css";

export const Pokemon = () => {
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true)
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon = () => {
    fetch(API)
        .then((res) => res.json())
        .then((data) => {
            setPokemon(data);
            setLoading(false)
        })
        .catch((err) => {
            console.error("Error: ", err);
            setLoading(false)
        })
  };

  useEffect(() => {
    fetchPokemon()
  }, []);

  if(loading) {
    return <h1>Loading...</h1>
  }

//   if(pokemon) {
    return (
      <section className="container">
        <header>
          <h1> Lets Catch Pokémon</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                className="pokemon-image"
                src={pokemon.sprites.other.home.front_default}
              />
            </figure>
            <h1>Name: {pokemon.name}</h1>
            <div className="grid-three-cols">
              <p className="pokemon-info">
                Height: <span>{pokemon.height} </span>
              </p>
              <p className="pokemon-info">
                Weight: <span>{pokemon.weight}</span>
              </p>
              <p className="pokemon-info">
                speed: <span></span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    );
};
