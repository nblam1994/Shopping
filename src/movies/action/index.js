import {LOADING_GET_DATA, GET_DATA_MOVIE} from "./constants"; 

export const startGetData = () => ({type: LOADING_GET_DATA});
export const getDataMovie = (nameMovie) => ({type: GET_DATA_MOVIE, nameMovie});