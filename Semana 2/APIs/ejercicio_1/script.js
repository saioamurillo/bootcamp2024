

async function asyncSearchRick(url = 'https://rickandmortyapi.com/api/character/'){

    let response = await fetch(url);
    let data = await response.json();

    data.results.forEach(element => {
    
        document.querySelector("body").innerHTML +=  `
       
       <div class="character">
           
            <h3>${element.name}</h3>
            
            <img src="${element.image}">
        
        </div>
        `
    });


    if(data.info.next!==null){
        asyncSearchRick(data.info.next)
    }
}


asyncSearchRick();
