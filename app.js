let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSortead = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}
function verificarIntento() {
     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
     if (numeroDeUsuario === numeroSecreto){
          asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos=== 1) ? 'intento' : 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
        // el usuario no acerto.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
                asignarTextoElemento('p', 'El numero secreto es mayor');
         }
         intentos ++;
         limpiarCaja();
    }
     return;
}
function limpiarCaja(){
document.querySelector('#valorUsuario').value = '';

}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSortead);
// si ya sorteamos todos los numeros
if (listaNumeroSortead.length == numeroMaximo) {
 asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
} else {
    // si el numero generado esta incluido en la lista 
    if (listaNumeroSortead.includes(numeroGenerado)){
return generarNumeroSecreto();
    } else {
        listaNumeroSortead.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
function condicionesIniciales(){
asignarTextoElemento('h1', 'Juego del Numero Secreto');
asignarTextoElemento('p', `indica un numero el 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos=1;}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar num aleatorio
    
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();
