/* 
Write a function which takes two numbers and returns their sum
*/
// Addition of two numbers
// 2 integers numbers
// return a number 

console.log(sumOfTwo(1,2));
console.log(sumOfTwo(22222222222222222222222,2222222222222222222222222222222222222));
console.log(sumOfTwo("string",4555));

function sumOfTwo(num1,num2){
    return Number(num1+num2);
}

/*
Write a function which takes in a string and returns counts of each character in the string
*/

// give no. of characters in the string
//string 
//object 

//"hello"
//"This is Shreyasi"
// "" 

//create object
//loop over str checking if that char exist if yes then ++ else initiate to 1
//return object
function noOfChar(str){
    var object = {};
   str+=str.toLowerCase();
    for(char of str){
        if(/[a-z0-9]/.test(char)){
        if(object[char]>0){
            object[char]++;
        }
        else{
            object[char] = 1;
        }
    }
    }

    return object;
}

console.log(noOfChar("Hello World"));






