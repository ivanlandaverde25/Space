window.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.container');
    let botonHome = document.getElementById('boton-home');
    let botonDestination = document.getElementById('boton-destination');

    if ( botonHome ){
        botonHome.addEventListener('click', () => {
            console.log("Boton Home clicked");
            // container.style.background = 'url("../assets/Desktop/background-home-desktop.jpg") no-repeat center/cover';
        });
    }
    
    if ( botonDestination ){
        botonDestination.addEventListener('click', () => {
            console.log("Boton Destination clicked");
            // container.style.background = 'url("../assets/Desktop/background-destination-desktop.jpg") no-repeat center/cover';
        });
    }

});