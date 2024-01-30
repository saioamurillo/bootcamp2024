// 1- Usa la API https://randomuser.me/ para generar un usuario aleatorio. Crea un div en
// el que aparezca la foto, el nombre, el email, la dirección (street name, street number,
// city, state, country, postcode)

function randomUser(){
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(res =>{
            let data = res.results[0]
            let location = res.results[0].location
            document.querySelector("body").innerHTML += `
                <div>
                    <img src="${data.picture.medium}">
                    <h2>${data.name.first} ${data.name.last}</h2>
                    <h4>${data.email}</h4>
                    <p>${data.location.street.name}, ${data.location.street.number}</p>
                    <p>${data.location.postcode} - ${data.location.city} (${data.location.state})</p>
                    <p>${data.location.country}</p>
                </div>
            `
        })
}

randomUser()