// best optimised solution using frequency counter
//Runtime: 76 ms, faster than 93.56% of JavaScript online submissions for Contains Duplicate.
var containsDuplicate = function(nums) {
    let object = {}
    for(let val of nums){
        if(object[val] != undefined){
            return true;
        }
        else{
            object[val] = 1;
        }
    }
    return false;
    
};
