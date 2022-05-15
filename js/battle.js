/** CONST USER INFO **/
let attack = [
    {
        "name": "Fire",
        "attack": 15,
        "mp_cost": 5
    },
    {
        "name": "Water",
        "attack": 20,
        "mp_cost": 7
    },
    {
        "name": "Earth",
        "attack": 25,
        "mp_cost": 10
    },
    {
        "name": "Wind",
        "attack": 5,
        "mp_cost": 8

    }];

let enemy = {
    "name": "random",
    "level": 1,
    "damage": 10,
    "max_hp": 100,
    "hp": 100,
}

let turn = true;

const enemy_hp = document.querySelector('#enemyHealth');
localStorage.setItem("hp", "200");
localStorage.setItem("maji", "200");
localStorage.setItem("username", "steel");
const username = document.querySelector('.username');
const avatar = document.querySelector('.avatar');
const hp = document.querySelector('#hp');
const mp = document.querySelector('#mp');
const attacks = document.querySelectorAll('.attack');
const start_lvl = 1;
const log = document.querySelector("#log");
localStorage.setItem("level", start_lvl);

function enemy_attack() {
    enemy_damage_handler(enemy.damage)
}
function player_attack(y) { 
    player_damage_handler(attack[y].attack,attack[y].mp_cost);
}


for (let x = 0; x < attacks.length; x++) {
    attacks[x].innerHTML = attack[x].name;
    attacks[x].onclick = () => {
        if (turn !== true) {
            enemy_attack();
            turn = true;
        } else if (turn !== false) {
            player_attack(x);
            turn = false;
        }


    };
}


/** ##  START SCRIPT ## **/

function player_damage_handler(damage, consumption){
    if (hp.value<= 0 || enemy.hp <= 0|| mp.value <= 0)  {
        /** ##  START new player spawn ## **/ 
    }
    else {
        log.innerHTML = "<p class='playerLog'>"+user.username +" hit with "+ damage+"</p>" + log.innerHTML
        enemy.hp -= damage;
        mp.value -= consumption;
        loadEnemy();
    }
}
function enemy_damage_handler(damage) {
    if (hp.value<= 0 || enemy.hp <= 0|| mp.value <= 0) {
        /** ##  START new enemy spawn ## **/
    }
    else {
        console.log("hit");
        hp.value -= damage;
        log.innerHTML = "<p class='enemyLog'>enemy hit</p>" + log.innerHTML

    }
};


function loadEnemy() {
    enemy_hp.value = enemy.hp
    enemy_hp.max = enemy.max_hp;

}


function loadUser() {

    username.innerHTML = user.username;
    avatar.src = "img/avatar.png";
    hp.value = JSON.parse(user.hp);
    hp.max = JSON.parse(user.hp);
    mp.value = JSON.parse(user.mp);
    mp.max = JSON.parse(user.mp);
}



loadEnemy();
loadUser();
