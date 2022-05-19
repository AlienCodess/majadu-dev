let user = {
    // user data
    "id": localStorage.getItem("id"),
    "username": localStorage.getItem("username"),
    "password": localStorage.getItem("password"),
    "date": localStorage.getItem("date"),
    "token": localStorage.getItem("token"),
    "update-version": localStorage.getItem("update-version"),

    //user info
    "status": localStorage.getItem("status"), //online, offline, banned
    "rank": localStorage.getItem("rank"),
    "location": localStorage.getItem("location"),
    "messages": localStorage.getItem("messages"),
    "notifications": localStorage.getItem("notifications"),

    //character info
    "level": localStorage.getItem("level"),
    "karma": localStorage.getItem("karma"),
    "class": localStorage.getItem("class"),
    "speciality": localStorage.getItem("speciality"),

    //character stats
    "hp": localStorage.getItem("hp"),
    "max_hp": localStorage.getItem("max-hp"),
    "mp": localStorage.getItem("maji"),
    "max_mp": localStorage.getItem("max-mp"),
    "power": localStorage.getItem("power"),
    "focus": localStorage.getItem("focus"),
    "source": localStorage.getItem("source"),

    //character
    "weapon": localStorage.getItem("weapon"),
    "relic": localStorage.getItem("relic"),
    "head": localStorage.getItem("head"),
    "body": localStorage.getItem("body"),
    "feet": localStorage.getItem("feet"),
    "pet": localStorage.getItem("pet"),
    "spell-holder": localStorage.getItem("spell-holder"),
    "active-spells": localStorage.getItem("active-spells"),

    //inventory
    "gold": localStorage.getItem("gold"),
    "crystals": localStorage.getItem("crystals"),
    "items": localStorage.getItem("items"),
    "max_items": localStorage.getItem("max-items"),
    "inventory": localStorage.getItem("inventory"),


};

const offline = document.querySelectorAll(".offline");
const online = document.querySelectorAll(".online");

/** SET UP TITLE **/
let site_title = "Majadu";
let sub_title = document.querySelector("h1").innerHTML;
document.title = `${site_title} - ${sub_title}`;

/** CHECK STATUS **/


window.addEventListener("load", () =>{
    let x;
    switch (user.status){
        default:
            console.log("error");
            break;
        case "offline":
            for (x = 0; x < offline.length;x++){
                offline[x].className = this.className.replace("active","");
            }
    }
})
