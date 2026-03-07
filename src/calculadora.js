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

export function calcularImpuestoPorEstado(total, estado) {
  const impuestos = {
    UT: 0.0665,
    NV: 0.08,
    TX: 0.0625,
    AL: 0.04,
    CA: 0.0825
  };

  const tasa = impuestos[estado] || 0;

  return total * tasa;
}

export default mostrarCantidad;