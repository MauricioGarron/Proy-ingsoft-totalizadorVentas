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

export function calcularImpuestoCategoria(total, categoria) {
  const impuestos = {
    alcohol: 0.07,
    muebles: 0.03,
    electronicos: 0.04,
    vestimenta: 0.02
  };

  const tasa = impuestos[categoria] || 0;

  return total * tasa;
}

export function calcularCostoEnvio(peso) {

  if (peso <= 10) return 0;
  if (peso <= 20) return 3.5;
  if (peso <= 40) return 5;
  if (peso <= 80) return 6;
  if (peso <= 100) return 6.5;
  if (peso <= 200) return 8;

  return 9;
}

export default mostrarCantidad;