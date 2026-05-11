const currentId = 1;
const minId = 1;
const maxId = 1025;
const previousButton = document.getElementById("Previous");
const nextButton = document.getElementById("Next");

async function fetchPokemon(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // the try part of the if where it shows throw new Error. I couldn't get this correct, so tried AI it. I broke the code and it shows the error message I wanted.
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching Pokémon:", error.message);
  }
}
nextButton.addEventListener("click", fetchPokemon);
previousButton.disable = currentId <= minId;
nextButton.disable = currentId >= maxId;

fetchPokemon(1);
