/** CONST USER INFO **/
let attack = [
    {
        "name": "Fire",
        "attack": 15,
        "mp-cost": 5
    },
    {
        "name": "Water",
        "attack": 20,
        "mp-cost": 7
    },
    {
        "name": "Earth",
        "attack": 25,
        "mp-cost": 10
    },
    {
        "name": "Wind",
        "attack": 5,
        "mp-cost": 8

    }];
const username = document.querySelector('.username');
const avatar = document.querySelector('.avatar');
const hp = document.querySelector('#hp');
const mp = document.querySelector('#mp');
const attacks = document.querySelectorAll('.attack');
for(let x = 0 ; x < attacks.length; x++){
    attacks[x].innerHTML = attack[x].name;
}
/** INSERT USER INFO **/
username.innerHTML = user.username;
avatar.src = "img/avatar.png";
hp.value = user.hp;
hp.max = user.max_hp;
mp.value = user.mp;
mp.max = user.max_hp;

/** ##  START SCRIPT ## **/

function HP_handler(damage) {
    user.current_HP -= damage;
    console.log(user.current_HP);
}

function loadUser() {
    user.current_HP = user.max_HP;
    user.current_MP = user.max_MP;
}

button = document.querySelector('.button');

button.onclick = function attacks() {
    console.log(user.current_HP);
    HP_handler(15);
}


loadUser();