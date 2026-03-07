import mostrarCantidad from "./calculadora.js";
import { calcularPrecioBase } from "./calculadora.js";

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