//Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

//we want to check if array1 squared is array 2 it can be of any order
//two arrays
//boolean
//Example
//same([2,3,1],[1,4,9])
//it should be equal no of values


function same(arr1,arr2){
    //should have same length
    if(!(arr1.length === arr2.length)){
        return false;
    }
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


//Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

//if all characters of string1 exist in string2 with the same proportion
function validAnagram(str1,str2){
    // create two objects with values of arrays as keys and no of same charater as values
    let object1 = {};
    let object2 = {};
    let array1 = str1.split("");
    let array2  = str2.split("");
    if(!(array1.length === array2.length)){
        return false;
    }
    for(let val in array1){
       object1[val] = ++object1[val] || 1;
    }
    for(let val in array2){
        object2[val] = ++object2[val] || 1;
     }

     for(let key in object1){
         if(!(key in object2)){
             return false;
         }
         if(!(object1[key] === object2[key])){
             return false;
         }
     }

    //check if key exist in str2
    //check if value is same
    return true;
}

console.log(validAnagram('anagram', 'nagaram')); // true