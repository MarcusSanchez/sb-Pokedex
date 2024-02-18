import { Pokemon } from "../pokemon.ts";
import { Pokecard } from "../Pokecard/Pokecard.tsx";

type PokedexProps = { pokemon: Pokemon[]; };

export function Pokedex({pokemon}: PokedexProps) {
  return (
    <>
      <h1>Pokedex</h1>
      <div>
        {pokemon.map((p) => <>
          <Pokecard key={p.id} pokemon={p} />
          <hr />
        </>)}
      </div>
    </>
  );
}