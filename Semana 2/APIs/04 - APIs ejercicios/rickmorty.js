// 1. Haz una llamada a la API https://rickandmortyapi.com/api/character/ para que
// devuelva todos los personajes. Muestra en un div las fotos y los nombres.

function rickMortyChars(url = "https://rickandmortyapi.com/api/character/"){
    //do stuff
    fetch(url)
        .then(function(res){
            return res.json()
        })
        .then(function(res){
            
            document.querySelector("body").innerHTML = "";

            res.results.forEach(character => {
                document.querySelector("body").innerHTML += `
                <div>
                <h3>${character.name}</h3>
                <img src="${character.image}">
                </div>
                `
            });


            //Con botones para controlar nosotros
            document.querySelector("body").innerHTML+=`
            <button id="prev">Previous</button>
            <button id="next">Next</button> 
            `

            document.querySelector("#prev").addEventListener("click", ()=>{
                rickMortyChars(res.info.prev)
            })

            document.querySelector("#next").addEventListener("click", ()=>{
                rickMortyChars(res.info.next)
            })
            //------------------FIN

            //Con una recursiva para que lo haga automático
            // if(res.info.next !== null){
            //     rickMortyChars(res.info.next)
            // }
            //------------------FIN
        })

}

rickMortyChars()

