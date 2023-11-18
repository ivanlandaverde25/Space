window.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.container');
    let botonHome = document.getElementById('boton-home');
    let botonDestination = document.getElementById('boton-destination');

    // Opciones de destination
    // Moon
    let menuMoon = document.getElementById('menuMoon');
    let hoverMoon = document.getElementById('hoverMoon');
    let textMoon = document.getElementById('textMoon');
    let clickMoon = 0;

    // Mars
    let menuMars = document.getElementById('menuMars');
    let hoverMars = document.getElementById('hoverMars');
    let textMars = document.getElementById('textMars');
    
    // Europa
    let menuEuropa = document.getElementById('menuEuropa');
    let hoverEuropa = document.getElementById('hoverEuropa');
    let textEuropa = document.getElementById('textEuropa');
    
    // Titan
    let menuTitan = document.getElementById('menuTitan');
    let hoverTitan = document.getElementById('hoverTitan');
    let textTitan = document.getElementById('textTitan');

    const agergarEfectos = (hover, text) => {
        // Agregar acción de hover
        hover.classList.remove("menu-destination-box-hover");
        hover.classList.add("menu-destination-box-active");
            
        // Agregar cambio en texto
        text.classList.remove("menu-destination-box-text-hover");
        text.classList.add("menu-destination-box-text-active");
    };

    const eliminarEfectos = (hover, text) => {
        // Eliminar acción de hover
        hover.classList.remove("menu-destination-box-active");
        hover.classList.add("menu-destination-box-hover");
        
        // Eliminar cambio de texto
        text.classList.remove("menu-destination-box-text-active");
        text.classList.add("menu-destination-box-text-hover");
    };

    if ( menuMoon ){
        menuMoon.addEventListener('click', () => {
            // Agregar efectos a Moon
            agergarEfectos(hoverMoon, textMoon);

            // Eliminar efecto a todos los demás
            // Mars
            eliminarEfectos(hoverMars, textMars);
            // Europa
            eliminarEfectos(hoverEuropa, textEuropa);
            // Titan
            eliminarEfectos(hoverTitan, textTitan);
        });
    }

    if ( menuMars ){
        menuMars.addEventListener('click', () => {
            // Agregando elemento a Mars
            agergarEfectos(hoverMars, textMars);
            
            // Eliminando elementos a todo lo demás
            // Moon
            eliminarEfectos(hoverMoon, textMoon);
            // Europa
            eliminarEfectos(hoverEuropa, textEuropa);
            // Titan
            eliminarEfectos(hoverTitan, textTitan);
        });
    }
    
    if (menuEuropa){
        menuEuropa.addEventListener('click', () => {
            // Agregando elemento a Europa
            agergarEfectos(hoverEuropa, textEuropa);
            
            // Eliminando elementos a todo lo demás
            // Moon
            eliminarEfectos(hoverMoon, textMoon);
            // Mars
            eliminarEfectos(hoverMars, textMars);
            // Titan
            eliminarEfectos(hoverTitan, textTitan);

        });
    }

    if (menuTitan){
        menuTitan.addEventListener('click', () => {
            // Agregando elemento a Titan
            agergarEfectos(hoverTitan, textTitan);
            
            // Eliminando elementos a todo lo demás
            // Moon
            eliminarEfectos(hoverMoon, textMoon);
            // Mars
            eliminarEfectos(hoverMars, textMars);
            // Europa
            eliminarEfectos(hoverEuropa, textEuropa);

        });
    }

});