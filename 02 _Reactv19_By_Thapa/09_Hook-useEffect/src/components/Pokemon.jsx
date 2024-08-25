import { useState, useEffect } from "react";
import "./Pokemon.css";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  //   const fetchPokemon = () => {
  //     fetch(API)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPokemon(data);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.error("Error: ", err);
  //         setError(err)
  //         setLoading(false);
  //       });
  //   };

  //* new approach is try/catch
  const fetchPokemon = async () => {
    try {
        const res = await fetch(API)
        const data = await res.json()
        setPokemon(data)
        setLoading(false)
    } catch (error) {
      console.error("Error: ", err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
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
              speed: <span>{pokemon.stats[5].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
