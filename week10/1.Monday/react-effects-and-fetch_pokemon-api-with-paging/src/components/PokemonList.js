import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [next, setNext] = useState("");

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();
        setNext(data.next);
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  function handleNext() {
    setPage(page + 1);
  }

  function handlePrevious() {
    setPage(page - 1);
  }

  return (
    <main>
      {page > 0 ? (
        <button type="button" onClick={handlePrevious}>
          Previous Page
        </button>
      ) : (
        ""
      )}
      {next !== null ? (
        <button type="button" onClick={handleNext}>
          Next Page
        </button>
      ) : (
        ""
      )}

      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
