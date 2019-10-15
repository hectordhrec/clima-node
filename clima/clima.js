const axios = require('axios');

const getClima = async(lat, lon) =>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e873153b8b8c1fb68d3e76655fbc5cd4&units=metric`);
    // if (resp.data.main){
    //     console.log(resp.data.main);
    //     throw new Error('No se encontró información del clima, para los datos indicados');
    // }
    const tempActual = resp.data.main.temp;
    const tempMax = resp.data.main.temp_max;
    const tempMin = resp.data.main.temp_min;
    //console.log(resp.data.main.temp);
    return {
        tempActual,
        tempMin,
        tempMax
    }
}

module.exports = {
    getClima
}