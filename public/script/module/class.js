export class Pokemon {
    constructor(name, hp, type = []){
        this.name = name;
        this.hp = hp;
        this.type = type;
    }
}

export class PlayerPokemon extends Pokemon {
    constructor(name, hp, type = [], atk = {}){
        super(name, hp, type);
        this.atk = atk;
    }
}

export class EnemyPokemon extends Pokemon {
    constructor(name, hp, type = [], pa){
        super(name, hp, type);
        this.pa = pa;
    } 
}