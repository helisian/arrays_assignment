// 1. Problem One - Fruits array

// a. Add "mango" to the end of a fruits array ["strawberry", "banana"].

// fruits = ["strawberry", "banana"]
// fruits.push("mango")
// console.log(fruits)


// b. Add "blueberry" to the front of the same fruits array.

// fruits.unshift("blueberry")
// console.log(fruits)


// c. Remove the last element of the fruits array.

// fruits.pop()
// console.log(fruits)


// d. console.log the length of the fruits array.
// console.log(fruits.length)


// e. Remove the first element of the fruits array.

// fruits.shift()
// console.log(fruits)


// f. Join all the elements in the fruits array with a '$'.

// console.log(fruits.join("$"))


// 2. Problem Two - Larger array
// Given two arrays, write code that logs the larger array. 
//If the arrays are the same length, log "They are the same size"

// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]
// if (firstArr.length < secondArr.length) {
//     console.log(secondArr)
// } else if (firstArr.length > secondArr.length) {
//     console.log(firstArr)
// } else
//     console.log("They are the same size")


// log [1,5,2,4]
// 3. Problem Three - Middle element
// Given an array, log its middle element. If the middle of the array is between two elements, log both of them.

// let hasExactMiddleArr = [1,5,3]
// logs 5

// let hasNoExactMiddleArr = [1,4,6,9]
// logs 4,6

// let arr = [1,2,3,4,5,6]
// if (arr.length%2 !==0) {
//     console.log(Math.floor(arr[(arr.length-1)/2]))
// } else if (arr.length%2 === 0) {
//     console.log(arr.slice(((arr.length-1)/2),((arr.length+2)/2)))
// } 


// 4. Problem Four - Iterate over an array
// a. Write code that logs every value in an array using a for loop

// let logMeOutFor = ["I", "am", "a", "happy", "array"]
// for (let i = 0; i < logMeOutFor.length; i++){
//     console.log(logMeOutFor[i])
// }


// /* I
//   am
//   a
//   happy
//   array
// */
// b. Write code that logs every value in an array using a while loop

// let i = 0
// while (i < logMeOutFor.length){
//     console.log(logMeOutFor[i])
//     i ++
// }


// let logMeOutWhile = ["I", "am", "a", "happy", "array"]

// /* I
//   am
//   a
//   happy
//   array
// */
// c. Write code that logs every value in an array using a for/of loop

// let logMeOutForOf = ["I", "am", "a", "happy", "array"]
// for (let element of logMeOutForOf){
//     console.log(element)
// }


// /* I
//   am
//   a
//   happy
//   array
// */
// 5. Problem Five - Sum of array
// Given an array of numbers, write code that logs the sum of all the numbers

// let firstArrToSum = [1, 2, 3, 4, 5, 6]
//  21
// let sum = 0
// for (let i = 0; i < firstArrToSum.length; i ++){
//     console.log(i)
//     sum += firstArrToSum[i]
// }
// console.log(sum)

// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// //  9

// let sum = 0
// for (let i = 0; i < secondArrToSum.length; i++){
//     sum += secondArrToSum[i]
// }
// console.log(sum)


// 6. Problem Six - Log odd/even numbers
// a. Given an array of numbers, write code that logs all the odd numbers

// for (let i = 0; i < evenAndOddArr.length; i++){
//     if (evenAndOddArr[i] % 2 != 0){
//         console.log(evenAndOddArr[i]);
//     }else if (evenAndOddArr[i] % 2 === 0){
//         continue;
//     }
// }


// 1, 5, 11, 99
// b. Given an array of numbers, write code that logs the sum of all the even numbers

//let evenAndOddArr = [1,5,2,4,11,12,99,100]

// sum = 0
// for (i=0;i<evenAndOddArr.length;i++){
//     if (evenAndOddArr[i]%2 !== 0) {
//         console.log(`${evenAndOddArr[i]} is an odd number`)
//     } else if (evenAndOddArr[i]%2 === 0){
//         console.log(`${evenAndOddArr[i]} is an even number`)
//         sum += evenAndOddArr[i]
//     }
//  } console.log(sum)


// let evenAndOddArrToSum = [1,5,2,3,11,4,6]
// let sum = 0
// for (let i = 0; i < evenAndOddArrToSum.length; i++){
//     if (evenAndOddArrToSum[i] % 2 === 0){
//         sum += evenAndOddArrToSum[i]
//     }else if (evenAndOddArrToSum[i] % 2 != 0){
//         continue;
//     }
// }
// console.log(sum)

// 12
// 7. Problem Seven - Smallest value
// Given an array of numbers, write code that logs the smallest value

// let arr = [4,2,7,29,40,1]
// let min = arr[0]
// for (let i=1; i<arr.length;i++){
//     if (min > arr[i] )
//     min = arr[i]
//     console.log(min)
// } console.log(min)


// 3


// 8. Problem Eight - Second smallest value
// Find the second smallest number in an Array of Ints

//let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]

// let min = secondSmallestArr[0]
// let min2 = secondSmallestArr[1]
// for (let i=1; i<secondSmallestArr.length;i++){
//     if (min > secondSmallestArr[i]) {
//         min = secondSmallestArr[i]
//     } else if (min2 > secondSmallestArr[i])
//         min2 = secondSmallestArr[i]
// } console.log(min)
//   console.log(min2)

// 4
// 9. Problem Nine - Duplicates
// Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.

// Hint
let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
let noDupeList = []
let duplicate = false

for (let i=0;i<dupeFriendlyList.length;i++){
    for (let j=0;j<noDupeList.length;j++){
        if (noDupeList[j] === dupeFriendlyList[i]) 
        duplicate = true
    } 
        if (duplicate === false) 
        noDupeList += dupeFriendlyList[i]
}
   console.log(noDupeList)


// noDupleList = [4, 2, 6, 9, 1]