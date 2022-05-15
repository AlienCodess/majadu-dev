let title, subtitle;
let user = {
    // user data
    "id": localStorage.getItem("id"),
    "username": localStorage.getItem("username"),
    "password": localStorage.getItem("password"),
    "date": localStorage.getItem("date"),
    "token": localStorage.getItem("token"),

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

/** SET UP TITLE **/
title = "Majadu";
subtitle = document.querySelector("h1").innerHTML;
document.title = `${title} - ${subtitle}`;