// 1- Utilizar la base de datos de Star Wars (disponible en 
//     https://swapi.dev/documentation), para obtener la lista de planetas y mostrarlos en un 
//     dropdown (etiqueta select).  

//     2- Cuando el usuario elige una opción, mostrar un alert con el nombre del planeta 
//     seleccionado (podéis usar un botón para ello). 

//     3- En vez de mostrar el alert, hacer una petición fetch para ver los personajes que 
//     están en ese planeta y mostrarlos en un div debajo del dropdown.

//     4- Hacer la petición fetch en cuanto se selecciona una opción diferente, sin utilizar el 
//     botón (buscar en internet documentación sobre eventos que se ejecutan cuando se 
//     cambia la selección)


async function asyncPlanetas(url = 'https://swapi.dev/api/planets'){

let response = await fetch(url);

let data = await response.json();

data.results.forEach(element => {

    document.querySelector("#planetas").innerHTML += `
   
        <option>${element.name}</option>
    `
});

if(data.next!==null){
    asyncPlanetas(data.next)
}

}

// document.querySelector("button").addEventListener("click", funciónSeleccionar);

// function funciónSeleccionar(){

//     let planetasSelect = document.querySelector("#planetas");

//     let selectedPlanet = planetasSelect.value;

//     alert(`Planeta seleccionado: ${selectedPlanet}`);

// }

document.querySelector("button").addEventListener("click", asyncFunctionPersonajes);

async function asyncFunctionPersonajes(url = 'https://swapi.dev/api/planets'){

try{
    let response = await fetch(url)
    let data = await response.json()

    console.log(data);

    document.querySelector("#personajes").innerHTML = "";

    await Promise.all(data.results[0].residents.map(async residentUrl => {
        let residentResponse = await fetch(residentUrl);
        let residentData = await residentResponse.json();

    document.querySelector("#personajes").innerHTML += `
    <div>

    <h2>${residentData.name}</h2>
    
    </div>
    `
    }));
 } 
 catch(e){
    console.log(e);
 } 
 finally {
    
 }
}

    // let response = await fetch(url);
    // let data = await response.json();
    

    // data.results.forEach(element => {

    //     async function asyncFunctionPersonajazo(url = `${element.resident}`){

    //         let responseDos = await fetch(url);
    //         let dataDos = await response.json();




    // if(dataDos.next!==null){
    //     asyncFunctionPersonajazo(data.next)
    // }

    // }

    // if(data.next!==null){
    //     asyncFunctionPersonajes(data.next)
    // }


asyncPlanetas();

// async function asyncSearchPokemon(){
    
//     let pokeName = document.querySelector("#pokeName").value;

//  try{
//     let response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
//     let data = await response.json()
//     console.log(data);

//     let responseTwo = await fetch(data.results[pokeName].url)
//     let dataTwo = await responseTwo.json();

//     console.log(dataTwo.name);
//  } catch(e){
//     console.log(e);
//  } finally {
    
//  }





