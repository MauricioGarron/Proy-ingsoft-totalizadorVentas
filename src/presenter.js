import { 
  calcularPrecioBase,
  calcularDescuentoPorMonto,
  calcularImpuestoPorEstado,
  calcularDescuentoCategoria
} from "./calculadora.js";

const form = document.querySelector("#cantidad-form");
const cantidadInput = document.querySelector("#cantidad-items");
const precioInput = document.querySelector("#precio-item");
const estadoSelect = document.querySelector("#estado"); 
const categoriaSelect = document.querySelector("#categoria")
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number(cantidadInput.value);
  const precio = Number(precioInput.value);
  const estado = estadoSelect.value; 
  const categoria = categoriaSelect.value;


  const precioBase = calcularPrecioBase(cantidad, precio);
  const descuentoMonto = calcularDescuentoPorMonto(precioBase); 
  const descuentoCategoria = calcularDescuentoCategoria(precioBase, categoria);
  const subtotal = precioBase - descuentoMonto - descuentoCategoria; 
  const impuesto = calcularImpuestoPorEstado(subtotal, estado); 
  const total = subtotal + impuesto; 

  resultado.innerHTML = `
    Precio base: ${precioBase} <br>
    Descuento Monto: ${descuentoMonto} <br>
    Descuento Categoria: ${descuentoCategoria} <br>
    Subtotal: ${subtotal} <br>
    Impuesto (${estado}): ${impuesto} <br>
    Total: ${total}
  `;
});