import { Link } from "react-router-dom";

const Pokedex = () => {
  const pokemons = ["pikachu", "charmander", "bulbasaur"];

  return (
    <div>
      <h1>Pokédex</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon}>
            <Link to={`/pokedex/${pokemon}`}>{pokemon}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
