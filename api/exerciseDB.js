import axios from 'axios'
import { api } from '../constants'

const baseUrl = "https://exercisedb.p.rapidapi.com"

const apiCall = async(url, params) => {
    try{
        const options = {
            method: "GET",
            url,
            params,
            headers: {
                'X-RapidAPI-Key': api,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data;
    }catch(err){
        console.log("Error: " + err);
    }
}


export const fetchExercisesByBodyPart = async(bodyPart) => {
    let data = await apiCall(baseUrl + '/exercises/bodyPart/' + bodyPart)
    return data
}