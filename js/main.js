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

    // Slide de información
    slideInfoStar = document.getElementById('slide-info-star');

    // Funcion para agregar efectos a los tabs de destination
    const agergarEfectos = ( hover, text ) => {
        // Agregar acción de hover
        hover.classList.remove("menu-destination-box-hover");
        hover.classList.add("menu-destination-box-active");
        
        // Agregar cambio en texto
        text.classList.remove("menu-destination-box-text-hover");
        text.classList.add("menu-destination-box-text-active");
    };
    
    // Funcion para eliminar efectos a los tabs de destination
    const eliminarEfectos = ( hover, text ) => {
        // Eliminar acción de hover
        hover.classList.remove("menu-destination-box-active");
        hover.classList.add("menu-destination-box-hover");
        
        // Eliminar cambio de texto
        text.classList.remove("menu-destination-box-text-active");
        text.classList.add("menu-destination-box-text-hover");
    };

    // Funcion para eliminar valores de clases del slide
    const sliderRemoveClass = ( val1, val2, val3, val4 ) => {
        if (valorActivo == val1 ){
            slideDestination.classList.remove("slide-move0");
            slideInfoStar.classList.remove("slide-move0"); //
        } else if (valorActivo == val2 ){
            slideDestination.classList.remove("slide-move100");
            slideInfoStar.classList.remove("slide-move100"); //
        } else if (valorActivo == val3 ){
            slideDestination.classList.remove("slide-move200");
            slideInfoStar.classList.remove("slide-move200"); //
        } else if (valorActivo == val4 ){
            slideDestination.classList.remove("slide-move300");
            slideInfoStar.classList.remove("slide-move300"); //
        }
    };

    if ( menuMoon ){
        menuMoon.addEventListener('click', () => {

            sliderRemoveClass(0,1,2,3);
            slideDestination.classList.add("slide-move0");
            slideInfoStar.classList.add("slide-move0");
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
            slideInfoStar.classList.add("slide-move100");
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
            slideInfoStar.classList.add("slide-move200");
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
            slideInfoStar.classList.add("slide-move300");
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


    // FUNCIONES DE LA VISTA CREW

    // INFO
    const itemCrewInfo = document.getElementById('itemCrewInfo');
    
    // IMAGE
    const itemCrewImage = document.getElementById('itemCrewImage');

    // Opciones de paso de slide
    const itemCrew1 = document.getElementById('itemCrew1');
    const itemCrew2 = document.getElementById('itemCrew2');
    const itemCrew3 = document.getElementById('itemCrew3');
    const itemCrew4 = document.getElementById('itemCrew4');
    valorActivoSlideCrew = 0;

    // Funcion para eliminar valores de clases del slide
    const sliderRemoveClassCrew = ( val1, val2, val3, val4 ) => {
        if (valorActivo == val1 ){
            itemCrewInfo.classList.remove("move0");
            itemCrewImage.classList.remove("move0");
            // slideInfoStar.classList.remove("move0"); //
        } else if (valorActivo == val2 ){
            itemCrewInfo.classList.remove("move100");
            itemCrewImage.classList.remove("move100");
            // slideInfoStar.classList.remove("move100"); //
        } else if (valorActivo == val3 ){
            itemCrewInfo.classList.remove("move200");
            itemCrewImage.classList.remove("move200");
            // slideInfoStar.classList.remove("move200"); //
        } else if (valorActivo == val4 ){
            itemCrewInfo.classList.remove("move300");
            itemCrewImage.classList.remove("move300");
            // slideInfoStar.classList.remove("move300"); //
        }
    };

    // Funcion para agregar efectos a los tabs de destination
    const agergarEfectosCrew = ( hover, text ) => {
        // Agregar acción de hover
        hover.classList.remove("menu-destination-box-hover");
        hover.classList.add("menu-destination-box-active");
        
        // Agregar cambio en texto
        text.classList.remove("menu-destination-box-text-hover");
        text.classList.add("menu-destination-box-text-active");
    };
    
    // Funcion para eliminar efectos a los tabs de destination
    const eliminarEfectosCrew = ( hover, text ) => {
        // Eliminar acción de hover
        hover.classList.remove("menu-destination-box-active");
        hover.classList.add("menu-destination-box-hover");
        
        // Eliminar cambio de texto
        text.classList.remove("menu-destination-box-text-active");
        text.classList.add("menu-destination-box-text-hover");
    };



    // Opcion de slide 1
    if ( itemCrew1 ){
        itemCrew1.addEventListener('click', () => {
            console.log("first")
            sliderRemoveClassCrew(0,1,2,3);
            itemCrewInfo.classList.add("move0");
            itemCrewImage.classList.add("move0");
            valorActivoSlideCrew = 0;
        });
    }

    // Opcion de slide 2
    if ( itemCrew2 ){
        itemCrew2.addEventListener('click', () => {
            console.log("first2")
            sliderRemoveClassCrew(0,1,2,3);
            itemCrewInfo.classList.add("move100");
            itemCrewImage.classList.add("move100");
            valorActivoSlideCrew = 1;
        });
    }

    // Opcion de slide 3
    if ( itemCrew3 ){
        itemCrew3.addEventListener('click', () => {
            console.log("first3")
            sliderRemoveClassCrew(0,1,2,3);
            itemCrewInfo.classList.add("move200");
            itemCrewImage.classList.add("move200");
            valorActivoSlideCrew = 2;
        });
    }

    // Opcion de slide 4
    if ( itemCrew4 ){
        itemCrew4.addEventListener('click', () => {
            console.log("first4")
            sliderRemoveClassCrew(0,1,2,3);
            itemCrewInfo.classList.add("move300");
            itemCrewImage.classList.add("move300");
            valorActivoSlideCrew = 3;
        });
    }
});












// Seccion Technology
// Botones
const buttonTechnology1 = document.getElementById('technology-slide-button1');
const buttonTechnology2 = document.getElementById('technology-slide-button2');
const buttonTechnology3 = document.getElementById('technology-slide-button3');

// SlideInfo
const slideInfo = document.getElementById('slideInfoTechnology');

const eliminarEfectoBotonTechnology = (boton) => {
    if (boton == buttonTechnology1){

        buttonTechnology2.classList.remove("button-technology-active");
        buttonTechnology2.classList.add("button-technology-hover");

        buttonTechnology3.classList.remove("button-technology-active");
        buttonTechnology3.classList.add("button-technology-hover");

    } else if(boton == buttonTechnology2){

        buttonTechnology1.classList.remove("button-technology-active");
        buttonTechnology1.classList.add("button-technology-hover");

        buttonTechnology3.classList.remove("button-technology-active");
        buttonTechnology3.classList.add("button-technology-hover");

    } else {

        buttonTechnology2.classList.remove("button-technology-active");
        buttonTechnology2.classList.add("button-technology-hover");

        buttonTechnology1.classList.remove("button-technology-active");
        buttonTechnology1.classList.add("button-technology-hover");

    }

    boton.classList.remove("button-technology-hover");
    boton.classList.add("button-technology-active");
};

if ( buttonTechnology1){
    buttonTechnology1.addEventListener('click', () => {
        eliminarEfectoBotonTechnology(buttonTechnology1);

        slideInfo.classList.remove("slide-info-item-100");
        slideInfo.classList.remove("slide-info-item-200");
        slideInfo.classList.add("slide-info-item-0");
    });
}

if ( buttonTechnology2){
    buttonTechnology2.addEventListener('click', () => {
        eliminarEfectoBotonTechnology(buttonTechnology2);

        slideInfo.classList.remove("slide-info-item-0");
        slideInfo.classList.remove("slide-info-item-200");
        slideInfo.classList.add("slide-info-item-100");
    });
}

if ( buttonTechnology3){
    buttonTechnology3.addEventListener('click', () => {
        eliminarEfectoBotonTechnology(buttonTechnology3);

        slideInfo.classList.add("slide-info-item-200");
        slideInfo.classList.remove("slide-info-item-100");
        slideInfo.classList.remove("slide-info-item-0");

    });




}