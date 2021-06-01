// console.log("髙山大貴")

// let lastName = "髙山";
// let firstName = "大貴";

// console.log(lastName)
// console.log(firstName)

// let age = 10;
// if (age < 20) {
//     console.log("未成年です")
// } else {
//     console.log("成人です")
// }

// let age = 10;
// if (age >= 0 && age <= 4) {
//     console.log("幼年期")
// } else if (age >= 5 && age <= 14) {
//     console.log("少年期")
// } else if (age >= 15 && age <= 24) {
//     console.log("青年期")
// } else if (age >= 25 && age <= 44) {
//     console.log("壮年期")
// } else if (age >= 45 && age <= 64) {
//     console.log("中年期")
// } else if (age >= 65) {
//     console.log("高年期")
// }

// let sum = 0
// for (let index = 1; index <= 10; index++) {
//     sum += index;

// }
// console.log(sum)



// let answerWriteLine = ""
// for (let i = 1; i <= 9; i++) {
//     let answer = 0;
//     for (let j = 1; j <= 9; j++) {
//         answer = i * j;
//         if (answer < 10) {
//             answer += ' ' + answer
//         }
//         answerWriteLine += answer + ' ';

//     }
//     answerWriteLine += '\n'

// }
// console.log(answerWriteLine)

// let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum = 0
// for (let num of arrayNum) {
//     sum += num
// }
// console.log(sum)

let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
for (let num of arrayNum) {
    if (num % 2 == 1) {
        console.log(num)
    }
}