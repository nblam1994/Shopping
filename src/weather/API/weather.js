import axios from "axios";


function* getDataWeatherFromAPI(keyword) {
    const respone = yield axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${keyword}&appid=073f342f34bacc8898356a523fa5b4f8&units=metric&lang=vi&fbclid=IwAR21QHSHW8WA-nYAYbRsHOQSdrA7RwyeVD_hoSeYDdXmO2jCk1oXtarZ3ps`,{
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials': true,
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Content-Type': 'application/json'
        }
    }).catch(error => console.log(error));
    return (respone.status === 200) ? respone.data : [];
}

export const apiWeather = {
    getDataWeatherFromAPI
}