function getSquare(array){
    return array.map(value =>(value ** 2 ))
}
const case1 = [-3, 2, 4]
const case2 = [-2,-1, 3, 5]
console.log(getSquare(case2)) // [4, 9, 16]
console.log(getSquare(case2).toSorted((a, b) => a - b )) // [9, 4, 16] 
