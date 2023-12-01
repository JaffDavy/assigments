
// Assigments
// #1
// Write a function called isEven which checks if a number is even or odd.
// Hints: 0 if even and 1 is odd, for any number N, its evennes is the same as N-2
// Notice how this works when N is negative, try to fix it

// function isEven(n){
//   if(n % 2 === 0){
//     return "even"
//   }else{
//     return "odd"
//   }
// } console.log(isEven(10))

// #2
// Write a function called countBs that takes a string as its only arguments and returns
// a number that indicates how many uppercase "B" characters are in the string
// countBs("Bombastic") => 1
// countBs("bbbbBBBBonB") => 5

// let count = 0
// function countBs(str){
//     for (let i = 0; i <= str.length - 1 ; i++) {
//         if (str[i] === 'B') {
//             count += 1
//         }
//     } 
//     return count
// }
// console.log(countBs('BandaBan'))

// // #3
// Write a function called CountChar that behaves like CountBs expect it takes a second
// arguments that indicates the character that is to be counted

// let count = 0
// function CountChar(str, char) {
//     for (let i = 0; i <= str.length - 1; i++) { 
//       if (str[i] === char) {
//           count += 1
//       }
//     }
//     return count
// }
// console.log(CountChar('BanbaBan', 'B'))

// #4
// Write the function to generate the first n fabonacci numbers
// let arr = []
// let prev = 0
// let curr = 1
// let next
// function fabonacci(n) {
//     for (let i = 1; i < n; i++) {
//         next = prev + curr
//         arr.push(next)
//         prev = curr
//         curr = next
//     }
//     return arr
//     }
// console.log(fabonacci(10))


// #5
// Write a function range that takes 2 arguments
// start and end and return an arrey containing
// all the numbers from the start up to end
// range (1, 5) => [1, 2, 3, 4, 5]

// const strin = []
// function range(a, b){
//   for(let i = a;  i <= b; i++){
//     strin.push(i)
//   }
// return strin
// }
// console.log(range(1, 5))

// #6
// Write a stepRange that acts like ranges but takes an extra increment or decrement parameter
// stepRange (1, 10, 2) =>[1,3,5,7,9]
// stepRange (5, 1, -1) =>[5,4,3,2,1]

// const arr = []
// function stepRange(a, b, c) {
//    if (c > 0){
//       for (let i = a; i <= b; i += c) {
//         arr.push(i)
//       }
//       return arr
//     } else if (c < 0){
//       for (let i = b; i >= a; i +=c){
//         arr.push(i)
//       }
//       return arr
//     }
// }
// console.log(stepRange(1, 10, 2))

// #7
// combine both function into trueRange
// trueRange(1, 5) =>[1,2,3,4,5]
// turRange(1, 10, 2) =>[1,3,5,7,9]
// trueRange(5, 2, -1) =>[5,4,3,2]

// const trueRange = [1, 2, 3, 4, 5]
// const truRange = [5, 4, 3]

// trueRange.push(truRange);
// console.log(trueRange)

// // #8
// Write a sum fuuction that take an array and returns the sum of its elements
// sum([1,2,3,4,5]) => 15

// let arr = [1, 2, 3, 4, 5]
// let arrSum = arr.reduce((acc, curr) => acc + curr, 0)
// console.log(arrSum)

// #9
// Write a function to return the average of an array
// average{[1,2,3,4,5,]} =>3
// let array = [1, 2, 3, 4]
// const arr = [1, 2, 3, 4, 5]
// let cont = 0
// let avg
// function calc(arr) {
//     for (let i = 0; i < arr.length; i++) {
//        count += arr[i]
//     }
//     avg = count / arr.length
//     return avg 
// }
// console.log(arr)
// #10
// The == operator compares objects by identity. But sometimes you would
// prefers to compare the values of their actual properties
// Write a function deepEqual that take 2 values and returns true if only
// they are of the same value or are objects with the same property

// function deepEqual(a, b) {
//   if (a == b || a == b) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(deepEqual(6, 3))










