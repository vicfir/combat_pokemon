import * as pokemon from "./module/instance.js";
import * as funct from "./module/function.js";

//SELECT PLAYER POKEMON-------------------------------------------------------------
let selectPokemon = document.querySelectorAll("#select > div > a > button");
let selectPokemonImg = document.querySelector("#joueurPokemonImg");

let playerPokemon;

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
    playerPokemon = pokemon.blastoise;

} else if (selectPokemonImg.src.includes("charizard")) {
    funct.playerPokemonInfo(pokemon.charizard);
    playerPokemon = pokemon.charizard;

} else if (selectPokemonImg.src.includes("venusaur")) {
    funct.playerPokemonInfo(pokemon.venusaur);
    playerPokemon = pokemon.venusaur;

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

//COMBAT LOOP--------------------------------------------------------------------------
console.log(enemyPokemon, playerPokemon);
console.log(Object.values(playerPokemon.atk)[0]);

let atkBtn = document.querySelectorAll("#attaque > button");

let infoSquare = document.querySelectorAll("#joueurPv > p");

let enemyPokemonImgMove = document.querySelector("#adversairePokemon");
let playerPokemonImgMove = document.querySelector("#joueurPokemon");

let atkFlash = document.querySelector("#atkFlash");
    

for (let i = 0; i < atkBtn.length; i++) {
    atkBtn[i].addEventListener("click", ()=>{
        playerPokemonImgMove.classList.remove('animationPlayer'); // reset animation
        void playerPokemonImgMove.offsetWidth; // trigger reflow
        playerPokemonImgMove.className="animationPlayer";// start animation

        enemyPokemon.hp -= Object.values(playerPokemon.atk)[i];
        infoEnemySquare[1].textContent = `${enemyPokemon.hp}HP`;
        //enemy pokemon atk if alive
        if (enemyPokemon.hp > 0) {
            setTimeout(() => {
                enemyPokemonImgMove.classList.remove('animationEnemy'); // reset animation
                void enemyPokemonImgMove.offsetWidth; // trigger reflow
                enemyPokemonImgMove.className="animationEnemy";// start animation

                atkFlash.classList.remove("atkFlash");
                void atkFlash.offsetWidth;
                setTimeout(() => {
                    atkFlash.className="atkFlash"
                }, 500);
                
                playerPokemon.hp -= enemyPokemon.pa;
                infoSquare[1].textContent = `${playerPokemon.hp}HP`;
            }, 1500);
        }
        console.log(enemyPokemon.hp);
    })
}

// do {

//     if ( playerPokemon.hp > 0) {
        
//     }

// } while (enemyPokemon.hp > 0 || playerPokemon.hp > 0);