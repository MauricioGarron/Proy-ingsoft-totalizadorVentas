import mostrarCantidad from "./calculadora.js";

const cantidadInput = document.querySelector("#cantidad-items");
const form = document.querySelector("#cantidad-form");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number(cantidadInput.value);
  const cantidadMostrada = mostrarCantidad(cantidad);

  resultado.innerHTML = `Cantidad mostrada: ${cantidadMostrada}`;
});