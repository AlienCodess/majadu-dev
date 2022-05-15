
function HP_handler(damage){
    user.current_HP -= damage;
    console.log(user.current_HP);
}
function loadUser(){
    user.current_HP = user.max_HP;
    user.current_MP = user.max_MP;
}

button = document.querySelector('.button');

button.onclick = function attacks(){
    console.log(user.current_HP);
    HP_handler(15);
}


loadUser();