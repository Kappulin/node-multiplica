const argv = require("./config/yargs");
const { multiplica } = require("./helpers/multiplicar");

console.clear();

multiplica(argv.base, argv.hasta, argv.listar).
    then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));