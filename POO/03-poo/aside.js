//aqui this es el window, la ventana del navegador (motores y V8 y todo eso)
console.log(this);

let fechaNacimiento = prompt("dame tu fecha")
fechaNacimiento = fechaNacimiento.replaceAll("-","");
calcularLuckyNumber(fechaNacimiento)


// función recursiva
function calcularLuckyNumber(birthDate){
    let luckyNum = 0;
    for(let i = 0; i < birthDate.length; i++){
        luckyNum += parseInt(birthDate[i])
    }
    luckyNum = luckyNum.toString()
    if(luckyNum.length > 1){
        calcularLuckyNumber(luckyNum)
    } else {
        console.log(luckyNum);
    }
}