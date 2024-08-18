// function hello(){
//     console.log("Hello");
// }
// function mello(){
//     console.log("Mello");
// }
// setTimeout(hello,5*1000);
// setTimeout(mello,2*1000);
//-----------------------------------------
// setTimeout(function(){
//     console.log("Hello");
// },3*1000);

// setTimeout(function(){
//     console.log("Mello");
// },2*1000);

//-----------------------------------------

// for(let i=1;i<=10;i++){    //internal function = callback function
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }

//---------------------------------------------

for(let i=15;i>=1;i--){ 
    setTimeout(function(){
        console.log(16-i);
    },i*1000);
}

