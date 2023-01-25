// import * as select from "./module/select.js";
// import * as combat from "./module/combat.js";
let selectPokemon = document.querySelectorAll("#select > a > button");
let selectPokemonImg = document.querySelector("#joueurPokemonImg");


for (let i = 0; i < selectPokemon.length; i++) {
    selectPokemon[i].addEventListener("click", (e)=>{
        console.log(e.target.value);
        window.localStorage.setItem('src', e.target.value);
        // switch (selectPokemon[i].textContent) {
        //     case "Blastoise":
        //         // selectedPokemon = "../img/blastoiseBack.gif";
        //         selectPokemonImg.src=`${selectedPokemon}`;
        //         console.log("ok");
        //         break;
        //     case "Charizard":
                
        //         break;
        //     case "Venusaur":
                
        //         break;
        //     default:
        //         console.log("error");
        //         break;
        // }
    })
}

console.log(selectPokemonImg);
console.log(window.localStorage.getItem('src'));
selectPokemonImg.src=window.localStorage.getItem('src');
console.log(selectPokemonImg);