import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    imgSrc: "", 
  },
];

function App() {
  return (
    <>
         <PokemonCard pokemon={pokemonList[0]} /> {/* Premier Pokémon */}
         <PokemonCard pokemon={pokemonList[1]} /> {/* Deuxième Pokémon */}
    </>
  );
}

export default App;
