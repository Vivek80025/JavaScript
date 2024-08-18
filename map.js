//Map Function =>
// function square(ele){
//     return ele*ele;
// }
// function twice(ele){
//     return 2*ele;
// }
// let arr = [1,-6,-3,8];
// let brr = arr.map(twice);  //twice => callBack function

// let arr = [1,-6,-3,8];
// let brr = arr.map(function(ele){
//     return ele*ele;
// });
// console.log(brr);
//Map Function prefer =>
let arr = [1,-6,-3,8];
arr = arr.map(ele => ele*ele);
let brr = arr.map(ele => ele*ele);
console.log(arr);
console.log(brr);