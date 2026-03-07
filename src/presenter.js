import { 
  calcularPrecioBase,
  calcularDescuentoPorMonto,
  calcularImpuestoPorEstado
} from "./calculadora.js";

const form = document.querySelector("#cantidad-form");
const cantidadInput = document.querySelector("#cantidad-items");
const precioInput = document.querySelector("#precio-item");
const estadoSelect = document.querySelector("#estado"); 
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number(cantidadInput.value);
  const precio = Number(precioInput.value);
  const estado = estadoSelect.value; 

  const precioBase = calcularPrecioBase(cantidad, precio);

  const descuento = calcularDescuentoPorMonto(precioBase); 
  const subtotal = precioBase - descuento; 

  const impuesto = calcularImpuestoPorEstado(subtotal, estado); 

  const total = subtotal + impuesto; 

  resultado.innerHTML = `
    Precio base: ${precioBase} <br>
    Descuento: ${descuento} <br>
    Subtotal: ${subtotal} <br>
    Impuesto (${estado}): ${impuesto} <br>
    Total: ${total}
  `;
});