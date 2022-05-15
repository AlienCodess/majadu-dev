const site_title = "Majadu";
let sub_title;
/** HEADER CREATION **/
function createHeader(){
    let header = document.querySelector("header");
    let header_wrapper = document.createElement("div");
    let header_title = document.createElement("div");
    let header_nav = document.createElement("nav");
    let p = document.createElement("p");
    const header_ul = "  <ul class=\"d-flex justify-content-between list-style-type-none\">\n" +
        "                <li><a class=\"text-decoration-none\" href=\"index.html\">Home</a></li>\n" +
        "                <li><a class=\"text-decoration-none\" href=\"info.html\">Informatie</a></li>\n" +
        "                <li><a class=\"text-decoration-none\" href=\"inloggen.html\">Inloggen</a></li>\n" +
        "                <li><a class=\"text-decoration-none\" href=\"../registreren.html\">Registreren</a></li>\n" +
        "            </ul>"

    //header title
    p.innerHTML = site_title;

    //set classes
    header_wrapper.classList.add("header_wrapper","d-flex", "justify-content-between");
    header_title.classList.add("header_title","w-50");
    header_nav.classList.add("header_nav","w-50");

    header_title.appendChild(p);
    header_wrapper.appendChild(header_title)
    header_nav.innerHTML = header_ul;
    header_wrapper.appendChild(header_nav)
    header.appendChild(header_wrapper)
}

/** LEFT_NAV CREATION **/
function createLeftnav(){
    let main = document.querySelector("main");
    let left_nav = document.createElement("nav");
    let nav_ul = "<h2>Menu</h2>\n" +
        "        <ul class=\"d-flex flex-direction-column list-style-type-none\">\n" +
        "            <!-- GUEST -->\n" +
        "            <li><a class=\"text-decoration-none guest\" href=\"index.html\">Home</a></li>\n" +
        "            <li><a class=\"text-decoration-none guest\" href=\"inloggen.html\">Inloggen</a></li>\n" +
        "            <li><a class=\"text-decoration-none guest\" href=\"../registreren.html\">Registreren</a></li>\n" +
        "\n" +
        "            <!-- MEMBER -->\n" +
        "            <li><a class=\"text-decoration-none member\" href=\"#\">Instellingen</a></li>\n" +
        "            <li><a class=\"text-decoration-none member\" href=\"#\">Uitloggen</a></li>\n" +
        "        </ul>";

    left_nav.classList.add("left_nav");
    left_nav.innerHTML = nav_ul;
    main.appendChild(left_nav)
}

/** FOOTER CREATION **/
function createFooter(){
    let footer = document.querySelector("footer");
    let p = document.createElement("p");
    p.innerHTML = "&copy; Majadu"
    footer.appendChild(p);
}



