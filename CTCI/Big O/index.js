function addUpTo(){
    sum=0;
    for(let i=1;i<=n;i++){
        sum+=n;
    }
    return sum;                         
}
//this is O(N)

function addUpTo(){
    return (n*(n+1))/2;
}
//this is O(1)

//// SPACE COMPLEXITY

function sum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    }
    return total;
}

    //this is o(1)

    function double(arr){
        let newArr = [];
        for(let i=0;i<arr.length;i++){
            newArr.push(2*arr[i]);
        }
        return newArr;
    }
