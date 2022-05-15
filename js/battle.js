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


const enemy_hp = document.querySelector('#enemyHealth');
localStorage.setItem("hp", "200");
localStorage.setItem("maji", "200");
const username = document.querySelector('.username');
const avatar = document.querySelector('.avatar');
const hp = document.querySelector('#hp');
const mp = document.querySelector('#mp');
const attacks = document.querySelectorAll('.attack');
let Turn = true;
for (let x = 0; x < attacks.length; x++) {
    attacks[x].innerHTML = attack[x].name;
}
function changeTurn() {
    Turn = !Turn;
    return Turn;
}

/** ##  START SCRIPT ## **/

function damage_handler(damage, consumption) {
    if (enemy.hp <= 0) {
        /** ##  START new enemy spawn ## **/
    }
    else {
        mp.value -= consumption;
        enemy.hp -= damage;
        loadEnemy()
    }
};
function enemy_damage_handler(damage) {
    if (hp.value <= 0) {
        /** ##  START new enemy spawn ## **/
    }
    else {
        console.log("hit");
        hp.value -= damage;

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

for (let x = 0; x < attacks.length; x++) {
    if (changeTurn() === false) {
        attacks[x].onclick = function attacks() {
            damage_handler(attack[x].attack, attack[x].mp_cost);
            this.Turn = changeTurn();
            console.log(this.Turn);
        };
    } else if (attacks.Turn === true) {
        console.log("hit");
        enemy_damage_handler(15);
        changeTurn();
    }
}


loadEnemy();
loadUser();