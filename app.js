function minMax(arr) {
    let smallestNum = Math.min(...arr);
    let highestNum = Math.max(...arr);
    let myArr = [smallestNum, highestNum]
    return myArr;
}

console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]
console.log(minMax([2334454, 5])); // [5, 2334454]
console.log(minMax([5])); // [5, 5]