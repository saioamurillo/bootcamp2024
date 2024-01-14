function holas() {
    let hola = "Hola ";
    let tres = 3;
    let cinco = 5;
    
   
    let holasTres = "";

    for (let i = 0; i < tres; i++) {
        holasTres += hola;
    }

    let holasCinco = "";
    
    for (let i = 0; i < cinco; i++) {
        holasCinco += hola;
    }

    console.log(holasTres);
    console.log(holasCinco);
}

holas();