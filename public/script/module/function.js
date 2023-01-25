export function randArr(array) {
    let rand = Math.random()*array.length | 0;
    let randValue = array[rand];
    return randValue;
}

//display player pokemon info in combat page
export function playerPokemonInfo(pokemon) {
    //name hp info
    let infoSquare = document.querySelectorAll("#joueurPv > p");
    infoSquare[0].textContent = pokemon.name;
    infoSquare[1].textContent = `${pokemon.hp}HP`;
    //attacks info
    let attackSquares = document.querySelectorAll("#attaque > button");
    for (let i = 0; i < attackSquares.length; i++) {
        attackSquares[i].textContent = `${Object.keys(pokemon.atk)[i]} : ${Object.values(pokemon.atk)[i]} DMG`;
    }
}

