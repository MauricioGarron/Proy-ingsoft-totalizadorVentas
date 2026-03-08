import mostrarCantidad from "./calculadora.js";
import { calcularPrecioBase } from "./calculadora.js";
import { calcularDescuentoPorMonto } from "./calculadora.js";
import { calcularImpuestoPorEstado } from "./calculadora.js";
import { calcularDescuentoCategoria } from "./calculadora.js";

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
