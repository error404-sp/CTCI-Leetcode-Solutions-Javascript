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

