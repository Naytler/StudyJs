// Учитывая массив целых чисел nums и целое число target, верните индексы двух чисел так, чтобы они в сумме составлялиtarget .
// Вы можете предположить, что каждый вход будет иметь ровно одно решение , и вы не можете использовать один и тот же элемент дважды.
// Вы можете вернуть ответ в любом порядке.
let arr = [1,2,3,4,5,6,7,8,9];
let twoSum = (nums,target) => {
    let sum = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j< nums.length; j++){
            sum = nums[i] + nums[j];
            if(sum === target){
                console.log(i, j)
                return console.log(sum);
            }else{
                console.log(nums[i], nums[j]);
            }
        }
    }
    return console.log(- 1);            
};
twoSum(arr, 3);

//1. Best Time to Buy and Sell Stock
let dayPrice = [7,3,5,1,6,7];
let maxProfit = (prices) => {
    let minPrice = Infinity;
    let maxPrice = 0;
    for(let i = 0; i < dayPrice.length; i++){
        minPrice = Math.min(minPrice,prices[i]);
        maxPrice = Math.max(maxPrice,prices[i] - minPrice);
        console.log(minPrice, prices[i])
    }
    console.log(maxPrice);
}
maxProfit(dayPrice);

// Contains Duplicate
let dubl = [7,3,5,1,6,7];
let duplicate = (arr) => {
    arr.sort();
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i + 1]){
            console.log(true);
        }
    }
    console.log(false);
};
duplicate(dubl);