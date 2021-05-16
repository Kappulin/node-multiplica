const fs = require('fs');
const colors = require('colors');

const multiplica = async (a, b, listar) => {
    try {
        let salida = '';
        salida += '===============\n';
        salida += `  Tabla del ${a}\n`;
        salida += '===============\n';
        for (let i = 1; i <= b; i++) {
            salida += `${a} * ${i} = ${a * i}\n`;
        }
        if (listar) console.log(salida.rainbow);
        fs.writeFileSync(`./salida/tabla-${a}x${b}.txt`, salida);
        return `tabla-${a}x${b}.txt`;
    } catch (error) {
        throw (error)
    }
}


module.exports = {
    multiplica
}