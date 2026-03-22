const obj = {
    nome: 'Joana A',
    cpf: '1234567876543',
    email: 'j@j.com',
}

const cliente = {
    nome: 'Joana A',
    cpf: '12345678987',
    email: 'j@j.com',
    score: 865,
    recorrente: true,
    endereco: {
        logradouro: 'Rua A',
        num: '125A',
        complemento: 'apto24',
    },
    tags: ['premium','clube'],
}

// console.log(cliente.nome)
// console.log(cliente.score)
// console.log(cliente.endereco)
// console.log(cliente.tags)

// console.log(cliente.nome)
// console.log(cliente.score)
// console.log(cliente.endereco.logradouro)
// console.log(cliente.tags[0])

cliente.celular = '44556655667'
console.log(cliente)
cliente.celular = '55443377889'
console.log(cliente.celular)

const cliente1 = {
    'nome completo': 'Joana A',
    cpf: '12345678987',
    email: 'j@j.com'
}

console.log(cliente1['nome completo'])