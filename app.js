const movimientos = [
  { nombre: "Salario", tipo: "ingreso", valor: 3000 },
  { nombre: "Comida", tipo: "gasto", valor: 200 },
  { nombre: "Freelance", tipo: "ingreso", valor: 500 },
  { nombre: "Transporte", tipo: "gasto", valor: 150 }
];


function obtenerNombres(movimientos) {
  return movimientos.map(mov => mov.nombre);
}

function obtenerValores(movimientos) {
  return movimientos.map(mov => mov.valor);
}

function calcularTotal(valores) {
  return valores.reduce((total, valor) => total + valor, 0);
}

function contarPorTipo(movimientos) {
  return movimientos.reduce((contador, mov) => {
    if (mov.tipo === "ingreso") {
      contador.ingresos++;
    } else if (mov.tipo === "gasto") {
      contador.gastos++;
    }
    return contador;
  }, { ingresos: 0, gastos: 0 });
}

function obtenerIngresos(movimientos) {
  return movimientos.filter(mov => mov.tipo === 'ingreso');
}

function obtenerGastos(movimientos) {
  return movimientos.filter(mov => mov.tipo === 'gasto');
}

function filtrarPorMonto(movimientos, minimo) {
  return movimientos.filter(mov => mov.valor >= minimo);
}

function buscarPorNombre(movimientos, nombre) {
  return movimientos.find(mov => 
    mov.nombre.toLowerCase().includes(nombre.toLowerCase())
  );
}

function obtenerPrimero(movimientos, tipo) {
  return movimientos.find(mov => mov.tipo === tipo);
}

function obtenerTotalPorTipo(movimientos, tipo) {
  return movimientos
    .filter(mov => mov.tipo === tipo)
    .reduce((total, mov) => total + mov.valor, 0);
}

// ---- Pruebas ----
console.log("Nombres:", obtenerNombres(movimientos));
console.log("Valores:", obtenerValores(movimientos));
console.log("Total:", calcularTotal(obtenerValores(movimientos)));
console.log("Conteo por tipo:", contarPorTipo(movimientos));
console.log("Total ingresos:", obtenerTotalPorTipo(movimientos, "ingreso"));
console.log("Total gastos:", obtenerTotalPorTipo(movimientos, "gasto"));
