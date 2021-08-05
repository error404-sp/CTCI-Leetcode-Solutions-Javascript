
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false
 

// Constraints:

// -231 <= x <= 231 - 1


// Runtime: 192 ms, faster than 53.45% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 48.2 MB, less than 64.40% of JavaScript online submissions for Palindrome Number.

//find palindrome number
var isPalindrome = function(x) {
    x= x+"";
    x= x.split("");
    for(let i=0;i<x.length/2;i++){
        if(x[i]!=x[x.length-1-i]){
            return false;
        }
    }
    return true;
    
};
