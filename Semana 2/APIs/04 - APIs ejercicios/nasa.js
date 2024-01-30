// 1- Crea una página con tres cajas de texto en la que se le pida al usuario un año, un
// mes y un día. Al apretar un botón, se le hace una petición a la API de la NASA de
// APOD, y muestra la fecha, el título, la imagen y la descripción en la página. Para usar
// la API de la NASA se necesita una clave de verificación.
// const API_KEY = "1fGXFEn1mERI3kR1Fbdm8Jj3fWXE6yVC5hX2O4Sx";
const URL = "https://api.nasa.gov/planetary/apod?api_key=1fGXFEn1mERI3kR1Fbdm8Jj3fWXE6yVC5hX2O4Sx"

document.querySelector("body").innerHTML += `
<input type="text" placeholder="año" id="año">
<input type="text" placeholder="mes" id="mes">
<input type="text" placeholder="día" id="dia">
<button id="btn">Enviar</button>
`
document.querySelector("#btn").addEventListener("click", () => {
    let year = document.querySelector("#año").value;
    let month = document.querySelector("#mes").value;
    let day = document.querySelector("#dia").value;

    // let date = year + "-" + month + "-" + day;
    let date = `${year}-${month}-${day}`

    fetch(URL+`&date=${date}`)
        .then(res => res.json())
        .then(res => {
            document.querySelector("body").innerHTML += `
                <div>
                    <h1>${res.title}</h1>
                    <img src="${res.url}">
                </div>
            `
        })
})
