export const PokemonCard = ({ pokemonData }) => {
  //todo: Destructuring properties from the pokemonData object
  const { name, height, weight, base_experience } = pokemonData;
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={name}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokemonData.types.map((currType) => currType.type.name).join(" | ")}
        </p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span> Height:</span> {height}
        </p>
        <p className="pokemon-info">
          <span> Weight:</span> {weight}
        </p>
        <p className="pokemon-info">
          <span> speed:</span> 101
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{pokemonData.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {pokemonData.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span> Abilities: </span>
        </div>
      </div>
    </li>
  );
};
