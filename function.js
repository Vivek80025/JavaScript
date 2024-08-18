function onetoN(n){
    for(let i=1;i<=n;i++){
        console.log(i);
    }
    console.log();
}
// |a3| + |b3|
function eqn(a,b){
    return Math.abs(a*a*a)+Math.abs(b*b*b);
}

onetoN(10);
console.log(eqn(2,3));