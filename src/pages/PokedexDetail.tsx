import { useParams, Link } from "react-router-dom";

const PokedexDetail = () => {
  const { slug } = useParams(); // Captura el nombre del Pokémon desde la URL

  return (
    <div>
      <h1>Detalles de {slug}</h1>
      <Link to="/pokedex">Volver a la Pokédex</Link>
    </div>
  );
};

export default PokedexDetail;
