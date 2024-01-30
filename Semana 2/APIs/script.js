document.querySelector("button").addEventListener("click", asyncSearchPokemon)

function searchPokemon(){
    let pokeName = document.querySelector("#pokeName").value;

    console.log('antes del fetch');
    let nombre = "Peio"
    let string = "hola "+nombre
    //string literal, puedo meter variables en strings
    let saludo = `hola ${nombre}`
    //1er Paso: se envía la petición
    fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(function(resPrimerThen){
            console.log(resPrimerThen.name);
            return resPrimerThen.json() //2do paso: se recibe la respuesta
        })
        .then(function(resSegundoThen){
            // console.log(resSegundoThen); //3er paso: se trata la respuesta
            // document.querySelector("body").innerHTML += `
            // <div class="pokeData">
            //     <h3>${resSegundoThen.name}</h3>
            //     <img src="${resSegundoThen.sprites.front_default}">
            // </div>
            // `

            fetch(resSegundoThen.results[17].url)
                .then(res => res.json())
                .then(res => console.log(res))
        })
        .catch(function(err) {
            console.log(err);
        })
        .finally(function(){

        })

    console.log('después del fetch');

}

async function asyncSearchPokemon(){
    
    let pokeName = document.querySelector("#pokeName").value;

 try{
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    let data = await response.json()
    console.log(data);

    let responseTwo = await fetch(data.results[pokeName].url)
    let dataTwo = await responseTwo.json();

    console.log(dataTwo.name);
 } catch(e){
    console.log(e);
 } finally {
    
 }
}