# Valid paranthesis
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   s =  s.split("");
 let object = {
     "{":"}",
     "(":")",
     "[":"]"
 }
 let stack = [];
    if(s.length%2 !==0){
        return false;
    }
 
 for(let i = 0;i<s.length;i++){
     if(s[i] in object){
         stack.push(s[i]);
     }
     else if(s[i] == object[stack[stack.length-1]]){
         stack.pop();
     }
     else{
         return false;
     }
    
     
 }
    if(stack.length == 0){
        return true;
    }
    else{
        return false;
    }
    
};
```