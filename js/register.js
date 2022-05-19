let d = new Date();
function register() {
    const xhr = new XMLHttpRequest();
    xhr.onload = onloadRegister;
    xhr.open("GET", "./data/members.json", true);
    xhr.send(null);

    function onloadRegister() {
        let username, date, password, password_repeat, token, avatar, u_class, karma,
        members_username, members_token, members_rank, member_id;
        let json = JSON.parse(this.responseText);
        let members = json["members"];

        username = document.querySelector("#username").value;
        date = document.querySelector("#date").value;
        password = document.querySelector("#password").value;
        password_repeat = document.querySelector("#password_repeat").value;
        token = document.querySelector("#token").value;
        avatar = document.querySelector("#avatar").value;
        u_class = document.querySelector("#class").value;
        karma = document.querySelector("#karma").value;


        /** CHECK AGE **/
        if (date === "") {
            console.log("nok");
        } else if (date.slice(0, 4) > d.getFullYear() - 13) {
            console.log("Je bent te jong");
        } else {
            /*CHECK USERNAME*/
            for (let x = 0; x < members.length; x++) {
                members_username = members[x].username;
                members_token = members[x].token;
                members_rank = members[x].rank;
                if (username === "") {
                    console.log("gebruikersnaam leeg")
                } else if (username !== members_username) {
                    console.log("username nok")
                } else {
                    console.log("gebruikers naam ok")
                    member_id = x;
                    break;
                }
            }
            /* PASSWORD */
            if (password === "" || password_repeat === "") {
                console.log("ww leeg")

            } else if (password !== password_repeat) {
                console.log("ww niet overeen")
            } else if (password === members_token) {
                console.log("mag niet hetzelfde zijn als de token")

            } else {
                console.log("ww ok")
            }
            if (token === "") {
                console.log("token leeg")
            } else if (token !== members_token) {
                console.log("token komt niet overeen")
            } else {
                console.log("token ok");
                //user data
                localStorage.setItem("id", member_id);
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                localStorage.setItem("date", date);
                localStorage.setItem("token", token);
                localStorage.setItem("avatar", avatar);
                localStorage.setItem("update-version", 0);

                //user info
                localStorage.setItem("status", "offline");
                localStorage.setItem("rank", members_rank);
                localStorage.setItem("location", "");
                localStorage.setItem("messages", "");
                localStorage.setItem("notifications", "");

                //character info
                localStorage.setItem("level", "1");
                localStorage.setItem("class", u_class);
                localStorage.setItem("speciality", "none");
                localStorage.setItem("karma", karma);

                //character stats
                localStorage.setItem("hp", 100);
                localStorage.setItem("max-hp", 100);
                localStorage.setItem("mp", 100);
                localStorage.setItem("max-mp", 100);
                localStorage.setItem("focus", 1);
                localStorage.setItem("power", 1);
                localStorage.setItem("source", 1);

                //character
                localStorage.setItem("weapon", "empty");
                localStorage.setItem("relic", "empty");
                localStorage.setItem("head", "empty");
                localStorage.setItem("body", "empty");
                localStorage.setItem("pet", "empty");
                localStorage.setItem("spell-holder", "empty");
                localStorage.setItem("active-spells", "empty");

                //inventory
                localStorage.setItem("gold", 0);
                localStorage.setItem("crystals", 0);
                localStorage.setItem("items", 0);
                localStorage.setItem("max-items", 5);
                localStorage.setItem("inventory", "");
            }
        }
    }


}

