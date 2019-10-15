const axios = require('axios');
const clima = require('../clima/clima').getClima;

const getLugarLatLon = async(direccion) => {
    const encodeURL = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {'x-rapidapi-key': '774dad752emshc999a2e509c79efp1550b0jsn151800b2ac87'}
    });

    // Forma promesas async y await, para este caso se agregó async a la función principal
    const resp = await(instance.get());
    if (resp.data.Results.length === 0) {
        throw new Error(`No se encontraron resultados para ${direccion}`)
    }
    const data = resp.data.Results[0];
    const lugar = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        lugar,
        lat,
        lon
    }

    
    // Forma usando promesas
    /* instance.get()
            .then(resp => {
                if (resp.data.Results[0]) {
                    console.log(resp.data.Results[0]);
                } else {
                    console.log(`No se encontraron resultados para ${direccion}`);
                }
            })
            .catch(err => {
                console.log('error!!!', err);
            })
            .finally(() =>{
                console.log('Finally siempre se ejecuta');
            }); */

}

const getInfoClima = async(direccion) => {
    try {
        let coord = await getLugarLatLon(direccion);
        let temp = await clima(coord.lat, coord.lon);
        return {
            coord,
            temp
        }
    } catch (error) {
        throw new Error(`No se pudo determinar el clima para ${direccion}`);
    }
}

module.exports = {
    getLugarLatLon,
    getInfoClima
}