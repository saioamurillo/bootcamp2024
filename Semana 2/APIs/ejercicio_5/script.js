// 1- Obtener de la API de Pokemon (disponible en https://pokeapi.co/api/v2) la lista de 
// todos los tipos de Pokémon y mostrarlos en consola. 

// 2- Mostrar un dropdown de HTML en el que el usuario puede especificar un tipo. 


// 3- Cuando el usuario elija uno tipo específico en el dropdown, mostrar 3 pokemons 
// aleatorios que sean de ese tipo.

let pokemonAleatorios = []

async function mostrarPokemons(url = "https://pokeapi.co/api/v2/type/"){

let response = await fetch(url);

let data = await response.json();

pokemonAleatorios.push(...data.results);

// console.log(pokemonAleatorios)

data.results.forEach(tipo => {

    document.querySelector("#tipos").innerHTML += `
   
        <option>${tipo.name}</option>
    `
    // console.log(tipo)

});

// if(data.next!==null){
//     mostrarPokemons(data.next)
// }

// else {
    document.querySelector("select").addEventListener("change", function () {

        let tipo = pokemonAleatorios.filter(tipo => tipo.name === this.value)

        let nuevoUrl = tipo[0].url;

        // console.log(nuevoUrl);

        fetch(nuevoUrl)
        .then(res => res.json())
        .then(res => {

            for (let i = 0; i < 3; i++) {

                let posicion = [Math.floor(Math.random() * pokemonAleatorios.length)]

                let pokemonFinal = res.pokemon[posicion].pokemon.name;

                console.log(pokemonFinal)

                document.querySelector('#pokemonAleatorio').innerHTML +=`

                <div>

                <p>${pokemonFinal}</p>

                </div>
               `

                }

                

        })




    //     let arrayAleatorio = [];

    //     let aleatorio1 = pokemonAleatorios[Math.floor(Math.random() * pokemonAleatorios.length)]
    //     let aleatorio2 = pokemonAleatorios[Math.floor(Math.random() * pokemonAleatorios.length)]
    //     let aleatorio3 = pokemonAleatorios[Math.floor(Math.random() * pokemonAleatorios.length)]

    //     arrayAleatorio.push(aleatorio1, aleatorio2, aleatorio3)

    //     for (let i = 0; i < arrayAleatorio.length; i++) {

    //         let unoaleatorio = arrayAleatorio[i]

    //         console.log(unoaleatorio.url);            
    //     }

    //     let tipo = 
        

    }

    )

    }



mostrarPokemons()




// function mostrarPokemons(url = "https://pokeapi.co/api/v2/type/") {

//     fetch(url)
//         .then(res => res.json())
//         .then(res => { 
            
//             res.results.forEach(element => {

//                 document.querySelector("tipos").innerHTML += `
                
//                 <option value="${element.name}">${element.name}</option>

//                 `
//         })
//  })


//  }

