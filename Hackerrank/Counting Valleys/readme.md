# Counting Valleys

An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

Example

 

The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.

Function Description

Complete the countingValleys function in the editor below.

countingValleys has the following parameter(s):

int steps: the number of steps on the hike
string path: a string describing the path
Returns

int: the number of valleys traversed
Input Format

The first line contains an integer , the number of steps in the hike.
The second line contains a single string , of  characters that describe the path.

Constraints

Sample Input

8
UDDDUDUU
Sample Output

1

```js
function countingValleys(steps, path) {
    // Write your code here
 path = path.split("");
 let num = 0;
 let level = 0;
 let object = {
     "D": -1,
     "U": 1
 }
 let stack = [];
 for(let i = 0;i<steps;i++){
     
         level += object[path[i]];
         stack.push(object[path[i]]);
     if(level == 0 && i!=0){
         if(stack[0] == -1){
             num++;
         }
         stack = [];
     }
 }
 
 return num;
}
```