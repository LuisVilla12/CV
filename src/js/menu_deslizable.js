document.addEventListener('DOMContentLoaded', function() {
    MenuDesplegable();
});
const hero = document.querySelector('.hero');
const body = document.querySelector('body');
// aaa
function MenuDesplegable() {
    const menu = document.querySelector('.menu');
    const divMenuDeslizable = document.createElement('DIV');

    menu.onclick = function() {
        // Agregar o quita el body fijo
        if (body.classList.contains('fijarbody')) {
            limpiarBotones();
            return;
        }

        divMenuDeslizable.classList.add('contenedor-menu');
        const opcion1 = document.createElement('A');
        const opcion2 = document.createElement('A');
        const opcion3 = document.createElement('A');
        const opcion4 = document.createElement('A');
        const opcion5 = document.createElement('A');

        opcion1.href = "#sobreMi";
        opcion2.href = "#conocimientos";
        opcion3.href = "#intereses";
        opcion4.href = "#proyectos";
        opcion5.href = "#contacto";

        opcion1.innerHTML = '<i class="fas fa-user"></i>Sobre mi';
        opcion2.innerHTML = '<i class="fas fa-laptop-code"></i>Conocimientos';
        opcion3.innerHTML = '<i class="fas fa-coffee"></i>Intereses';
        opcion4.innerHTML = '<i class="fas fa-folder-open"></i>Proyectos';
        opcion5.innerHTML = '<i class="fas fa-folder-open"></i>Contactame';

        divMenuDeslizable.appendChild(opcion1);
        divMenuDeslizable.appendChild(opcion2);
        divMenuDeslizable.appendChild(opcion3);
        divMenuDeslizable.appendChild(opcion4);
        divMenuDeslizable.appendChild(opcion5);

        hero.appendChild(divMenuDeslizable);
        body.classList.add('fijarbody');

        clickABotones();
        scrollMovil();
    }
    divMenuDeslizable.onclick = function() {
        limpiarBotones();
    }
}

function clickABotones() {
    const enlaces = document.querySelectorAll('.contenedor-menu a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            const seccionIr = e.target.attributes.href.value;
            if (seccionIr === '#sobreMi') {
                animacionesIMG();
            } else if (seccionIr === '#conocimientos') {
                iconosConocimientos();
            } else if (seccionIr === '#intereses') {
                iconosGustosEducativos();
                setTimeout(() => {
                    iconosGustosPersonales();
                }, 1000);
            } else if (seccionIr === '#proyectos') {}
            limpiarBotones();
        });
    })
}

function limpiarBotones() {
    const divMenuDeslizable = document.querySelector('.contenedor-menu');
    const enlaces = document.querySelectorAll('.contenedor-menu a');
    // quitar la clase de fijar body
    body.classList.remove('fijarbody');
    // seleccionar y eliminar todos los enlaces del menu
    enlaces.forEach(enlace => {
        divMenuDeslizable.removeChild(enlace);
    });
    // quitar el overlay del menu
    hero.removeChild(divMenuDeslizable);
}