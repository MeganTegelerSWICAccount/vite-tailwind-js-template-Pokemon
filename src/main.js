const currentId = 1;
const minId = 1;
const maxId = 1025;
const previousButton = document.getElementById("Previous");
const nextButton = document.getElementById("Next");
const pokemonImage = document.getElementById("Pokemon Image to show");
const pokemonName = document.getElementById("Pokemon Name to show");

async function fetchPokemon(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // the try part of the if where it shows throw new Error. I couldn't get this correct, so tried AI it. I broke the code and it shows the error message I wanted.
    const data = await response.json();
    console.log(data);
    renderPokemon(data);
  } catch (error) {
    console.error("Error fetching Pokémon:", error.message);
  }
}
//AI fixed this part as I wrote the sprites wrong, forgot the _ in front_default even though I thought that you are suppose to leave a space. I didn't remember learning about the .alt.
function renderPokemon(data) {
  pokemonImage.src = data.sprites.front_default;
  pokemonImage.alt = `${data.name} sprite`;
  pokemonName.textContent = data.name;
}
nextButton.addEventListener("click", fetchPokemon);
previousButton.disable = currentId <= minId;
nextButton.disable = currentId >= maxId;

fetchPokemon(currentId);
