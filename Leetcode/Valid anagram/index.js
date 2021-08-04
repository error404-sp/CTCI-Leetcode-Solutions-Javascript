//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?




//Runtime: 88 ms, faster than 79.61% of JavaScript online submissions for Valid Anagram
var isAnagram = function(s, t) {
    let  object = {};
    let  object1 = {};
    s= s.split("");
    t = t.split("");
    if(s.length !== t.length){
        return false;
    }
    for(let val of s){
        object[val] = ++object[val] || 1;
    }
    for(let val of t){
        object1[val] = ++object1[val] || 1;
    }
     for(let key in object)  {
         if(object[key] !== object1[key]){
             return false;
             
         }
     }
    return true;
};


//brute force
var isAnagram = function(s,t){
    s= s.split("");
    t = t.split("");
    if(s.length !== t.length){
        return false;
    }
    
    for(let i = 0 ;i<s.length;i++){
        for(let j = 0;j<t.length;j++){
            let correctIndex = t.indexOf(s[i])
        if(correctIndex === -1) {
            return false;
        }
        t.splice(correctIndex,1)
        }
    }
    
        return true;

}