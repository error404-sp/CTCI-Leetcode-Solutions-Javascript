# Squares of sorted array

## Question
**Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.**

## Examples
### Example 1:

* Input: nums = [-4,-1,0,3,10]
* Output: [0,1,9,16,100]
* Explanation: After squaring, the array becomes [16,1,0,9,100].
* After sorting, it becomes [0,1,9,16,100].
### Example 2:

* Input: nums = [-7,-3,2,3,11]
* Output: [4,9,9,49,121]
 

* Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 
 ## Solutions

 ### Brute force method
 ```js
 //O(N^2) method
 var sortedSquares = function(nums) {
    let result = [];
    for(let num of nums){
        result.push(num*num);
    }
    
    for(let i=0;i<result.length-1;i++){
        for(let j=i+1;j<result.length;j++){
            if(result[i]>result[j]){
                let temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
        }
    return result;
};
```

### O(nlogn) method
```js
var sortedSquares = function(nums) {
    for(let i = 0 ;i<nums.length;i++){
        nums[i] = Math.pow(nums[i],2);
    }
    nums.sort((a,b)=> a-b);
    return nums;
};
```

### most efficient (two pointer approach)
```js
var sortedSquares = function(nums) {
    let result = [];
    let left = 0;
    let right = nums.length -1;
    while(left<=right){
        let num1 = Math.pow(nums[left],2);
        let num2 = Math.pow(nums[right],2);
        if(num1 > num2){
            result.push(num1);
            left++;
        }
        else{
            result.push(num2);
            right--;
        }
    }
    
    return result.reverse();
};
```