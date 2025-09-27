// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {

    // Selecciona el header (la barra de navegación)
    const header = document.querySelector('.header');

    // Función para cambiar el estilo del header al hacer scroll
    const handleScroll = () => {
        if (window.scrollY > 50) {
            // Si el usuario ha bajado más de 50px, añade la clase 'scrolled'
            header.classList.add('scrolled');
        } else {
            // Si está en la parte superior, quita la clase 'scrolled'
            header.classList.remove('scrolled');
        }
    };

    // Agrega un 'event listener' para el evento 'scroll' en la ventana
    window.addEventListener('scroll', handleScroll);


    // --- Smooth Scroll para los enlaces de navegación ---
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previene el comportamiento por defecto del enlace (salto brusco)
            e.preventDefault();

            // Obtiene el ID de la sección a la que queremos ir (ej. '#nosotros')
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Si la sección existe, desplázate suavemente hacia ella
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});