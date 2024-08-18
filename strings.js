let a = "vivek jha";
console.log(a,a.length);
console.log(a[3]);
let s = "sneha barnwal";
console.log(s);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
let v = "   vivek   jha   ";
console.log(v);
let v2 = v.trim(); // remove start and end space
console.log(v2);
console.log(s.indexOf('a'));
console.log(s.lastIndexOf('a'));

//slice method
console.log(s.slice(2));
console.log(s.slice(2,10)) // substring form index 2 to 9

//split
let intro = "i am the best student";
let arr = intro.split(' ');
console.log(arr);