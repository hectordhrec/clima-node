
const argv = require('yargs')
    .options({
        direccion : {
            demand: true,
            alias: 'd',
            desc: 'Nombre del lugar del cual se desea el clima'
        }
    })
    .argv;

module.exports = {
    argv
}
