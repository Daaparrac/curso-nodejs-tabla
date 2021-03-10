const fs = require('fs');
const { argv } = require('process');
const colors = require('colors');

const crearArchivo = async(base = 5, hasta = 10, listar = false) => {

    try {
        let salida, consola = '';


        for (let mul = 1; mul <= hasta; mul++) {

            consola += `${base}`.red
            consola += ` x `.green
            consola += `${mul}`.random
            consola += ` = `
            consola += `${base * mul}\n`.america;
            salida += `${base} x ${mul} = ${base * mul}\n`;

        }
        if (listar) {
            console.log('=============='.bgYellow);
            console.log(` Tabla del: ${base} hasta ${hasta}`.bgBlue);
            console.log('=============='.bgRed);
            console.log(consola)
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`.green;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}