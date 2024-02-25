let pokemonList = [
    { 
        name: "Bulbasaur", 
        height: 2.04, 
        types: ["grass", "poison"] 
    },
    { 
        name: "Charmander", 
        height: 2, 
        types: "fire" 
    },
    { 
        name: "Squirtle", 
        height: 1.08, 
        types: "water" 
    }
];
document.write(pokemonList)
for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height >2){
        document.write(pokemonList[i] + "- Wow that's big!")
    }
}