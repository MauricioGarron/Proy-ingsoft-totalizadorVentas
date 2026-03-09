import mostrarCantidad from "./calculadora.js";
import { calcularPrecioBase } from "./calculadora.js";
import { calcularDescuentoPorMonto } from "./calculadora.js";
import { calcularImpuestoPorEstado } from "./calculadora.js";
import { calcularDescuentoCategoria } from "./calculadora.js";
import { calcularImpuestoCategoria } from "./calculadora.js";

describe("Mostrar cantidad de items", () => {
  it("debería devolver la cantidad ingresada", () => {
    expect(mostrarCantidad(20)).toEqual(20);
  });

  it("debería devolver otra cantidad ingresada", () => {
    expect(mostrarCantidad(5)).toEqual(5);
  });
});

describe("Calcular precio base", () => {
  it("debería calcular el precio base multiplicando cantidad por precio", () => {
    expect(calcularPrecioBase(5, 10)).toEqual(50);
  });

  it("debería calcular correctamente otro caso", () => {
    expect(calcularPrecioBase(3, 20)).toEqual(60);
  });
});

describe("Descuento por monto de compra", () => {

  it("debería aplicar 3% de descuento para orden mayor o igual a 1000", () => {
    expect(calcularDescuentoPorMonto(1000)).toEqual(30);
  });

  it("debería aplicar 5% de descuento para orden mayor o igual a 3000", () => {
    expect(calcularDescuentoPorMonto(3000)).toEqual(150);
  });

});

describe("Impuesto por estado", () => {

  it("debería calcular impuesto para CA", () => {
    expect(calcularImpuestoPorEstado(100, "CA")).toEqual(8.25);
  });

  it("debería calcular impuesto para TX", () => {
    expect(calcularImpuestoPorEstado(200, "TX")).toEqual(12.5);
  });

  it("debería calcular impuesto para UT", () => {
    expect(calcularImpuestoPorEstado(100, "UT")).toEqual(6.65);
  });

});

describe("Descuento por categoría", () => {

  it("aplica 2% de descuento para alimentos", () => {
    expect(calcularDescuentoCategoria(1000, "alimentos")).toEqual(20);
  });

  it("aplica 1.5% para material de escritorio", () => {
    expect(calcularDescuentoCategoria(1000, "material")).toEqual(15);
  });

  it("aplica 1% para electrónicos", () => {
    expect(calcularDescuentoCategoria(1000, "electronicos")).toEqual(10);
  });

  it("no aplica descuento para otros", () => {
    expect(calcularDescuentoCategoria(1000, "varios")).toEqual(0);
  });

});

describe("Impuesto adicional por categoría", () => {

  it("aplica 7% para bebidas alcohólicas", () => {
    expect(calcularImpuestoCategoria(1000, "alcohol")).toEqual(70);
  });

  it("aplica 3% para muebles", () => {
    expect(calcularImpuestoCategoria(1000, "muebles")).toEqual(30);
  });

  it("aplica 4% para electrónicos", () => {
    expect(calcularImpuestoCategoria(1000, "electronicos")).toEqual(40);
  });

  it("aplica 2% para vestimenta", () => {
    expect(calcularImpuestoCategoria(1000, "vestimenta")).toEqual(20);
  });

  it("no aplica impuesto adicional para alimentos", () => {
    expect(calcularImpuestoCategoria(1000, "alimentos")).toEqual(0);
  });

});

import { calcularCostoEnvio } from "./calculadora.js";

describe("Costo de envío por peso volumétrico", () => {

  it("peso entre 0 y 10 cuesta 0", () => {
    expect(calcularCostoEnvio(5)).toEqual(0);
  });

  it("peso entre 11 y 20 cuesta 3.5", () => {
    expect(calcularCostoEnvio(15)).toEqual(3.5);
  });

  it("peso entre 21 y 40 cuesta 5", () => {
    expect(calcularCostoEnvio(30)).toEqual(5);
  });

  it("peso entre 41 y 80 cuesta 6", () => {
    expect(calcularCostoEnvio(60)).toEqual(6);
  });

  it("peso entre 80 y 100 cuesta 6.5", () => {
    expect(calcularCostoEnvio(90)).toEqual(6.5);
  });

  it("peso entre 101 y 200 cuesta 8", () => {
    expect(calcularCostoEnvio(150)).toEqual(8);
  });

  it("peso mayor a 200 cuesta 9", () => {
    expect(calcularCostoEnvio(250)).toEqual(9);
  });

});

import { calcularCostoEnvioTotal } from "./calculadora.js";

describe("Costo total de envío", () => {

  it("debería calcular costo total multiplicando envio por unidad por cantidad", () => {
    expect(calcularCostoEnvioTotal(3.5, 2)).toEqual(7);
  });

  it("debería calcular correctamente otro caso", () => {
    expect(calcularCostoEnvioTotal(5, 4)).toEqual(20);
  });

});

import { calcularDescuentoEnvioCliente } from "./calculadora.js";

describe("Descuento en costo de envío por tipo de cliente", () => {

  it("cliente normal no tiene descuento", () => {
    expect(calcularDescuentoEnvioCliente(100, "normal")).toEqual(0);
  });

  it("cliente recurrente tiene 0.5% de descuento", () => {
    expect(calcularDescuentoEnvioCliente(100, "recurrente")).toEqual(0.5);
  });

  it("cliente antiguo recurrente tiene 1% de descuento", () => {
    expect(calcularDescuentoEnvioCliente(100, "antiguo")).toEqual(1);
  });

  it("cliente especial tiene 1.5% de descuento", () => {
    expect(calcularDescuentoEnvioCliente(100, "especial")).toEqual(1.5);
  });

});

import { calcularDescuentoEspecialCliente } from "./calculadora.js";

test("cliente recurrente alimentos mayor a 3000 recibe descuento 100", () => {
  expect(calcularDescuentoEspecialCliente(3500, "recurrente", "alimentos")).toBe(100);
});

test("cliente especial electronicos mayor a 7000 recibe descuento 200", () => {
  expect(calcularDescuentoEspecialCliente(8000, "especial", "electronicos")).toBe(200);
});

test("cliente recurrente alimentos menor a 3000 no recibe descuento", () => {
  expect(calcularDescuentoEspecialCliente(2000, "recurrente", "alimentos")).toBe(0);
});

test("cliente normal no recibe descuento especial", () => {
  expect(calcularDescuentoEspecialCliente(8000, "normal", "electronicos")).toBe(0);
});

import { validarDatos } from "./calculadora.js";

describe("Validación de datos de entrada", () => {

  test("cantidad negativa debe dar error", () => {
    expect(validarDatos(-1, 10, 5)).toBe("La cantidad debe ser mayor que 0");
  });

  test("precio negativo debe dar error", () => {
    expect(validarDatos(2, -10, 5)).toBe("El precio debe ser mayor que 0");
  });

  test("peso negativo debe dar error", () => {
    expect(validarDatos(2, 10, -5)).toBe("El peso volumétrico no puede ser negativo");
  });

  test("datos correctos no deben dar error", () => {
    expect(validarDatos(2, 10, 5)).toBe(null);
  });

});