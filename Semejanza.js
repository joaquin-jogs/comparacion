module.exports = class Semejanza {
  constructor (semejanza) {
    this.fs = semejanza.fs
    this.payload = semejanza.payload || null
  }
  rank (comparative) {
    let count = 0
    for (let key in comparative) {
      if (comparative.hasOwnProperty(key)) {
        // suma 0 o 1 segun sea el caso
        count += comparative[key]
      }
    }
    let size = Object.keys(comparative).length
    switch (this.fs) {
      case 'umbral':
        return (this.payload <= count) ? 1 : 0
      case 'porcentage':
        let percent = (count * 100) / size
        return (this.payload <= percent) ? 1 : 0
      case 'igualdad':
      default:
        return (count === size) ? 1 : 0
    }
  }
}
