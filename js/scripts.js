let pokemonList = [
    { 
        name: "Bulbasaur", 
        height: (2.04), 
        types: ["grass", "poison"] 
    },
    { 
        name: "Charmander", 
        height: (2), 
        types: "fire" 
    },
    { 
        name: "Squirtle", 
        height: (1.08), 
        types: "water" 
    }
];
// for (let i=0; i < pokemonList.length; i++){
   // if (pokemonList[i].height >2){
      //  document.write("<p>" + pokemonList[i].name + pokemonList[i].height + " - Wow that's big!" + "</p>")
    //}else if (pokemonList[i].height >0){
       // document.write("<p>" + pokemonList[i].name + pokemonList[i].height + "</p>")
    //}
//}
function loopFunction(pokemon) {
    document.write("<p>" + pokemon.name + " " + pokemon.height + "</p>");
}
pokemonList.forEach(loopFunction);