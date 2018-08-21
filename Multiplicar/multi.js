//reuqerimientos
const fs = require('fs');
const colors = require('colors');

let listarArchivo = (base, limite) => {

    console.log('----------------'.blue);
    console.log('--tabla de '.green + base + '--'.green);
    console.log('----------------'.blue);

    for (let i = 1; i <= limite; i++) {
        let r = i * base;
        console.log(base + ' * ' + i + ' = ' + r);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('el valor introducido no es un numero');
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            let r = i * base;
            data += (base + ' * ' + i + ' = ' + r + '\n');
        }

        fs.writeFile('Tablas/Tabla-' + base + '.txt', data, (err) => {
            if (err) reject(err);
            else resolve('tabla-' + base + '.txt');
        });
    });
}

module.exports = {
    crearArchivo,
    listarArchivo
}