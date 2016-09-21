const umbral = (a, b, umbral = 5) => {
  // compara si ambos son numeros
  if(typeof a === 'number' && typeof b === 'number') {
    /*
    ** Calcula el valor absoluto de la resta de a con b
    ** si esta resta es menor o igual al umbral regresa 1
    ** de lo contrario regresa 0
    */
    return (Math.abs(a - b) <= umbral) ? 1 : 0
  } else return 0
}
// ejemplo de uso
// ------(a, b, umbral)
// umbral(5, 10, 7)
module.exports = umbral
