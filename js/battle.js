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
    "damage": 50,
    "max_hp": 100,
    "hp": 100,
}

let turn = true;// decides if its player turn or not 

const enemy_hp = document.querySelector('#enemyHealth');  //creates a variable 
localStorage.setItem("hp", "200");      //sets player hp to 200
localStorage.setItem("maji", "200");    //sets player mp to 200
localStorage.setItem("username", "steel");//sets player username to steel (just to test) --> needs to change to player name of the account
const username = document.querySelector('.username');//var with the html class of username
const avatar = document.querySelector('.avatar');//var with the html class of avatar
const hp = document.querySelector('#hp');//var with the html id of hp
const mp = document.querySelector('#mp');//var with the html id of mp
const attacks = document.querySelectorAll('.attack');//var with the html class of hp
const start_lvl = 1;//var debug level of 1
const log = document.querySelector("#log");//var with the html id of log
localStorage.setItem("level", JSON.stringify(start_lvl));

function enemy_attack() {
    enemy_damage_handler(enemy.damage);//enemy damage handler, var of enemy damage as function input
}
function player_attack(x) {
    player_damage_handler(attack[x].attack, attack[x].mp_cost);//player damage handler with var for attack damage and attack mp's consumption
}


for (let x = 0; x < attacks.length; x++) {//runs trough the buttons
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
};
function backpack(){}
function run_away(){
    log.innerHTML = "<p class='Log'>" + user.username + " ran away " + "</p>" + log.innerHTML
};

/** ##  START SCRIPT ## **/

function player_damage_handler(damage, consumption) {
    if (enemy.hp <= 0) {
        log.innerHTML = "<p class='Log'>" + enemy.name + " was slain " + "</p>" + log.innerHTML
    } else if (hp.value <= 0) {
        log.innerHTML = "<p class='playerLog'>" + user.username + " has no hp left " + "</p>" + log.innerHTML
    } else if (mp.value <= 0) {
        log.innerHTML = "<p class='playerLog'>" + user.username + " has no mp left " + "</p>" + log.innerHTML

    } else {
        log.innerHTML = "<p class='playerLog'>" + user.username + " hit with " + damage + "</p>" + log.innerHTML
        enemy.hp -= damage;
        mp.value -= consumption;
        loadEnemy();
    }
}
function enemy_damage_handler(damage) {
    if (enemy.hp <= 0) {
        log.innerHTML = "<p class='Log'>" + enemy.name + " was slain " + "</p>" + log.innerHTML
    } else if (hp.value <= 0) {
        log.innerHTML = "<p class='playerLog'>" + user.username + " has no hp left " + "</p>" + log.innerHTML
    } else if (mp.value <= 0) {
        log.innerHTML = "<p class='playerLog'>" + user.username + " has no mp left " + "</p>" + log.innerHTML

    }
    else {
        console.log("hit");
        hp.value -= damage;
        log.innerHTML = "<p class='enemyLog'>enemy hit</p>" + log.innerHTML

    }
}


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
