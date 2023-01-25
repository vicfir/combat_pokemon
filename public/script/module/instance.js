import * as pokemon from "./class.js"

//pokemon for player
export let blastoise = new pokemon.PlayerPokemon("Blastoise", 79, ["water"], {"Water Gun": 4, "Rapid Spin" : 5, "Aqua Tail": 9, "Hydro Pump" : 11});
export let charizard = new pokemon.PlayerPokemon("Charizard", 78, ["fire","flying"], {"Ember": 4, "Heat Wave" : 9, "Dragon Breath": 6, "Inferno" : 10});
export let venusaur = new pokemon.PlayerPokemon("Venusaur", 80, ["grass","poison"], {"Razor Leaf": 5, "Seed Bomb" : 8, "Petal Dance": 12, "Vine Whip" : 4});

//enemy pokemon
export let articuno  = new pokemon.EnemyPokemon("Articuno", 90, ["ice","flying"], 10);
export let zapdos  = new pokemon.EnemyPokemon("Zapdos", 90, ["electirc","flying"], 10);
export let moltres  = new pokemon.EnemyPokemon("Moltres", 90, ["fire","flying"], 10);