const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'La base a multiplicar.'
    }).option(
        'h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        description: 'Las veces a multiplicar.'
    }).option(
        'l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'Se imprimirá en consola el resultado'
    })
    .check((argv, options) => {
        if (isNaN(argv.b) || isNaN(argv.h)) {
            throw 'La cantidad a multiplicar y las veces deben ser un número.'
        }
        return true
    })
    .argv;

module.exports = argv;