let numeroSecreto = generarNumeroSecreto();



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verficarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    promendio();
    console.log(numeroUsuario)
    console.log(numeroSecreto);
    console.log(numeroSecreto === numeroUsuario);
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento('h1', "Juego del amigo secreto!");
asignarTextoElemento('p', "Ingresa un numero del 1 al 100");

