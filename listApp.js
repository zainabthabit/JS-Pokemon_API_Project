async function getPokemonDetails(name) {
    if (!name) {
        return null;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        // console.log(data)
        return data;
    } catch (error) {
        return null;
    }
}
const pokemonsContainer = document.getElementById("list-container");
async function getPokemons() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        console.log(data)
        return data.results;
    } catch (error) {
        return null;
    }
}
async function displayPokemons() {
    const pokemons = await getPokemons();

    if (!pokemons) {
        pokemonsContainer.textContent = "Error fetching pokemons";
        return;
    }

    pokemons.forEach(async (pokemon) => {
        const pokemonDetails = await getPokemonDetails(pokemon.name)
        const pokemonCard = document.createElement("div");
        const pokemonImg = document.createElement("img")
        const pokemonName = document.createElement("span")
        const detailsButton = document.createElement("button")
        pokemonCard.classList.add("pokemon-card");
        pokemonImg.classList.add("pokemonImg");
        pokemonName.classList.add("pokemonName");
        detailsButton.classList.add("detailsButton");
        detailsButton.textContent = "Details"
        pokemonName.textContent = pokemon.name;
        pokemonImg.src = pokemonDetails.sprites.front_default
        pokemonCard.appendChild(pokemonImg)
        pokemonCard.appendChild(pokemonName)
        pokemonCard.appendChild(detailsButton)

        detailsButton.addEventListener("click", () => {
            window.location.href = `./detailspage.html?name=${pokemon.name}`;


        });

        pokemonsContainer.appendChild(pokemonCard);
    });


}

displayPokemons();
//************search */
const searchInput = document.getElementById("search-span")
const searchButton = document.getElementById("search-button")
searchButton.addEventListener("click", () => {
    pokemonsContainer.forEach()
})
