# Two sum
## solved using two pointer method
```js
var twoSum = function(nums, target) {
   let first = 0;
    let second = 1;
    while(first < second){
        if(target - nums[first] == nums [second]){
            return [first,second];
        }
        if(second >= nums.length-1){
            first++;
            second = first +1;
        }
        else{
            second++;
        }
       
     }
}

//not the most optimum solution but with less space complexity
```

## brute force method
```js
var twoSum = function(nums,target){
    let first = 0 ;
    let second  = 1;
    for(let i = 0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] == target){
                return [i,j];
            }
        }
    }
}
```

## awesome solution
```js
const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
      

    if (another in map) {
      return [map[another], i];
    }
      map[nums[i]] = i;

    
  }
  ```



