//JUGADORES:
// NO MODIFICAR LOS NOMBRES DE ESTOS OBJETOS
// (El test automático les cambia los valores para probar que el resto 
// de la lógica funcione bien)

const jugadorUno = {
    nombre: "Marce",
    habilidades: {
      ataque: 70,
      velocidad: 30,
      vida: 60,
      magia: 120,
    },
    articulos: ["espada", "escudo", "varita"],
};
  
const jugadorDos = {
    nombre: "Flor",
    habilidades: {
      ataque: 73,
      velocidad: 30,
      vida: 80,
      magia: 100,
    },
    articulos: ["escudo", "varita", "capa", "pocion"],
};
  
var contadorPuntosJug1 = 0;
var contadorPuntosJug2 = 0;
  
var ganador;
  
//-----------------------------------------------------------------------//
  
//COMPARACIÓN POR PODER DE ATAQUE
  
//La indicación ++ luego de la variable contadorPuntosJug suma 1 punto al
//contador. Según la condición que se cumpla, se irán sumando los puntos.
  
//EJEMPLO ESTRUCTURA DE COMPARACIÓN
//   if (habilidadACompararJugador1 > habilidadACompararJugador2) {
//     contadorPuntosJug1 = contadorPuntosJug1 + 1;
//   } else if (condiciónCasoContrario) {
//     contadorPuntosJug2++;
//   } else {
//     contadorPuntosJug1++;
//     contadorPuntosJug2++;
//   }
  
// (Escribir debajo el código que te permita generar esta comparación)
  
let habilidadACompararJugador1 = jugadorUno.habilidades.ataque;
let habilidadACompararJugador2 = jugadorDos.habilidades.ataque;

if(habilidadACompararJugador1 > habilidadACompararJugador2){
    contadorPuntosJug1++;
} else if(habilidadACompararJugador1 < habilidadACompararJugador2){
    contadorPuntosJug2++;
} else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;
};
  
//COMPARACIÓN POR VELOCIDAD:
//(Escribir debajo el código que te permita generar esta comparación)
  
habilidadACompararJugador1 = jugadorUno.habilidades.velocidad;
habilidadACompararJugador2 = jugadorDos.habilidades.velocidad;
  
if(habilidadACompararJugador1 > habilidadACompararJugador2){
    contadorPuntosJug1++;
} else if(habilidadACompararJugador1 < habilidadACompararJugador2){
    contadorPuntosJug2++;
} else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;
};
  
//COMPARACIÓN POR NIVEL DE VIDA:
//(Escribir debajo el código que te permita generar esta comparación)
  
habilidadACompararJugador1 = jugadorUno.habilidades.vida;
habilidadACompararJugador2 = jugadorDos.habilidades.vida;
  
if(habilidadACompararJugador1 > habilidadACompararJugador2){
    contadorPuntosJug1++;
} else if(habilidadACompararJugador1 < habilidadACompararJugador2){
    contadorPuntosJug2++;
} else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;
};
  
//COMPARACIÓN POR MAGIA:
//(Escribir debajo el código que te permita generar esta comparación)
  
habilidadACompararJugador1 = jugadorUno.habilidades.magia;
habilidadACompararJugador2 = jugadorDos.habilidades.magia;
  
if(habilidadACompararJugador1 > habilidadACompararJugador2){
    contadorPuntosJug1++;
} else if(habilidadACompararJugador1 < habilidadACompararJugador2){
    contadorPuntosJug2++;
} else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;
};

//COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
//(Escribir debajo el código que te permita generar esta comparación)
  
const cantArticulosJug1 = jugadorUno.articulos.length;
const cantArticulosJug2 = jugadorDos.articulos.length;

if(cantArticulosJug1 > cantArticulosJug2){
    contadorPuntosJug1++;
} else if(cantArticulosJug1 < cantArticulosJug2){
    contadorPuntosJug2++;
} else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;
};
  
//DEFINIENDO EL GANADOR DE LA PARTIDA
//En este espacio deberás generar la comparación final de puntos
//que determine al ganador. Mostrar en la terminal el nombre del jugador que ganó la partida

const resultado = {
    [jugadorUno.nombre] : contadorPuntosJug1,
    [jugadorDos.nombre] : contadorPuntosJug2,
}

if(contadorPuntosJug1 > contadorPuntosJug2) {
    resultado.ganador = jugadorUno.nombre;
} else if(contadorPuntosJug1 < contadorPuntosJug2) {
    resultado.ganador = jugadorDos.nombre;
} else {
    resultado.ganador = "Empate";
};

console.log(resultado);