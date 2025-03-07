import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokedexDetail from "./pages/PokedexDetail";
import { NotFound } from "./pages/NotFound";
import { AppContainer } from "./components/AppContainer";

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex/" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<PokedexDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
