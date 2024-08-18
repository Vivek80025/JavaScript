arr = [1,2,3,4,5,6];
//for Loop
console.log("for loop");
for(i=0;i<arr.length;i++){
    console.log(i,arr[i])
}
//forof Loop
console.log("forof loop");
for (const ele of arr) {
    console.log(ele);
}
//forEach Loop
//forEach(ele,idx,arr)
console.log("ForEach Loop");
arr.forEach((ele,i) => {
    console.log(ele,i);
});