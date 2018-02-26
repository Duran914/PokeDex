//UI variables

    // input field for seach 
const filterInput = document.querySelector('#pokemon-lookup');
      ulPokemonName = document.querySelector('#name');
      ulPokemonType = document.querySelector('#type');
      ulPokemonSpecies = document.querySelector('#species');
      ulPokenmonHp = document.querySelector('#hp');
      ulPokemonNumber = document.querySelector('#pokeNum');
      ulPokemonList = document.getElementsByClassName('pokemon-list');
      ulPokemonPicture = document.querySelector('.pokemon-img');
      pickedPokemon = document.querySelectorAll('#pokemon');

// Pokemon class

class Pokemon{
    constructor(name, type, species, hp, number){
        this.name = name;
        this.type = type;
        this.species = species;
        this.hp = hp;
        this.number = number;
    }
    
}   
// const bulbasaur = new Pokemon('Bulbasaur', 'Grass/Posion', 'Seed', '45', '001');
// const ivysaur = new Pokemon('Ivysaur', 'Grass/Posion', 'Seed', '60', '002');

// ui class
class Ui{

}
       
pickedPokemon.forEach(function(pokemon){
        
        pokemon.addEventListener('click', function(e){
        const test = e.target.innerHTML;
            console.log(test);
            
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'pokemon.json', true);

        xhr.onload = function(){
            if(this.status === 200){
            const pokemons = JSON.parse(this.responseText); 

              for (let i = 0; i < pokemons.length; i++) {
                  const element = pokemons[i];

                  if(element.name === test){
                 console.log(element.name,element.type);
                 ulPokemonName.innerHTML =`NAME: ${element.name}`;
                 ulPokemonType.innerHTML = `TYPE: ${element.type}`;
                 ulPokemonSpecies.innerHTML = `SPECIES: ${element.species}`;
                 ulPokenmonHp.innerHTML = `HP: ${element.hp}`;
                 ulPokemonNumber.innerHTML = element.number;
                 ulPokemonPicture.setAttribute('src', `images/${test}.png`); 
                 
                }
              }
            }
        }
        xhr.send();
    });
});

// Event listeners
    filterInput.addEventListener('keyup', filterPokemon);

    // sets time clock
window.onload = function setTime() {
    const timeDiv = document.querySelector('.time');
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let min = currentTime.getMinutes();
    let amPm;

    // am pm for us anti weird americans 
    if (hour == 12) {
        amPm = 'pm';
    }
    else if (hour > 12) {
        hour -= 12;
        amPm = 'pm';
    }
     else {
        amPm = 'am';
    }
    //adds 0 if mininutes is less then 10
    if (min < 10) {
        min = "0" + min;
    }
    // adds 1 for 1am
    if(hour == 0){
        hour += 1;
    }

    timeDiv.innerHTML = `${hour}:${min}${amPm}`;
    var t = setTimeout(setTime, 1000);

}
    // filter pokemon function 

    function filterPokemon(e){
        const pokemonName = e.target.value.toLowerCase();
        document.querySelectorAll('.pokemon-list li').forEach(function(name){
        const pokemonList = name.firstChild.textContent;

        if (pokemonList.toLowerCase().indexOf(pokemonName) == 0) {
            name.style.display = 'block';
        }
        else{
            name.style.display = 'none';
            }
         });
        }






    
