'use strict'

// function printName() {
//     console.log('髙山大貴')
// }

// printName();

function add(num1, num2) {
    return (num1 + num2)
}

function sub(num1, num2) {
    return (num1 - num2)
}

// function multi(num1, num2) {
//     return (num1 * num2)
// }



function div(num1, num2) {
    return (num1 / num2)
}
let printNameVariable = function() {
    console.log("だいき")
}

let addVariable = add(5, 3)

// console.log(add(5, 3))
console.log(addVariable)

let subVariable = sub(5, 3)
console.log(subVariable)

let multi = (num1, num2) => num1 * num2;
let multiVariable = multi(5, 3);
console.log(multiVariable)


let divVariable = div(5, 3);
console.log(divVariable)