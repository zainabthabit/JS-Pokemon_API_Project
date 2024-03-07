const backbutton = document.getElementById("backbutton")
backbutton.addEventListener("click", () => {
    window.location.href = './listpage.html'
})
const cardContainer = document.getElementById("card-container");
const pokemonName = document.getElementById("pokemon-name");
const infoDetails = document.getElementById("info-details");
const infoDetails2 = document.getElementById("info-details2");
const pokemonwidht = document.getElementById("widht");
const pokemonheight = document.getElementById("height");
const pokemonnumber = document.getElementById("number");
const pokemonImg = document.getElementById("pokemonimg");
const pokemonStats = document.getElementById("Stats");
const pokemonType = document.getElementById("Type");
const pokemonAbilities = document.getElementById("Abilities");



async function getpokemondetails(name) {
    if (!name) {
        return null;
    }
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if (!response.ok) {
            return null;
        }
        const data = await response.json();
        return data;

    } catch (error) {
        return null;
    }
}
async function displaypokemondetails() {
    const searchparams = new URLSearchParams(window.location.search);
    const name = searchparams.get("name");
    const data = await getpokemondetails(name);
    if (!data) {
        return null;
    }
    console.log(data);
    pokemonName.textContent = data.name;

    pokemonImg.src = data.sprites.front_default;
    pokemonnumber.textContent += data.id;
    pokemonheight.textContent += " " + data.height;
    pokemonwidht.textContent += " " + data.weight;


    data.stats.forEach((stat, index) => {
        const newSpan = document.createElement("span")
        newSpan.textContent = stat.stat.name
        if (index == 0) {
            pokemonStats.appendChild(newSpan)
        }
        else {
            const hyphen = document.createElement("span")
            hyphen.textContent= " - "
            pokemonStats.appendChild(hyphen)
            pokemonStats.appendChild(newSpan)

        }
    })
    data.types.forEach((type, index) => {
      
        const newSpan2 = document.createElement("span2")
        newSpan2.textContent = type.type.name
        if (index == 0) {
            pokemonType.appendChild(newSpan2)
        } else {
            const hyphen = document.createElement("span2")
            hyphen.textContent= " - "
            pokemonType.appendChild(hyphen)
            pokemonType.appendChild(newSpan2)
            
        }
    })
    data.abilities.forEach((ability, index) => {
        const newSpan3 = document.createElement("span3")
        newSpan3.textContent = ability.ability.name
        if (index == 0) {
            pokemonAbilities.appendChild(newSpan3)

        }  const hyphen = document.createElement("span3")
        hyphen.textContent= " - "
        pokemonAbilitie.appendChild(hyphen)
        pokemonAbilitie.appendChild(newSpan3)

    })
}
displaypokemondetails();
const backbutton2 = document.getElementById("backbutton2")
backbutton2.addEventListener("click", () => {
    window.location.href = './index.html'
})
