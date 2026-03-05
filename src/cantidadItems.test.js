import mostrarCantidad from "./cantidadItems.js";

describe("Mostrar cantidad de items", () => {
  it("debería devolver la cantidad ingresada", () => {
    expect(mostrarCantidad(20)).toEqual(20);
  });

  it("debería devolver otra cantidad ingresada", () => {
    expect(mostrarCantidad(5)).toEqual(5);
  });
});