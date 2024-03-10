let pokemonRepository = (function () {
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

    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }
    function showDetails(pokemon) {
        console.log(pokemon);
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
    }
})();

// for (let i=0; i < pokemonList.length; i++){
   // if (pokemonList[i].height >2){
      //  document.write("<p>" + pokemonList[i].name + pokemonList[i].height + " - Wow that's big!" + "</p>")
    //}else if (pokemonList[i].height >0){
       // document.write("<p>" + pokemonList[i].name + pokemonList[i].height + "</p>")
    //}
//}
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});