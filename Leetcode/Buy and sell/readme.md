# Buy and sell

```
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
```
## brute force
```js
var maxProfit = function(prices) {
for(let i=0;i<prices.length-1;i++){
    for(let j = i+1;j<prices.length;j++){
        if(prices[i]>prices[j]){
            i++;
            continue;
        }
        else if(prices[j]-prices[i]>max){
            max = prices[j] - prices[i];
        }

    }
}
return max;
};

```

## efficient solution
```js

    let result = 0;
    let min = prices[0];
    for(let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        result = Math.max(result, prices[i] - min);
    }
    return result;
};
```