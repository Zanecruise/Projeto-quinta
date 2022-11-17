window.onload = (event) => {

    const lowdb = require('lowdb')
    const db = lowdb('banco.json')

    db.defaults({
        id: [],
        nome: [],
        quantidade: [],
        precocompra: [],
        precovenda: [],
        codigo: [],
        tipo: []
    }).write()

}