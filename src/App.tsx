import { Pokedex } from "./lib/Pokedex/Pokedex.tsx";
import { pokemon } from "./lib/pokemon.ts";

function App() {
  return <Pokedex pokemon={pokemon} />;
}

export default App
