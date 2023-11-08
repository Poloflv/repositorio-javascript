let menuVisible = false;
// Funcion que oculta o muestra el menu

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList="";
        menuVisible= false
    } else {
        document.getElementById("nav").classList="responsive";
        menuVisible= true
    }
}

function seleccionar() {
    // oculto el menu
    document.getElementById("nav").classList= "";
    menuVisible= false;
}
// animaciones de las habilidades

// function efectoHabilidades() {
//     var skills = document.getElementById("skills");
//     var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
//     if(distancia_skills >= 300 ){
//         let habilidades = document.getElementsByClassName("progreso");
//         habilidades[0].className.add("javascript");
//         habilidades[1].classList.add("htmlcss");
//         habilidades[2].classList.add("bubble");
//         habilidades[3].classList.add("flutter");
//         habilidades[4].classList.add("react");
//         habilidades[5].classList.add("comunicacion");
//         habilidades[6].classList.add("trabajo");
//         habilidades[7].classList.add("creatividad");
//         habilidades[8].classList.add("dedicacion");
//         habilidades[9].classList.add("motivacion");
//     }
// }

// window.onscroll = function() {
//     efectoHabilidades();
// } 