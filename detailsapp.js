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

////for forms
const formContainer = document.getElementById("form-container");
const formName = document.getElementById("form-name");
const formImg = document.getElementById("form-img");


const pokemonImg1 = document.createElement("img")
const pokemonImg2 = document.createElement("img")
const pokemonImg3 = document.createElement("img")
const pokemonImg4 = document.createElement("img")

//////get pokemon forms
async function getpokemonforms(name) {
    if (!name) {
        return null;
    }
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${name}`)
        if (!response.ok) {
            return null;
        }
        const data = await response.json();
        return data;

    } catch (error) {
        return null;
    }
}
/////get pokemon details
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
    pokemonName.textContent = data.name;

    pokemonImg.src = data.sprites.front_default;
    // pokemonImg1.src = data.sprites.back_default;
    // pokemonImg2.src = data.sprites.back_shiny;
    // pokemonImg3.src = data.sprites.front_default;
    // pokemonImg4.src = data.sprites.front_shiny;


    // formContainer.appendChild(pokemonImg1)
    // formContainer.appendChild(pokemonImg2)
    // formContainer.appendChild(pokemonImg3)
    // formContainer.appendChild(pokemonImg4)

    pokemonnumber.textContent += data.id;
    pokemonheight.textContent += " " + data.height;
    pokemonwidht.textContent += " " + data.weight;


    data.stats.forEach((stat, index) => {
        if (index == 0) {
            pokemonStats.textContent += " " + stat.stat.name
        }
        else {
            pokemonStats.textContent += " - " + stat.stat.name
        }
    })
    data.types.forEach((type, index) => {
        if (index == 0) {
            pokemonType.textContent += " " + type.type.name
        } else {
            pokemonType.textContent += " - " + type.type.name
        }
    })
    data.abilities.forEach((ability, index) => {
        if (index == 0) {
            pokemonAbilities.textContent += "  " + ability.ability.name

        } else pokemonAbilities.textContent += " - " + ability.ability.name

    })
    const forms = await getpokemonforms(name);
    if (!forms) {
        return null;
    }
    ////for pokemon forms
    if (forms.form_name === "") {
        formName.textContent = " No Form Name"
    } else {
        formName.textContent = forms.form_name
    }

    const pokemonImg1 = document.createElement("img")
    const pokemonImg2 = document.createElement("img")
    const pokemonImg3 = document.createElement("img")
    const pokemonImg4 = document.createElement("img")
    pokemonImg1.src = forms.sprites.back_default;
    pokemonImg2.src = forms.sprites.back_shiny;
    pokemonImg3.src = forms.sprites.front_default;
    pokemonImg4.src = forms.sprites.front_shiny;
    formImg.appendChild(pokemonImg1)
    formImg.appendChild(pokemonImg2)
    formImg.appendChild(pokemonImg3)
    formImg.appendChild(pokemonImg4)


}

displaypokemondetails();
