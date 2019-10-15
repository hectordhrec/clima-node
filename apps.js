const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar').getLugarLatLon;
const clima = require('./clima/clima').getClima;
const temperatura = require('./lugar/lugar').getInfoClima;

// Información de ciudad, nombre, latitud y longitud
//console.log(argv.direccion);
// lugar(argv.direccion).then(resp =>{
//     console.log(`Lugar: ${resp.lugar}, latitud: ${resp.lat}, longitud: ${resp.lon}`);
// }).catch(err => console.log(err));


// Tratando de usar promesas anidades
// lugar(argv.direccion).then(resp =>{
//     console.log(`Lugar: ${resp.lugar}, latitud: ${resp.lat}, longitud: ${resp.lon}`);
//     return clima(resp.lat, resp.lon);
// }).then(resp =>console.log(resp))
// .catch(err => console.log(err));

// Información de clima de ciudad por lat y lon
// clima(40.750000, -74.000000)
// .then(console.log)
// .catch(console.log);

//Informacion del clima de una ciudad
temperatura(argv.direccion)
    .then(resp=>{
    console.log(`El clima en ${resp.coord.lugar} es de ${resp.temp.tempActual}°C, se espera un minimo de ${resp.temp.tempMin}°C y un máximo de ${resp.temp.tempMax}°C`);
    })
    .catch(console.log);


// const getInfoClima = async(direccion) => {
//     let coordenadas = await lugar(direccion);
//     let clima2 = await clima(coordenadas.lat, coordenadas.lon);
//     return {
//         coordenadas,
//         clima2
//     }
// }

// getInfoClima(argv.direccion)
//     .then(console.log)
//     .catch(console.log);