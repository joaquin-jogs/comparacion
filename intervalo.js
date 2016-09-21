const intervalo = (a, b, limiteInferior, limiteSuperior) => {
  /*
  ** guarda en pruebaA si a esta entre el limite inferior
  ** y el limite superior
  */
  let pruebaA = (limiteInferior <= a && a <= limiteSuperior)
  /*
  ** guarda en pruebaB si b esta entre el limite inferior
  ** y el limite superior
  */
  let pruebaB = (limiteInferior <= b && b <= limiteSuperior)
  /*
  ** regresa 1 si pruebaA y pruebaB son true, cualquier otro caso
  ** regresa 0
  */
  return (pruebaA && pruebaB) ? 1 : 0
}

// console.log(intervalo(10, 20, 10.00001, 20))

module.exports = intervalo;
