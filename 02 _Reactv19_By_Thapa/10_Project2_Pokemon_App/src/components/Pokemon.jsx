import { useState, useEffect } from "react";
import { PokemonCard } from "./PokemonCard";

export const Pokemon = () => {
  //? state to store the detailed pokemon data
  const [pokemon, setPokemon] = useState([]);

  //? state to handle the loading status
  const [loading, setLoading] = useState(true);

  //? state to handle errors if the fetch process fails
  const [error, setError] = useState("");

  //? state to search pokemon
  const [search, setSearch] = useState("");

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
      setPokemon(detailedResponses); //? store the detailed Pokemon data in state
      setLoading(false); //? Set loading status to false once data is fetched
    } catch (error) {
      //! Catch and log any error that occur during the fetch process
      console.error("Error:", error);
      setLoading(false); //! Set loading to false if an error occurs
      setError(error); //! Set the error state to display an error message
    }
  };

  //todo: useEffect is used to call fetchPokemon once when the component mounts
  useEffect(() => {
    fetchPokemon(); //? Call the fetch function to get Pokemon data when the component loads
  }, []); //? Empty dependency array ensures this only runs once on mount

  //todo: If the loading state is true, display a loading message
  if (loading) {
    return (
      <header>
        <h1> Pokémon is Loading.....</h1>
      </header>
    );
  }

  //todo: If there is an error, display the error message
  if (error) {
    return <h1>{error.message}</h1>;
  }

  //  todo: Search functionality
  const searchPokemon = pokemon.filter((currPokemon) => currPokemon.name.toLowerCase()
  .includes(search.toLowerCase())
  )

  //todo: Render the fetched Pokémon data
  return (
    <>
      <section className="container">
        <header>
          <h1> Lets Catch Pokémon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="search Pokémon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {/* {pokemon.map((currPokemon) => {
              return <li key={currPokemon.id}>{currPokemon.id}</li>;
            })} */}
            {searchPokemon.map((currPokemon) => {
              return (
                <PokemonCard key={currPokemon.id} pokemonData={currPokemon} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
