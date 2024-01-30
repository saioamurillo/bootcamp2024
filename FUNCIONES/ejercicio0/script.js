
let array = []

let matrix = [
    [1,2,3,4],
    [12,13,14,5],
    [11,16,15,6],
    [10,9,8,7]
];

while (matrix.length > 0){

    array.push(...matrix.shift())

    for(let i = 0; i < matrix.length; i++){
        array.push(matrix[i].pop())
    }

    if(matrix.length > 0){
        array.push(...matrix.pop().reverse())
    }

    for(let i = matrix.length - 1; i > 0; i--){
        array.push(matrix[i].shift())
        
    }

}
console.log(array)

    // if( i>0 && i<=matrix.length ){

    //     let cinco = matrix[i].pop()

    //     console.log(cinco)
    // }

    // console.log(matrix[i])






// if (k==k+1 && k==k+2){

//     console.log(array+=matrix[k].pop().pop())
// }

// for(let j=0; j<matrix.lenght+1; j++){

// console.log(array+=matrix[j].pop())

// }





// let primeralinea = matrix.shift()

// let cinco = matrix[0].pop();

// let seis = matrix[1].pop();

// let ultimalinea = matrix.pop().reverse();

// let once = matrix[1].shift();

// let doce = matrix[0].shift();

// let trececatorce = matrix[0].splice(0,2)


// let quincedieciseis = matrix[1].splice(0,2).reverse()

// console.log(array+=primeralinea+=cinco+=seis+=ultimalinea+=once+=doce+=trececatorce+=quincedieciseis)


