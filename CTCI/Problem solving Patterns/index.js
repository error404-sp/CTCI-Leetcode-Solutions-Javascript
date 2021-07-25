//Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

//we want to check if array1 squared is array 2 it can be of any order
//two arrays
//boolean
//Example
//same([2,3,1],[1,4,9])
//it should be equal no of values

function same(arr1,arr2){
    //two objects to store the values of array along with its frequency
    let frequencyCounter1 ={};
    let frequencyCounter2 = {};

    for(let val of arr1){
        frequencyCounter1[val] = (++frequencyCounter1[val] || 1)
    }
    for(let val of arr2){
        frequencyCounter2[val] = (++frequencyCounter2[val] || 1)
    }
    
    
    //check if key in object2 is square of key in object1
    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)){
            return false;
        }
        if(!(frequencyCounter2[key**2] === frequencyCounter1[key])){
            return false;
        }
    }
    
    //check if value in object2 and object 1 is same
    return true
}
console.log(same([1,6,1],[1,1,36]));