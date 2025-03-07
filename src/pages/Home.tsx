import { Link } from "react-router-dom";
import Logo from "./../assets/img/pokemon-logo.png"
import Pokemons from "./../assets/img/pokemons.png"
const Home = () => {
  
  return (
    <section className='page-container'>
      <div className="page-title">
        Welcone to <span>Pokedex</span>
      </div>
      
      <div className="featured-image">
        <img width={100} src={Logo} alt='pokemon logo' />
        <img width={300} src={Pokemons} alt="pokemon logo" />
      </div>

      <Link className='link-button' to="/pokedex">Go to Pokédex</Link>
      
      
    </section>
  );
};

export default Home;
