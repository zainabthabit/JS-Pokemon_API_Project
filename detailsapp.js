const backbutton=document.getElementById("backbutton")
backbutton.addEventListener("click",()=>{
    window.location.href='./listpage.html'
})
const cardContainer=document.getElementById("card-container");
const pokemonName=document.getElementById("pokemon-name");
const infoDetails=document.getElementById("info-details");
const infoDetails2=document.getElementById("info-details2");
const pokemonwidht=document.getElementById("widht");
const pokemonheight=document.getElementById("height");
const pokemonnumber=document.getElementById("number");
const pokemonImg=document.getElementById("pokemonimg");



async function getpokemondetails(name){
    if (!name){
        return null;
    }
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if (!response.ok){
            return null;
        }
        const data= await response.json();
        return data;

    }catch (error){
        return null;
    }
}
async function displaypokemondetails(){
    const searchparams=new URLSearchParams(window.location.search);
    const name = searchparams.get(name);
    const data = await getpokemondetails (name) ;
    if (!data){
        return null;
    }
    pokemonName.textContent = data.name;

    pokemonImg.src = data.sprites.front_defult;
    pokemonnumber.textContent += data.id;
    pokemonheight.textContent += " "+ data.height;
    pokemonwidht.textContent += " "+data.widht;

}
displaypokemondetails();
