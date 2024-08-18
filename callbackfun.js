function product(a,b,c){
    return a*b*c;
}

// function fun(x,y){
//     return x-y;
// }
// console.log(fun(product(2,3,4),7));

function fun(x,y){     //product-->Call Back function
    let n = x(2,3,4);
    return n-y;
}
console.log(fun(product,7));