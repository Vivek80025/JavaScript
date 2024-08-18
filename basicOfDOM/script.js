// console.log("Hello Bro");
// let a = 6;
// console.log(a*a);


// let x = document.querySelector("h1");  // HTML Element Selection
//                                        // Only first h1 select hog
//                                        // hr baar only pehla wala select hoga
//                                        // chahe kitna bhi same element ho
// console.log(x);

// let x = document.querySelectorAll("h1"); // select all h1
// console.log(x);

// let x = document.querySelectorAll(".yes");  //select all class of name yes
// console.log(x);


let x = document.querySelector("h1");
x.style.color = "red";
x.style.fontFamily = "Gill Sans";
let y = document.querySelector("h2");
y.style.backgroundColor = "red";
setTimeout(function(){
    y.innerHTML = "Changed"; //changing in h2 after 2 sec
},2000);