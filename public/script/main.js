import * as pokemon from "./module/instance.js";
import * as funct from "./module/function.js";

//SELECT PLAYER POKEMON-------------------------------------------------------------
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
//get the img src in combat page
selectPokemonImg.src=window.localStorage.getItem('src');

//display info player pokemon
if (selectPokemonImg.src.includes("blastoise")) {
    funct.playerPokemonInfo(pokemon.blastoise);

} else if (selectPokemonImg.src.includes("charizard")) {
    funct.playerPokemonInfo(pokemon.charizard);

} else if (selectPokemonImg.src.includes("venusaur")) {
    funct.playerPokemonInfo(pokemon.venusaur);

} else {
    console.log("error pokemon image source");
}

//SELECT ENEMY POKEMON----------------------------------------------------------------

let enemyPokemonArray = [pokemon.articuno, pokemon.zapdos, pokemon.moltres];
//random enemy
let enemyPokemon = funct.randArr(enemyPokemonArray);
//display info enemy pokemon
let infoEnemySquare = document.querySelectorAll("#adversairePv > p");
infoEnemySquare[0].textContent = enemyPokemon.name;
infoEnemySquare[1].textContent = `${enemyPokemon.hp}HP`;
//display img enemy pokemon
let enemyPokemonImg = document.querySelector("#adversairePokemon > img")
switch (enemyPokemon.name) {
    case "Articuno":
        enemyPokemonImg.src="../img/articunoFront.gif"
        break;
    case "Zapdos":
        enemyPokemonImg.src="../img/zapdosFront.gif"
        break;
    case "Moltres":
        enemyPokemonImg.src="../img/moltresFront.gif"
        break;
    default:
        console.log("error enemy select pokemon");
        break;
}