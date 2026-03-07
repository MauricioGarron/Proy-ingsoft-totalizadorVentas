import { calcularPrecioBase } from "./calculadora.js";

const form = document.querySelector("#cantidad-form");
const cantidadInput = document.querySelector("#cantidad-items");
const precioInput = document.querySelector("#precio-item");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number(cantidadInput.value);
  const precio = Number(precioInput.value);

  const precioBase = calcularPrecioBase(cantidad, precio);

  resultado.innerHTML = `Precio base: ${precioBase}`;
});