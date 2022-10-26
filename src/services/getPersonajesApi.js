import axios from 'axios';

const urlGetPersonajes = `https://rickandmortyapi.com/api/character/`;

async function getPersonajesApi(numero) {

    try{
    let res = await axios.get(`${urlGetPersonajes}${numero}`);
  
    let data = res.data;
    return data;
    } catch(e) {
        console.log(e); 
    }
  }

  export default getPersonajesApi;