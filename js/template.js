const site_title = "Majadu";
let sub_title;

/** HEADER CREATION **/
function createHeader() {
    let header = document.querySelector("header");
    let header_wrapper = document.createElement("div");
    let header_title = document.createElement("div");
    let header_nav = document.createElement("nav");
    let p = document.createElement("p");
    const header_ul = "  <ul class=\"d-flex justify-content-between list-style-type-none\">\n" +
        "                <li><a class=\"text-decoration-none\" href=\"index.html\">Home</a></li>\n" +
        "                <li><a class=\"text-decoration-none\" href=\"info.html\">Informatie</a></li>\n" +
        "                <li><a class=\"text-decoration-none\" href=\"inloggen.html\">Inloggen</a></li>\n" +
        "                <li><a class=\"text-decoration-none\" href=\"registreren.html\">Registreren</a></li>\n" +
        "            </ul>"

    //header title
    p.innerHTML = site_title;

    //set classes
    header_wrapper.classList.add("header_wrapper", "d-flex", "justify-content-between");
    header_title.classList.add("header_title", "w-50");
    header_nav.classList.add("header_nav", "w-50");

    header_title.appendChild(p);
    header_wrapper.appendChild(header_title)
    header_nav.innerHTML = header_ul;
    header_wrapper.appendChild(header_nav)
    header.appendChild(header_wrapper)
}

/** LEFT_NAV CREATION **/
function createLeftnav() {
    let main = document.querySelector("main");
    let left_nav = document.createElement("nav");
    let nav_ul = "<h2>Menu</h2>\n" +
        "        <ul class=\"d-flex flex-direction-column list-style-type-none\">\n" +
        "            <!-- GUEST -->\n" +
        "            <li><a class=\"text-decoration-none guest\" href=\"index.html\">Home</a></li>\n" +
        "            <li><a class=\"text-decoration-none guest\" href=\"inloggen.html\">Inloggen</a></li>\n" +
        "            <li><a class=\"text-decoration-none guest\" href=\"registreren.html\">Registreren</a></li>\n" +
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
function createFooter() {
    let footer = document.querySelector("footer");
    let p = document.createElement("p");
    p.innerHTML = "&copy; Majadu"
    footer.appendChild(p);
}


document.addEventListener('alpine:init', () => {
    Alpine.data('header', () => ({

        site_title: 'Majadu',
        html: "<div class='header_wrapper d-flex justify-content-between'>" +
            "                  <div class='header_title w-50'>" +
            "                        <p x-text='site_title'></p>" +
            "                    </div>\n" +
            "                    <nav class='header_nav w-50'>" +
            "                        <ul x-data='header'  class='d-flex justify-content-between list-style-type-none'>" +
            "                            <template x-for='link in top_nav'>" +
            "                                <li><a x-text='link.name' class='text-decoration-none' x-data :href='link.link'></a></li>" +
            "                        </template>" +
            "                    </ul>" +
            "                </nav>" +
            "</div>",
        top_nav: [
            {
                id: 1,
                name: 'Home',
                link: 'index.html'
            },
            {
                id: 2,
                name: 'Info',
                link: 'info.html'
            }
            ,
            {
                id: 3,
                name: 'Inloggen',
                link: 'inloggen.html'
            }
            ,
            {
                id: 4,
                name: 'Registreren',
                link: 'registreren.html'
            }


        ],

    }));
    Alpine.data('main', () => ({
            left_nav: "<nav class='left_nav'>" +
                "<h2>Menu</h2>" +
                "<ul x-data='main' class='d-flex flex-direction-column list-style-type-none'>" +
                "<template x-for='links in l_nav'>" +
                "<li><a x-text='links.name' class='text-decoration-none' x-data :href='links.link'></a></li>" +
                "</template>" +
                "</ul>" +
                "</nav>",
            l_nav: [
                {
                    id: 1,
                    name: 'Home',
                    link: 'index.html'
                },
                {
                    id: 2,
                    name: 'Inloggen',
                    link: 'inloggen.html'
                }
                ,
                {
                    id: 3,
                    name: 'Registreren',
                    link: 'registreren.html'
                }
            ]
        }

    ));
    Alpine.data('footer',()=>({
        p: '<p>&copy; Majadu</p>'
    }))
})
;