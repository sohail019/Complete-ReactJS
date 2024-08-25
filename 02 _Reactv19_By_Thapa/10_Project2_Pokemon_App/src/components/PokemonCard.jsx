export const PokemonCard = () => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src=""
          alt=""
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">Pikachu</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          Type
        </p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span> Height:</span> 98
        </p>
        <p className="pokemon-info">
          <span> Weight:</span> 56
        </p>
        <p className="pokemon-info">
          <span> speed:</span> 101
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>45</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>45</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            Ability
          </p>
          <span> Abilities: </span>
        </div>
      </div>
    </li>
  );
};
