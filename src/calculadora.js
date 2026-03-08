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

export function calcularDescuentoCategoria(total, categoria) {
  const descuentos = {
    alimentos: 0.02,
    material: 0.015,
    electronicos: 0.01
  };

  const tasa = descuentos[categoria] || 0;

  return total * tasa;
}

export default mostrarCantidad;