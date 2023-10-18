/**
 * Variables globales que SI podemos usar dentro de una función ;)
 */

let numeroClicsPacman = 0;

function clicPacman() {
  // incremento la variable global clicsPacman
  numeroClicsPacman++;

  // actualizo el text content del nodo adecuado
  document.querySelector("#clics-pacman").textContent = numeroClicsPacman;
}



let numeroClicsFantasma = 0;

function clicFantasma() {
  // incremento la variable global clicsPacman
  numeroClicsFantasma++;

  // actualizo el text content del nodo adecuado
  document.querySelector("#clics-fantasma").textContent = numeroClicsFantasma;
}