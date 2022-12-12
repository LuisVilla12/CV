document.addEventListener('DOMContentLoaded', function() {
    animacionesIMG();
    crearIcono();
    iconosConocimientos();
    iconosGustosEducativos();
    iconosGustosPersonales();
});

function animacionesIMG() {
    const animaciones = document.querySelectorAll('.animar');
    const metodoObserver = new IntersectionObserver(function(entries) {
        threshold: .5
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // console.log(entry.target);
                entry.target.style.animation = 'mover 4s ease';
                setTimeout(() => {
                    entry.target.style.animation = '';
                }, 4000);
            }
        })
    });
    animaciones.forEach(animar => {
        metodoObserver.observe(animar);
    })
}

function crearIcono() {
    const finPantalla = document.querySelector('.conocimientos');
    //crear icono el final de la pantalla
    const icono = document.createElement('A');
    icono.innerHTML = '<i class="fas fa-arrow-circle-up"></i>'
    icono.href = "#inicio";
    icono.classList.add('none');
    // añadirlo al body
    const body = document.querySelector('body');
    body.appendChild(icono);

    // Cuando lo intersecte
    const metodoObserver2 = new IntersectionObserver(function(entries) {
        threshold: 1
        if (entries[0].isIntersecting) {
            // por si no da click
            const iconoExistente = document.querySelector('.btnfijo');
            if (iconoExistente) {
                icono.classList.remove('btnfijo');
                return;
            }
            icono.classList.add('btnfijo');

            // para que de click lo regrese al inicio
            icono.onclick = function(e) {
                e.preventDefault();
                const seccion = document.querySelector(icono.attributes.href.value);
                seccion.scrollIntoView({
                    behavior: 'smooth'
                });
                // quitar la clase despues del scroll
                setTimeout(() => {
                    icono.classList.remove('btnfijo');
                    console.log('listo');
                }, 1000);
            }
        }
    });
    metodoObserver2.observe(finPantalla);
}


function iconosConocimientos() {
    const iconos = document.querySelectorAll('.icono i');
    const metodoObserver = new IntersectionObserver(function(entries) {
        threshold: 1
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'prueba 2s ease';
                setTimeout(() => {
                    entry.target.style.animation = '';
                }, 2000);
            }
        })
    });
    iconos.forEach(animar => {
        metodoObserver.observe(animar);
    })
}

function iconosGustosEducativos() {
    const iconos = document.querySelectorAll('.iconos-educativos li i');
    const metodoObserver = new IntersectionObserver(function(entries) {
        threshold: 1
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'zoom 3s ease';
                setTimeout(() => {
                    entry.target.style.animation = '';
                }, 2000);
            }
        })
    });
    iconos.forEach(animar => {
        metodoObserver.observe(animar);
    })
}

function iconosGustosPersonales() {
    const iconos = document.querySelectorAll('.iconos-personales li i');
    const metodoObserver = new IntersectionObserver(function(entries) {
        threshold: 1
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'zoom 3s ease';
                setTimeout(() => {
                    entry.target.style.animation = '';
                }, 2000);
            }
        })
    });
    iconos.forEach(animar => {
        metodoObserver.observe(animar);
    })
}