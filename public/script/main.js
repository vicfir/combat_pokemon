// import * as select from "./module/select.js";
// import * as combat from "./module/combat.js";
import * as pokemon from "./module/instance.js";

//SELECT POKEMON-------------------------------------------------------------
let selectPokemon = document.querySelectorAll("#select > div > a > button");
let selectPokemonImg = document.querySelector("#joueurPokemonImg");

//event listner on all pokemon
for (let i = 0; i < selectPokemon.length; i++) {
    selectPokemon[i].addEventListener("click", (e)=>{
        console.log(e.target);
        //stock in local storage
        window.localStorage.setItem('src', e.target.value);
    })
}
//get the src in combat page
selectPokemonImg.src=window.localStorage.getItem('src');

//
console.log(pokemon.blastoise, pokemon.charizard, pokemon.venusaur);
console.log(pokemon.articuno, pokemon.zapdos, pokemon.moltres);