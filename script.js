//UI variables

    // input field for seach 
const filterInput = document.querySelector('#pokemon-lookup');

// ui class
class Ui{}

// Pokemon class

class Pokemon{
    constructor(name, type, species, hp, number){
        this.name = name;
        this.type = type;
        this.species = species;
        this.hp = hp;
        this.number;
    }
}

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

    timeDiv.innerHTML = `${hour}:${min}${amPm}`;
    var t = setTimeout(setTime, 1000);

}
    // filter pokemon function 

    function filterPokemon(e){
        const pokemonName = e.target.value.toLowerCase();
        document.querySelectorAll('.pokemon-list li').forEach(function(name){
        const pokemon = name.firstChild.textContent;

        if (pokemon.toLowerCase().indexOf(pokemonName) == 0) {
            name.style.display = 'block';
        }
        else{
            name.style.display = 'none';
            }
         });
        }
    
