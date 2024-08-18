let arr = [1,-9,-2,7];
// arr = arr.sort((a,b) => a-b); //sort in increasing order
// console.log(arr);

// arr = arr.sort((a,b) => b-a); //sort in decreasing order
// console.log(arr);

//Custom sort
arr = arr.sort((a,b) => Math.abs(a) - Math.abs(b)); // sort on the basis of actual quantity
console.log(arr);
