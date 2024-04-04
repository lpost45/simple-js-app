let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

    let modal = document.querySelector('.modal');

    function showModal(pokemon) {
        let modalBody = document.querySelector('.modal-body');
        let modalHeader = document.querySelector('.modal-header');
        modalBody.innerHTML = '';

        let modalTitle = document.querySelector('.modal-title');
        modalTitle.innerHTML = pokemon.name;

        let closeButtonElement = document.querySelector('.close');

        let imageElement = document.createElement('img');
        imageElement.classList.add('modal-img');
        imageElement.src = pokemon.imageUrl;

        let typesElement = document.createElement('p');
        let types = [pokemon.types[0].type.name];
        for (let i = 1; i < pokemon.types.length; i++) {
            types.push(', ' + pokemon.types[i].type.name);
        }
        typesElement.innerHTML = 'Types: ' + types.join('');
        
        let contentElement = document.createElement('p');
        contentElement.innerText = 'Height: ' + pokemon.height;

        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(closeButtonElement);
        modalBody.appendChild(typesElement);
        modalBody.appendChild(contentElement);
        modalBody.appendChild(imageElement);
    }
    modal.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modal) {
            hideModal();
        }
    });

    function hideModal() {
        modal.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e)=> {
        if (e.key === 'Escape' && modal.classList.contains('is-visible')) {
            hideModal();
        }
    });
    
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
        button.classList.add("btn-primary", "btn-block", "btn-lg", "mb-3");
        button.setAttribute("data-target", "#exampleModal");
        button.setAttribute("data-toggle", "modal");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        addEventListenertoButton(button, pokemon);
    }
    function addEventListenertoButton(button, pokemon) {
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    }
})();

// for (let i=0; i < pokemonList.length; i++){
   // if (pokemonList[i].height >2){
      //  document.write("<p>" + pokemonList[i].name + pokemonList[i].height + " - Wow that's big!" + "</p>")
    //}else if (pokemonList[i].height >0){
       // document.write("<p>" + pokemonList[i].name + pokemonList[i].height + "</p>")
    //}
//}
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
