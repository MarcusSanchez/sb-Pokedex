import { Pokemon } from "../pokemon.ts";

type PokecardProps = { pokemon: Pokemon; };

export function Pokecard({pokemon}: PokecardProps) {
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
      <p>Type: {pokemon.type}</p>
      <p>EXP: {pokemon.base_experience}</p>
    </div>
  );
}