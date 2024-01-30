// 1- Utilizar la base de datos de Star Wars (disponible en
//     https://swapi.dev/documentation), para obtener la lista de planetas y mostrarlos en
//     dropdown (etiqueta select).
//     2- Cuando el usuario elige una opción, mostrar un alert con el nombre del planeta
//     seleccionado (podéis usar un botón para ello).
//     3- En vez de mostrar el alert, hacer una petición fetch para ver los personajes que
//     están en ese planeta y mostrarlos en un div debajo del dropdown.
//     4- Hacer la petición fetch en cuanto se selecciona una opción diferente, sin utilizar el
//     botón (buscar en internet documentación sobre eventos que se ejecutan cuando se
//     cambia la selección)
let planetsArray = []
function getAllPlanets(url = "https://swapi.dev/api/planets/") {

    fetch(url)
        .then(res => res.json())
        .then(res => {
            planetsArray.push(...res.results);
            res.results.forEach(planet => {
                document.querySelector("select").innerHTML += `
                <option value="${planet.name}">${planet.name}</option>
            `
            })

            if (res.next !== null) {
                getAllPlanets(res.next)
            } else {
                document.querySelector("select").addEventListener("change", function () {
                    // alert(this.value);
                    let planet = planetsArray.filter(planet => planet.name === this.value)
                    console.log(planet);
                    if (planet[0].residents.length > 0) {
                        planet[0].residents.forEach(resident => getCharacter(resident))
                    }
                })
            }

        })
}

function getCharacter(charUrl) {
    fetch(charUrl)
        .then(res => res.json())
        .then(res => {
            document.querySelector(".char-name").innerHTML += `
                <h2>${res.name}</h2>
            `
        })
}

document.querySelector("body").innerHTML += `
            <select id="planets">
            <option selected disabled>Elige un planeta</option>
            </select>
        `
getAllPlanets();