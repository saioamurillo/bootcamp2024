document.addEventListener("DOMContentLoaded", function() {

if(document.querySelector("#formulario")){
let atributesArray = []
async function mostrarAtributos(url = "https://cataas.com/api/tags"){
let response = await fetch(url);
let data = await response.json();
atributesArray.push(...data);


let newArray = []
data.forEach((element) => {
    newArray.push(element)
    document.querySelector("select").innerHTML += `
        <option value = ${element} >${element}</option>
    `
    })

    document.querySelector("#search").addEventListener("click", async function() {
        let = imagen = document.querySelector("select").value
        let = texto = document.querySelector("#textaco").value
        document.querySelector("#apartadofavs").innerHTML = "";
        document.querySelector("#apartadofavs").innerHTML += `
        <div class = favoritos id = título>
            <h3>This is your image:</h3>
        </div>
        <div class = imagen id = caja2>
        <img src = https://cataas.com/cat/${imagen}/says/${texto}?fontSize=100&fontColor=orange>
        </div>
        <div>
            <button class = "boton" id="añadirfavorito"><i class="material-symbols-outlined">favorite</i>Add to favorite</button>
        </div>

        `
        document.querySelector("img").addEventListener("error", function(event) {
            event.target.src = "https://www.shutterstock.com/image-vector/404-error-web-page-template-600nw-2170107505.jpg"
            event.onerror = null
    })

    document.querySelector("#añadirfavorito").addEventListener("click", () => {
        console.log("Botón de añadir favorito clickeado");
            const caja2Element = document.querySelector("#caja2");
        if (!caja2Element) {
            console.error("#caja2 no encontrado en el DOM");
            return;
        }
            const imgElement = document.querySelector("#caja2 img");
        if (!imgElement) {
            console.error("No se encontraron imágenes dentro de #caja2");
            return;
        }
    
        let img = imgElement.src;
        console.log("URL de la imagen:", img);
    
        añadirFavoritos(img);
        
    });
    

      })

};



function añadirFavoritos(img) {
    let arrayFotos = [];

    // Verifica si hay imágenes almacenadas en localStorage
    if (localStorage.getItem("img")) {
        arrayFotos = JSON.parse(localStorage.getItem("img"));
    }

    // Agrega la nueva imagen al array
    arrayFotos.push(img);

    // Guarda el array actualizado en localStorage
    localStorage.setItem("img", JSON.stringify(arrayFotos));

    console.log(arrayFotos);
    alert("Your cat is now on your favorites!")
    
    
}


mostrarAtributos()

}

if (document.querySelector("#nav1")) {
    let arrayFotos = [];

    if (localStorage.getItem("img")) {
        arrayFotos = localStorage.getItem("img");
        arrayFotos = JSON.parse(arrayFotos);
    }

    let cajaContainer = document.querySelector("#caja");
    cajaContainer.innerHTML = "";

    arrayFotos.forEach((element) => {
        let imgElement = document.createElement("img");
        imgElement.src = element;
        cajaContainer.appendChild(imgElement);
    });

    document.querySelector("img").addEventListener("click"), () => {

        localStorage.removeItem('img');
}


window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var h1 = document.getElementById("miH1");

    if (window.scrollY > 50) {
      h1.classList.add("scrolling");
    } else {
      h1.classList.remove("scrolling");
    }
  }


  // ... Más código ...



}


});

  


// Pull_Data_From_Storage()




//     let radios = document.querySelectorAll('input[type="radio"]');

//     radios.forEach(function(radio) {

//       radio.addEventListener('click', async function() {

//         if (this.checked) {

//           url = `https://cataas.com/cat/${this.value}`

//           console.log(url);

         
//           `


//         //   async function mostrarImagen(url2){

//         //   let response = await fetch(url2);

//         //   let data = await response.json();

//         //   data.



          
//         // }
//         // mostrarImagen()

//     }
        
//          else {
//           console.log("Nada");
//         }

        
//       });

           

      
//     });
//   });


  