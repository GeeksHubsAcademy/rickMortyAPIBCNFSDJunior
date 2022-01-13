
const axios = require('axios');

let personajes = [];

//Para utilizar la cláusula await debemos de estar trabajando en un contexto asíncrono
const traePersonajes = async () => {

    let resultados = await axios.get("https://rickandmortyapi.com/api/character");

    personajes = resultados.data.results;

    if(personajes[1]?.name !== undefined){
        console.log(personajes[1].name);
    }else {
        console.log("damn!");
    };
    
};

traePersonajes();