const argv = require('yargs')
    .option(
        'b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'es la base de la tabla multiplicar'
        }).option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    }).option('t', {
        alias: 'to',
        type: 'number',
        demandOption: true,
        describe: 'Hasta que numero quiere multiplicar la base'
    }).check((argv, options) => {
        if (isNaN(argv.b)) throw 'la base tiene que ser un numero';
        if (isNaN(argv.l)) throw 'el factor tiene que ser un numero';
        return true;

    })
    .argv;

module.exports = argv;