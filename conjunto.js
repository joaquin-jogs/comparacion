const conjunto = (a, b, elementos = []) => {
  /*
  ** se guarda true si a se encuentra el el arreglo elementos
  */
  let pruebaA = elementos.includes(a)
  /*
  ** se guarda true si b se encuentra el el arreglo elementos
  */
  let pruebaB = elementos.includes(b)
  /*
  ** si a y b se encuentran en el arreglo elementos
  ** regresa 1 de lo contrario regresa 0
  */
  return (pruebaA && pruebaB) ? 1 : 0
}

// console.log(conjunto('x', 'yisus', ['a', 'b', 'hola', 'yisus', '...', '18']))

module.exports = conjunto
