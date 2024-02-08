async function pokemonFetch() {

  const pokemonName = document.querySelector("#pokemonName").value.toLowerCase();
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  try {

    if (!response.ok) {
      throw new Error("Could not fetch resources!");
    }

    const data = await response.json();
    const pokemonImage = data.sprites.front_default;
    const imageElement = document.querySelector("#pokemonImage");

    imageElement.src = pokemonImage;
    imageElement.style.display = "block";
  }

  catch(error) {
    console.error(error);
  }
}

document.querySelector("#fetchPokemon").addEventListener('click', pokemonFetch);