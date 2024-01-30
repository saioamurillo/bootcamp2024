let array = [0,1,2,3,4,5,6,7,8];

//POP -> elimina ultima posición y la devuelve
let deletedLastNumber = array.pop();
console.log(deletedLastNumber);
console.log(array);

//SHIFT -> elimina primera posicion y la devuelve
let deletedFirstNumber = array.shift();
console.log(deletedFirstNumber);
console.log(array);

//SPLICE -> elimina desde una posición
//          una cantidad de elementos determinada
//          y devuelve los eliminados
let positionOfThree = array.indexOf(3);
let deletedNPosition = array.splice(positionOfThree,1);
console.log(deletedNPosition);
console.log(array);

//REVERSE -> da la vuelta a un array
// array.reverse();
// console.log(array);

array.reverse().pop();
console.log(array);

let matrix = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
];


let firstPop = matrix.pop().reverse();
console.log(firstPop);
console.log(matrix);
let firstReverse = matrix.reverse().pop();
console.log(firstReverse);
console.log(matrix);




