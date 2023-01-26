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

//COMBAT "LOOP"--------------------------------------------------------------------------
console.log(enemyPokemon, playerPokemon);
console.log(Object.values(playerPokemon.atk)[0]);

let atkBtn = document.querySelectorAll("#attaque > button");

let infoSquare = document.querySelectorAll("#joueurPv > p");

let enemyPokemonImgMove = document.querySelector("#adversairePokemon");
let playerPokemonImgMove = document.querySelector("#joueurPokemon");

let atkFlash = document.querySelector("#atkFlash");


let enemyHpMax = enemyPokemon.hp;
let playerHpMax = playerPokemon.hp;

for (let i = 0; i < atkBtn.length; i++) {
    atkBtn[i].addEventListener("click", ()=>{

        if (playerPokemon.hp > 0) {
            //atk animation
            playerPokemonImgMove.classList.remove('animationPlayer'); // reset animation
            void playerPokemonImgMove.offsetWidth; // trigger reflow
            playerPokemonImgMove.className="animationPlayer"; // start animation
            
            //hp change
            enemyPokemon.hp -= Object.values(playerPokemon.atk)[i];
            infoEnemySquare[1].textContent = `${enemyPokemon.hp}HP`;
            
            //bar hp change
            let enemyHpBar = document.querySelector("#adversairePvBar");
            enemyHpBar.style=`width: ${(Math.round(enemyPokemon.hp/(enemyHpMax/100)))}%`;

            //color
            if(enemyHpBar.style.width.slice(0, -1) < 25) {
                enemyHpBar.className="progress-bar bg-danger"
            } else if (enemyHpBar.style.width.slice(0, -1) < 50) {
                enemyHpBar.className="progress-bar bg-warning"
            }

            //disable atk btn 2sec(antispam)
            let btnContainer = document.querySelector("#attaque");
            btnContainer.style.pointerEvents="none";
            setTimeout(() => {
                btnContainer.style.pointerEvents="auto";
            }, 2000);
            
        }

        //enemy pokemon atk if alive
        if (enemyPokemon.hp > 0) {
            setTimeout(() => {

                //atk animation
                enemyPokemonImgMove.classList.remove('animationEnemy'); // reset animation
                void enemyPokemonImgMove.offsetWidth; // trigger reflow
                enemyPokemonImgMove.className="animationEnemy"; // start animation

                //red flash animation
                atkFlash.classList.remove("atkFlash"); 
                void atkFlash.offsetWidth;
                setTimeout(() => {
                    atkFlash.className="atkFlash"
                }, 500);

                //hp change
                playerPokemon.hp -= enemyPokemon.pa;
                infoSquare[1].textContent = `${playerPokemon.hp}HP`;

                //bar hp change
                let playerHpBar = document.querySelector("#joueurPvBar");
                playerHpBar.style=`width: ${(Math.round(playerPokemon.hp/(playerHpMax/100)))}%`;
                //color
                if(playerHpBar.style.width.slice(0, -1) < 25) {
                    playerHpBar.className="progress-bar bg-danger"
                } else if (playerHpBar.style.width.slice(0, -1) < 50) {
                    playerHpBar.className="progress-bar bg-warning"
                }
            }, 1500);
        }
    })
}