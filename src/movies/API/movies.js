import axios from "axios";


function* getDataMovieFromAPI(keyword) {
    const respone = yield axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=cfe422613b250f702980a3bbf9e90716`,{
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials': true,
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Content-Type': 'application/json'
        }
    }).catch(error => console.log(error));
    return (respone.status === 200) ? respone.data : [];
}

export const apiMovie = {
getDataMovieFromAPI
}