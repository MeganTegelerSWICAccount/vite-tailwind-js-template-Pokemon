async function fetchPokemon(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // the try part of the if where it shows throw new Error. I couldn't get this correct, so tried AI it.
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching Pokémon:", error.message);
  }
}
fetchPokemon(1);
