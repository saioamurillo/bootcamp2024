// 1- Para este ejercicio utilizaremos la base de datos de Magic disponible en 
// https://magicthegathering.io/ . 

// En primer lugar, mostrar un dropdown en el que se 
// muestran los sets de cartas disponibles. 

// 2- Cuando el usuario elige un ítem, hacemos una petición a la API con el set y que nos 
// devuelva las cartas, si la petición fuera a devolver más de 100, utilizar solo las 100 que 
// l legan. 

// Mostrar cada una de ellas en un div con su título, su descripción y su imagen si 
// existen. Cuando el usuario pase el ratón por encima de una carta, hacer que rote 
// ligeramente (buscar la propiedad css transform) 

let setsCartas = []

async function mostrarCartas(url = "https://api.magicthegathering.io/v1/sets"){

let response = await fetch(url);

let data = await response.json();

setsCartas.push(...data.sets);

// console.log(...setsCartas[0].name)


let newArray = []

data.sets.forEach(arraySet => {


    newArray.push(arraySet.code)


    document.querySelector("#sets").innerHTML += `
   
        <option value = ${arraySet.code} >${arraySet.name}</option>
    `

});


document.querySelector("select").addEventListener("change", async function() {
    
    console.log(newArray);

    let posicion = newArray.filter(posicion => posicion === this.value)
    
    
        url = `https://api.magicthegathering.io/v1/sets/${posicion[0]}/booster`

        console.log(url)

        let arrayCartasSet = []

        let response = await fetch(url);

        let data = await response.json();

        arrayCartasSet.push(...data.cards);

        
        console.log(...arrayCartasSet)


        let arrayNombresCartasSet = []

        document.querySelector("#nombres").innerHTML = ""

        data.cards.forEach(newArray2 => {


        arrayNombresCartasSet.push(newArray2.name)


    document.querySelector("#nombres").innerHTML += `

    <div id = "mierda">
   
        
        <img src = ${newArray2.imageUrl}>

    <div id = textomierda>

        <h1>${newArray2.name}</h1>

        </div>

        </div>
    `

});

console.log(arrayNombresCartasSet)

    }


        

//         data.sets.forEach(arraySet => {


//             newArray2.push(arraySet.code)


//             document.querySelector("#sets").innerHTML += `
   
//              <option>${arraySet.name}</option>
//             `

// });

// console.log(newArray[1])
            
        )

}

        
        


mostrarCartas()