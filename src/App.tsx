import { useState } from 'react';
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc: "",
  },
];

function App() {
  
  const [pokemonIndex, setPokemonIndex] = useState(0);

  // Fonction pour afficher le Pokémon suivant
  const handleNextPokemon = () => {
    setPokemonIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);
  };

  // Fonction pour afficher le Pokémon précédent
  const handlePreviousPokemon = () => {
    setPokemonIndex((prevIndex) =>
      prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      {/* Bouton Précédent affiché uniquement si pokemonIndex > 0 */}
      {pokemonIndex > 0 && (
        <button onClick={handlePreviousPokemon}>Précédent</button>
      )}

      {/* Bouton Suivant affiché uniquement si pokemonIndex < pokemonList.length - 1 */}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleNextPokemon}>Suivant</button>
      )}
    </>
  );
}

export default App;
