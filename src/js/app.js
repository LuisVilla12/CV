document.addEventListener('DOMContentLoaded', function() {
    scroll();
    navFija();
});

function navFija() {
    const barra = document.querySelector('.site-header');
    const metodoObserver = new IntersectionObserver(function(entries) {
        // entries da la info del elemento a observar en posicion 0
        // metodo'is.Intersecting' es para sabe si esta visicble o no
        if (entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });
    // Elemento a observar con el metodo "observe"
    // metodoObserver.observe(document.querySelector('.hero'));
}

function scroll() {
    const enlaces = document.querySelectorAll('.nav a');
    // iterar en todos los enlaces
    enlaces.forEach(function(enlace) {
        // saber en cual enlace le dio click
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            // sacar el atributo
            const seccion = document.querySelector(e.target.attributes.href.value);
            // cambiar el efecto del scroll
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function scrollMovil() {
    const enlaces = document.querySelectorAll('.contenedor-menu a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}