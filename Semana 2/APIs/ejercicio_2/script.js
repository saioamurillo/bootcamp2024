// 1- Usa la API https://randomuser.me/ para generar un usuario aleatorio. Crea un div en 
// el que aparezca la foto, el nombre, el email, la dirección (street name, street number, 
// city, state, country, postcode)

async function asyncSearchRick(url = 'https://randomuser.me/api/'){

    let response = await fetch(url);
    let data = await response.json();

    data.results.forEach(element => {
    
        document.querySelector("body").innerHTML +=  `
       
       <div class="character">

            <img src="${element.picture.large}">
           
            <h3>${element.name.first}</h3>
            
            <h4>${element.email}</h4>

            <h5>${element.location.street.name}  ${element.location.street.number}, ${element.location.city}, ${element.location.state}, ${element.location.country}, ${element.location.postcode}</h5>
        
        </div>
        `
    });


  
}


asyncSearchRick();