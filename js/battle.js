let player_tile = 6;
let enemy_tile = 28;
let turn = true;
let tile = document.querySelectorAll('.tile');
let player = document.querySelectorAll('.player_tile');
let enemy = document.querySelectorAll('.enemy_tile');
let map_size = tile.length;

function enemyTurn(){

    let random = Math.floor(Math.random() * map_size);
    console.log(random , enemy_tile)
    function active() {
        for (var x = 0; x < enemy.length; x++) {
            enemy[x].classList.remove("active");
        }
        enemy[enemy_tile].classList.add("active");
        turn = true;
    }
    if (random === enemy_tile+1){
        enemy_tile = random;
        active()
    }
    else if (random === enemy_tile-1){
        enemy_tile = random;
        active()
    }
    else if (random === enemy_tile-7){
        enemy_tile = random;
        active()
    }
    else if (random === enemy_tile+7){
        enemy_tile = random;
        active()
    } else {
        enemyTurn()
    }



}
function onClick() {
    if (turn === true) {
        let clicked_tile = parseInt(this.id);

        function active() {
            for (var x = 0; x < player.length; x++) {
                player[x].classList.remove("active");
            }
            player[player_tile].classList.add("active");
            turn = false;
            enemyTurn();
        }

        if (clicked_tile === player_tile) {
            console.log("You cant click here");
        } else if (clicked_tile === player_tile + 1) {
            console.log("1 step achterwaars")
            player_tile = clicked_tile;

        } else if (clicked_tile === player_tile - 1) {
            console.log("1 step voorwaarts")
            player_tile = clicked_tile;
        } else if (clicked_tile === player_tile + 7) {
            console.log("1 step naar beneden")
            player_tile = clicked_tile;
        } else if (clicked_tile === player_tile - 7) {
            console.log("1 step naar boven")
            player_tile = clicked_tile;
        }
        active()

    }
    else if(turn === false ){
        console.log('not your turn')
    }

}


for (let x = 0; x < tile.length; x++) {
    if (x === player_tile) {
        player[x].classList.add("active")
    } else if (x === enemy_tile) {
        enemy[x].classList.add("active")
    }
    tile[x].id = `${x}`;
    tile[x].addEventListener('click', onClick)
}




