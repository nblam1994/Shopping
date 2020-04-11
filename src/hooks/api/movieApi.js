import axios from "axios";

const getDataMovierApi = async (keyword) => {
    const urlApi = `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=cfe422613b250f702980a3bbf9e90716`;
    return await axios.get(urlApi,{
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials': true,
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
}

export const api = {
    getDataMovierApi
}