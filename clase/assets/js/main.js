//Variables logicas
let pokemons = [];

//Variables UI
let pokeForm = null;
let pokeParty = null;

//bind Elements
const bindElements = () => {
  pokeForm = document.querySelector("#pokemon-form");
  pokeParty = document.querySelector("#pokemon-party-section");
}

const bindSubmitListener = () => {
  pokeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(pokeForm);
    /* const _pokemon = {
      index: data.get("index"),
      name: data.get("name"),
      sprite: data.get("sprite"),
      height: data.get("height"),
      weight: data.get("weight"),
      type_1: data.get("type-1"),
      type_2: data.get("type-2"),
      hp: data.get("hp"),
      atk: data.get("atk"),
      def: data.get("def"),
      spa: data.get("spa"),
      spd: data.get("spd"),
    } */

    const _pokemon = {};
    let hasErrors = false;

    data.forEach((value, key)=> {
      if(!value) {
        hasErrors = true;
      }

      _pokemon[key] = value;
    });

    if(hasErrors) {
      alert("Hay errores en los campos");
      return;
    }

    pokemons.push(_pokemon);
    renderPokemons();
    pokeForm.reset();
  })
}

const createPokemonCard = (pokemon) => {
  const content = `
    <figure>
      <img src="${pokemon.sprite}" alt="Pokemon Sprite">
    </figure>

    <div class="info">
      <h4> ${pokemon.name} </h4>
      <p> # ${pokemon.index} </p>
      <p> Altura: ${pokemon.height} </p>
      <p> Peso: ${pokemon.weight} </p>
    </div>

    <div class="stats">
      <div class="stat">
        <p> HP: </p>
        <div class="bar">
          <div style="width: ${(pokemon.hp / 255) * 100 }% ;"></div>
        </div>
      </div>
      
      <div class="stat">
        <p> ATK: </p>
        <div class="bar">
          <div style="width: ${(pokemon.atk / 255) * 100 }% ;"></div>
        </div>
      </div>

      <div class="stat">
        <p> DEF: </p>
        <div class="bar">
          <div style="width: ${(pokemon.def / 255) * 100 }% ;"></div>
        </div>
      </div>

      <div class="stat">
        <p> SPA: </p>
        <div class="bar">
          <div style="width: ${(pokemon.spa / 255) * 100 }% ;"></div>
        </div>
      </div>

      <div class="stat">
        <p>SPD: </p>
        <div class="bar">
          <div style="width: ${(pokemon.spd / 255) * 100 }% ;"></div>
        </div>
      </div>
      
    </div>
  `;

  const _element = document.createElement("article");
  _element.innerHTML = content;

  _element.dataset.index = pokemon.index;

  return _element;
}

const renderPokemons = () => {
  pokeParty.innerHTML = "<h3> Pokemon Party </h3>";
  pokemons.forEach(pokemon => {
    pokeParty.appendChild(createPokemonCard(pokemon));
  });
}

const Main = () => {
  bindElements();
  bindSubmitListener();
}

window.onload = Main;