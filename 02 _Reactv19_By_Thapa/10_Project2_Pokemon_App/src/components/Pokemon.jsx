import { useEffect } from "react";
import { PokemonCard } from "./PokemonCard";

export const Pokemon = () => {
  //* API
  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  //todo: fetchPokemon asynchronous function to fetch Data from API
  const fetchPokemon = async () => {
    try {
      //* fetch the initial list of Pokemon from the API
      const res = await fetch(API);
      const data = await res.json(); //? initial pokemon data

      //* Map through each Pokemon in List to fetch detailed data for each one
      const detailedPokemonData = data.results.map(async (currPokemon) => {
        //* Fetch  detailed data for each Pokemon using it's individual URl
        const res = await fetch(currPokemon.url);
        const data = await res.json(); //? returned the detailed data for the current pokemon
        return data;
      });

      //? Use Promise.all to wait for all the detailed pokemon data to be fetched
      const detailedResponses = await Promise.all(detailedPokemonData);
      console.log(detailedResponses);
    } catch (error) {
      //! Catch and log any error that occur during the fetch process
      console.error("Error:", error);
    }
  };

  //todo: useEffect is used to call fetchPokemon once when the component mounts
  useEffect(() => {
    fetchPokemon(); //? Call the fetch function to get Pokemon data when the component loads
  }, []); //? Empty dependency array ensures this only runs once on mount

  return (
    <>
      <section className="container">
        <header>
          <h1> Lets Catch Pokémon</h1>
        </header>
        <div className="pokemon-search">
          <input type="text" placeholder="search Pokemon" />
        </div>
        <div>
          <ul className="cards">
            <PokemonCard />
          </ul>
        </div>
      </section>
    </>
  );
};
