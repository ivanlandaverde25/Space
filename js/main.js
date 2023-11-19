window.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.container');
    let botonHome = document.getElementById('boton-home');
    let botonDestination = document.getElementById('boton-destination');

    // Opciones de destination
    // Moon
    let menuMoon = document.getElementById('menuMoon');
    let hoverMoon = document.getElementById('hoverMoon');
    let textMoon = document.getElementById('textMoon');

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

    let valorActivo = 0;

    // Slide de imagenes
    slideImageDestination = document.getElementById('main-container-destination-slide-image');
    slideDestination = document.getElementById('slide');

    // Funcion para agregar efectos a los tabs de destination
    const agergarEfectos = (hover, text) => {
        // Agregar acción de hover
        hover.classList.remove("menu-destination-box-hover");
        hover.classList.add("menu-destination-box-active");
        
        // Agregar cambio en texto
        text.classList.remove("menu-destination-box-text-hover");
        text.classList.add("menu-destination-box-text-active");
    };
    
    // Funcion para eliminar efectos a los tabs de destination
    const eliminarEfectos = (hover, text) => {
        // Eliminar acción de hover
        hover.classList.remove("menu-destination-box-active");
        hover.classList.add("menu-destination-box-hover");
        
        // Eliminar cambio de texto
        text.classList.remove("menu-destination-box-text-active");
        text.classList.add("menu-destination-box-text-hover");
    };

    // Funcion para eliminar valores de clases del slide
    const sliderRemoveClass = (val1, val2, val3, val4) => {
        if (valorActivo == val1 ){
            slideDestination.classList.remove("slide-move0");
        } else if (valorActivo == val2 ){
            slideDestination.classList.remove("slide-move100");
        } else if (valorActivo == val3 ){
            slideDestination.classList.remove("slide-move200");
        } else if (valorActivo == val4 ){
            slideDestination.classList.remove("slide-move300");
        }
    };

    if ( menuMoon ){
        menuMoon.addEventListener('click', () => {

            sliderRemoveClass(0,1,2,3);
            slideDestination.classList.add("slide-move0");
            valorActivo = 0;

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
            
            sliderRemoveClass(0,1,2,3);
            slideDestination.classList.add("slide-move100");
            valorActivo = 1;

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
    
    if ( menuEuropa ){
        menuEuropa.addEventListener('click', () => {
            
            sliderRemoveClass(0,1,2,3);
            slideDestination.classList.add("slide-move200");
            valorActivo = 2;
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
    
    if ( menuTitan ){
        menuTitan.addEventListener('click', () => {

            sliderRemoveClass(0,1,2,3);
            slideDestination.classList.add("slide-move300");
            valorActivo = 3;
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