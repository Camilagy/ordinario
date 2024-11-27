//Autor: Camila Galvan Torres
//Programa: index.html//
//Lenguaje: Html
//Universidad: Lobos Alamedas
//Fecha: 27/11/2024//
/*document.addEventListener("keydown", function(event){ //Imprimir 

const textoDiv = document.getElementById("texto"); //cAMBIAR TEXTO
if (event.key === "ArrowRight"){ //TECLA RIGHT


    textoDiv.textContent = "derecha."; 
}
if (event.key === "ArrowLeft"){


    textoDiv.textContent = "izquierda."; //TECLA LEFT
}

});
// Función para registrar la tecla presionada
function detectarTecla(event) {
    // Mostrar la tecla presionada en la consola
    console.log('Tecla presionada:', event.key);
}

// Añadir un escuchador de eventos al documento para capturar las teclas
document.addEventListener('keydown', detectarTecla);*/
// Función para detectar la tecla presionada
function detectarTecla() {
    // Escuchar el evento 'keydown' (cuando se presiona una tecla)
    document.addEventListener('keydown', function(event) {
        console.log('Tecla presionada:', event.key);
    });
}

// Llamar la función para empezar a escuchar las teclas
detectarTecla();
