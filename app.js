//Q1 - Given two values, return the first value if
//it is falsy, otherwise return the second one
function filterOutFalsy(element1, element2){
    return !element1 ? element1 : element2
}

console.log(filterOutFalsy(0, 500))
console.log(filterOutFalsy(false, 100))
console.log(filterOutFalsy(true, "Dog"))

//Q2 - Given an array, return it's length
function findArrayLength(arr){
    return arr.length
}
console.log(findArrayLength([1,2,3]))
console.log(findArrayLength([5,0,-4,1]))
console.log(findArrayLength([]))


//Q3 - Given an array, return the last element
function lastElem(arr){
    return arr[arr.length-1]
}
console.log(lastElem([3,2,0,6,2]))
console.log(lastElem(['dog','cat','ball']))
console.log(lastElem([null,5,false]))

//Q4 Given an array, return the sum of all elements
function findArraySum(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

console.log(findArraySum([2,2,2]))
console.log(findArraySum([100,200,500]))
console.log(findArraySum([0,-5,-10]))

//Q5 - Given a number, add up all the numbers from one to
//the number that is given
function progressiveSum(num){
    let sum = 0
    for(let i = 1; i <= num; i++){
        sum += i
    }
    return sum
}

console.log(progressiveSum(3))
console.log(progressiveSum(4))
console.log(progressiveSum(600))

//Q6 - Given a number in seconds, return this number
//in mm:ss format
function calcTime(num){
    let minutes = Math.trunc(num / 60)
    let seconds = num % 60
    if(minutes < 10 && seconds < 10){
        return `0${minutes}:0${seconds}`
    }
    else if(minutes < 10){
        return `0${minutes}:${seconds}`
    }
    else if(seconds < 10){
        return `${minutes}:0${seconds}`
    }
    return `${minutes}:${seconds}`
}

console.log(calcTime(66))
console.log(calcTime(50))
console.log(calcTime(300))

//Q7 - Given an array, return the largest number
function getMax(arr){
    let max = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
console.log(getMax([5,100,0]))
console.log(getMax([12,10,-20]))
console.log(getMax([-300,-100,-200]))

//Q8 - Given a string, return the reversed string
function reverseString(string){
    let strRev = ""
    for(let i = string.length - 1; i >= 0; i--){
        strRev += string[i]
    }
    return strRev
}
console.log(reverseString('abc'))
console.log(reverseString('David'))
console.log(reverseString('This is cool'))

//Q9 - Given an array, return the same length array
//filled with 0's
function convertToZeros(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = 0
    }
    return arr
}
console.log(convertToZeros([5,100,0]))
console.log(convertToZeros([12]))
console.log(convertToZeros([1,2,3,4,5]))

//Q10 - Given an array of fruits, if it is an apple
//remove it from the array
function removeApples(arr){
    return arr.filter(checkApple)
}
function checkApple(str){
    return str != 'Apple'
}
console.log(removeApples(['Banana','Apple','Orange','Apple']))
console.log(removeApples(['Tomato','Orange','Banana']))
console.log(removeApples(['Banana','Orange','Apple']))

//Q11 - Given an array of values, filter out all the 
//falsy values and only return the truthy values
function removeFalsy(arr){
    return arr.filter(elem => !!elem === true)
}
console.log(removeFalsy(["", [], 0, null, undefined, "0"]))
console.log(removeFalsy(['Tomato','Orange','Banana',false]))
console.log(removeFalsy(['Banana','Orange', 'Apple']))

//Q12 - Given an array of truthy and falsy values, return
//the same array of elements into its boolean value
function convertToBool(arr){
    return arr.map(elem => !!elem)
}
console.log(convertToBool([500, 0, "David","", []]))