/**
 * Completa cada ejercicio. Solo necesitas una línea de código JavaScript para cada ejercicio.
 *
 *  * REsultado deseado: https://oscarm.tinytake.com/msc/ODgxNzI5N18yMjI0ODE2OQ
 *
 **/

/**
 * Cambia el título de la página a rojo usando un estilo en línea
 */

let h1 = document.querySelector('h1').style.color = "red"; document.querySelector('h1').style.fontSize = "48px";



/**
 * Cambia el tamaño del título de la página a 48px usando un estilo en línea
 */

    // hecho junto al apartado anterior

/**
 * Muestra por console.log el texto de la caja 2
 */

let caja = document.querySelector('#caja-2').textContent;

console.log(caja);

/**
 * Cambia el color del borde del párrafo p.intro a verde usando un estilo en línea
 */

let intro = document.querySelector('.intro').style.border = "solid green 20px";



/**
 * Elimina la clase "estilo-3" de la última caja.
 * Ayuda: https://www.w3schools.com/howto/howto_js_remove_class.asp
 */

let ultima = document.getElementById('ultimo');
            ultima.classList.remove("estilo-3")



/**
 * Añade la clase CSS "ocultar" al penúltimo párrafo
 * Ayuda: https://simpledev.io/lesson/add-class-js/ 
 *        https://www.w3schools.com/cssref/sel_nth-of-type.php (usando esto no hace falta añadir una id al html)
 * 
 * BONUS: Haz el ejercicio sin modificar el ex1.html
 */
  
let newCSS = document.querySelector('p:nth-of-type(6)');
newCSS.classList.add('ocultar');

