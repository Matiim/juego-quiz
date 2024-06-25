//recupero las cosas del htm
const txtPuntaje = document.querySelector("#puntos")
const nombre = document.querySelector("#nombre")
const nombreJugador = document.querySelector("#nombre-jugador")
const puntajeFinal = document.querySelector("#puntaje-final")
const totalAcertadas = document.querySelector("#total-acertadas")
const totaNolAcertadas = document.querySelector("#total-no-acertadas")
const btnComenzar = document.querySelector("#btn-comenzar")


nombre.innerHTML = localStorage.getItem("nombre")
nombreJugador.innerHTML = localStorage.getItem("nombre")
txtPuntaje.innerHTML = parseInt(localStorage.getItem("puntaje-total"))
puntajeFinal.innerHTML = parseInt(localStorage.getItem("puntaje-total")) + " Puntos"


const correctas = parseInt(localStorage.getItem("puntaje-total"))/100
const incorrectas = 30 - correctas
totalAcertadas.innerHTML = correctas
totaNolAcertadas.innerHTML = incorrectas

btnComenzar.addEventListener("click", () => {
    location.href = "../index.html";
})