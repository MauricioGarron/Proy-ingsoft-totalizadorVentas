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

export function calcularCostoEnvioTotal(costoUnidad, cantidad) {
  return costoUnidad * cantidad;
}

export function calcularDescuentoEnvioCliente(costoEnvio, cliente) {

  const descuentos = {
    normal: 0,
    recurrente: 0.005,
    antiguo: 0.01,
    especial: 0.015
  };

  const tasa = descuentos[cliente] || 0;

  return costoEnvio * tasa;
}

export function calcularDescuentoEspecialCliente(precioBase, cliente, categoria) {

  if (cliente === "recurrente" && categoria === "alimentos" && precioBase > 3000) {
    return 100;
  }

  if (cliente === "especial" && categoria === "electronicos" && precioBase > 7000) {
    return 200;
  }

  return 0;
}

export function validarDatos(cantidad, precio, peso) {

  if (cantidad <= 0 || isNaN(cantidad)) {
    return "La cantidad debe ser mayor que 0";
  }

  if (precio <= 0 || isNaN(precio)) {
    return "El precio debe ser mayor que 0";
  }

  if (peso < 0 || isNaN(peso)) {
    return "El peso volumétrico no puede ser negativo";
  }

  return null;
}

export default mostrarCantidad;