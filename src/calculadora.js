function mostrarCantidad(cantidad) {
  return cantidad;
}

export function calcularPrecioBase(cantidad, precio) {
  return cantidad * precio;
}

export function calcularDescuentoPorMonto(total) {
  if (total >= 3000) {
    return total * 0.05;
  }
  if (total >= 1000) {
    return total * 0.03;
  }
  return 0;
}

export default mostrarCantidad;