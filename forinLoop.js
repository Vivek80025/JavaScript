let obj = { //obj is an Object
    name: "vivek",
    age: 19,
    percentage: 85,
    'is Married': false
};
//forin loop
for (const key in obj) {
    console.log(key,obj[key]);
}