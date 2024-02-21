import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 20;

  const URL = "https://pokeapi.co/api/v2/pokemon?offset=";

  async function loadPokemon() {
    try {
      const response = await fetch(`${URL}${offset}&limit=${limit}`);
      const data = await response.json();
      setCount(data.count);
      setPokemon(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadPokemon();
  }, [offset]);

  function handleNext() {
    setOffset(offset + limit);
    setPage(page + 1);
  }

  function handlePrevious() {
    setOffset(offset - limit);
    setPage(page - 1);
  }

  return (
    <main>
      {offset > 0 ? (
        <button type="button" onClick={handlePrevious}>
          Previous Page
        </button>
      ) : (
        ""
      )}
      {offset <= count ? (
        <button type="button" onClick={handleNext}>
          Next Page
        </button>
      ) : (
        ""
      )}
      <button type="button" disabled>{`Page: ${page} / ${Math.ceil(
        count / limit
      )}`}</button>
      <ol>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ol>
    </main>
  );
}
