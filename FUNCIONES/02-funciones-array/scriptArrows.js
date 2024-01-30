let array = [0,1,2,3,4,5,6,7,8];
//--------------FOREACH
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// };

// array.forEach(function(number){
//     console.log(number);
// });

// --------------MAP
// let nuevoArrayMapFor = []
// for(let i = 0; i < array.length; i++){
//     let modifiedValue = array[i]*2;
//     nuevoArrayMapFor.push(modifiedValue);
// };
// console.log(nuevoArrayMapFor);

// let nuevoArrayMap = array.map(function(number, index){
//     console.log(index);
//     return number*2;
// });

// console.log(nuevoArrayMap);

//----------------FILTER
// let nuevoArrayFilterFor = []

// for (let i = 0; i < array.length; i++) {
//     if(array[i] % 2 === 0){
//         nuevoArrayFilterFor.push(array[i]);
//     };
// };

// console.log(nuevoArrayFilterFor);

// let nuevoArrayFilter = array.filter(function(number){
//     return number % 2 === 0;
// });

// console.log(nuevoArrayFilter);

//---------------REDUCE
// let numFor = 26;

// for(let i = 0; i < array.length; i++){
//     numFor=numFor+array[i];
//     numFor+=array[i]; // --> lo mismo
// }

// console.log(num);

// let numReduce = array.reduce(function(total, actual){
//     return total+=actual;
// },20);

// console.log(numReduce);

//-----------LO MISMO PERO CON ARROWS

//FOREACH
// array.forEach(number => console.log(number));

// array.forEach((number, index) => {
//     console.log(number);
// });

//MAP
// let arrowArrayMap = array.map(number => number*2);
// console.log(arrowArrayMap);

//FILTER                         parametro   return de la función
// let arrowArrayFilter = array.filter(number => number % 2 === 0);
// console.log(arrowArrayFilter);

//REDUCE
// let reducedNumberArrow = array.reduce(((total, actual) => total+=actual),20);
// console.log(reducedNumberArrow);

