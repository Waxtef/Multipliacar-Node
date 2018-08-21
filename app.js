const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarArchivo } = require('./Multiplicar/multi');
//let base = 13;

let argv2 = process.argv;

console.log(argv.base);
console.log('Limite :', argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo Creado :' + archivo.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}
/*let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base);

crearArchivo(base)
    .then(archivo => console.log('Archivo ' + archivo))
    .catch(e => console.log(e));*/