There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

Example


The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Returns

int: the frequency of a in the substring
Input Format

The first line contains a single string, .
The second line contains an integer, .

Constraints

For  of the test cases, .
Sample Input

Sample Input 0

aba
10
Sample Output 0

7
Explanation 0
The first  letters of the infinite string are abaabaabaa. Because there are  a's, we return .

Sample Input 1

a
1000000000000
Sample Output 1

1000000000000
Explanation 1
Because all of the first  letters of the infinite string are a, we return .

```js
function repeatedString(s, n) {
    // Write your code here
    let object = {};
    
    for(let char of s){
        if(char == "a"){
            object[char] = ++object[char] || 1;
        }  
    }
    if (object["a"] == undefined){
        return 0;
    }
    let result = (Math.floor(n/s.length)) * object["a"];
    let remaining = n%s.length;
    let substring = s.substr(0,remaining);
    if(remaining!=0){
        for(let char of substring){
            if(char == "a"){
                result++;
            }
        }
    }
    return result;
    ```