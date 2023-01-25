export class Pokemon {
    constructor(nom, pv, type = []){
        this.nom = nom;
        this.pv = pv;
        this.type = type;
    }
}

export class PlayerPokemon extends Pokemon {
    constructor(nom, pv, type = [], atk = {}){
        super(nom, pv, type);
        this.atk = atk;
    }
}

export class EnemyPokemon extends Pokemon {
    constructor(nom, pv, type = [], pa){
        super(nom, pv, type);
        this.pa = pa;
    } 
}