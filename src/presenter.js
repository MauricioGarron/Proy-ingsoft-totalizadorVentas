import { 
  calcularPrecioBase,
  calcularDescuentoPorMonto,
  calcularImpuestoPorEstado,
  calcularDescuentoCategoria,
  calcularImpuestoCategoria,
  calcularCostoEnvio,
  calcularCostoEnvioTotal
} from "./calculadora.js";

const form = document.querySelector("#cantidad-form");
const cantidadInput = document.querySelector("#cantidad-items");
const precioInput = document.querySelector("#precio-item");
const pesoInput = document.querySelector("#peso-volumetrico");
const estadoSelect = document.querySelector("#estado"); 
const categoriaSelect = document.querySelector("#categoria")
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number(cantidadInput.value);
  const precio = Number(precioInput.value);
  const peso = Number(pesoInput.value);
  const estado = estadoSelect.value; 
  const categoria = categoriaSelect.value;


  const precioBase = calcularPrecioBase(cantidad, precio);
  const costoEnvioUnidad = calcularCostoEnvio(peso);
  const costoEnvioTotal = calcularCostoEnvioTotal(costoEnvioUnidad, cantidad);
  const descuentoMonto = calcularDescuentoPorMonto(precioBase); 
  const descuentoCategoria = calcularDescuentoCategoria(precioBase, categoria);
  const subtotal = precioBase - descuentoMonto - descuentoCategoria; 
  const impuestoCategoria = calcularImpuestoCategoria(subtotal, categoria);
  const impuesto = calcularImpuestoPorEstado(subtotal, estado); 
  const total = subtotal + impuesto + impuestoCategoria + costoEnvioTotal; 

  resultado.innerHTML = `
    Precio base: ${precioBase} <br>
    Peso volumétrico: ${peso} <br>
    Costo envío por unidad: ${costoEnvioUnidad} <br>
    Costo envio total: ${costoEnvioTotal} <br>
    Descuento Monto: ${descuentoMonto} <br>
    Descuento Categoria: ${descuentoCategoria} <br>
    Subtotal: ${subtotal} <br>
    Impuesto Categoria: ${impuestoCategoria} <br>
    Impuesto (${estado}): ${impuesto} <br>
    Total: ${total}
  `;
});