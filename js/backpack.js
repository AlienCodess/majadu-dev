let inventory = document.querySelector('#inventory');
/*let et = ["item1","item2"];
localStorage.setItem("inventory", JSON.stringify(et))*/
let p_inventory = JSON.parse(user.inventory);

let items = document.querySelector('#items');
let max_items = document.querySelector('#max_items');
let gold = document.querySelector('#gold');
let crystals = document.querySelector('#crystals');

let p = document.createElement("p");
items.innerHTML = p_inventory.length;
max_items.innerHTML = user.max_items;
gold.innerHTML = user.gold;
crystals.innerHTML = user.crystals;

if(p_inventory.length <= 0){
    console.log("Inventory is leeg")
} else if (p_inventory.length > 0){
    for(var x = 0; x < p_inventory.length; x++){
        p.innerHTML += p_inventory[x] +"<br>";
        inventory.appendChild(p);
    }
}
