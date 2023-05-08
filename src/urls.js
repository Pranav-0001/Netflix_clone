import { API_KEY } from "./Constants/Constants";

export const Trending=`trending/all/day?api_key=${API_KEY}`
export const action=`discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`
export const romance=`discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`
export const Adventure=`discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`
export const malayalam=`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=ml`


