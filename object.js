//Object is kind of like map/dictonary where we have "key-value" pairs
let obj = { //obj is an Object
    name: "vivek",
    age: 19,
    percentage: 85,
    'is Married': true
};
obj.age = 20;
obj['is Married'] = false;
console.log(obj.name);
console.log(obj['name']);
console.log(obj.age);
console.log(obj.percentage);
console.log(obj['is Married']);