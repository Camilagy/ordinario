function detectarTecla() {
    // Escuchar el evento 'keydown' (cuando se presiona una tecla)
    document.addEventListener('keydown', function(event) {
        console.log('Tecla presionada:', event.key);
    });
}

// Llamar la función para empezar a escuchar las teclas
detectarTecla();
