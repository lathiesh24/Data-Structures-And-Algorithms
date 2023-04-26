function maxAndmin(arr){
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < min ){
            min = arr[i]
        }
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return {max , min};
}
 arr = [1,2,3,4]
 const {min, max} = maxAndmin(arr);
console.log(`Maximum value is `, max);
console.log(`Minimum value is `, min);
