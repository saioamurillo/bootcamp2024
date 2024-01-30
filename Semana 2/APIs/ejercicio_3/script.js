// Fotos de astronomia 
// 1- Crea una página con tres cajas de texto en la que se l e pida al usuario un año, un 
// mes y un día. Al apretar un botón, se l e hace una petición a la API de la NASA de 
// APOD, y muestra la fecha, el título, la imagen y la descripción en la página. Para usar 
// la API de la NASA se necesita una clave de verificación. 


document.querySelector("button").addEventListener("click", asyncSearchDate);

async function asyncSearchDate() {

    let año = document.getElementById("año").value;
    let mes = document.getElementById("mes").value;
    let dia = document.getElementById("dia").value;
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=IKccnnf7713iPamtHhNpkTiiCd1wV1CSrIz9bVYx&date=${año}-${mes}-${dia}/card/`;

    
    let response = await fetch(apiUrl);

    let data = await response.json();

        document.getElementById("resultContainer").innerHTML = `
            <div class="cosas">
                <img src="${data.url}">
                <h3>${data.title}</h3>
                <p>${data.date}</p>
                <p>${data.explanation}</p>
                
            </div>
        `;

    
}




