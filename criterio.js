const intervalo = require('./intervalo')
const igualdad = require('./igualdad')
const umbral = require('./umbral')
const conjunto = require('./conjunto')

class Criterio {
  constructor (schema, criterio) {
    if (this._valid(schema, criterio)) {
      this.schema = schema
      this.criterio = criterio
      this.keys = Object.keys(criterio)
    }
  }
  _valid (schema, criterio) {
    let valid = true
    for (let key in criterio) {
      if (!schema.hasOwnProperty(key)) {
        valid = false
        break
      }
    }
    return valid
  }
  compare (o1, o2) {
    let compare = {}
    this.keys.map((key) => {
      if (o1.hasOwnProperty(key) && o2.hasOwnProperty(key)) {
        switch (this.criterio[key].cc) {
          case 'conjunto':
            compare[key] = 1
            this.criterio[key].payload.map((set) => {
              if (conjunto(o1[key], o2[key], ...set) === 1) {
                compare[key] = compare[key] | 1
              }
            })
            if (!compare.hasOwnProperty(key)) compare[key] = 0
            break
          case 'umbral':
            compare[key] = umbral(o1[key], o2[key], this.criterio[key].payload)
            break
          case 'intervalo':
            compare[key] = 1
            this.criterio[key].payload.map((interval) => {
              if (intervalo(o1[key], o2[key], ...interval) === 1) {
                compare[key] = compare[key] | 1
              }
            })
            if (!compare.hasOwnProperty(key)) compare[key] = 0
            break
          default:
            compare[key] = igualdad(o1[key], o2[key])
        }
      }
    })
    return compare
  }
}
let schema = require('./esquema.json')
let comparacion = require('./comparacion.json')
let cmp = new Criterio(schema, comparacion)

let o1 = require('./o1.json')
let o2 = require('./o2.json')

console.log(cmp.compare(o1, o2))
