let b1 = document.getElementById("box1");
b1.addEventListener("mouseenter",function(){
    let r = Math.floor(Math.random()*100); //0 to 99
    b1.innerHTML = `<h1>${r}</h1>`;
})
b1.addEventListener("mouseleave",function(){
    b1.innerHTML = `<h1>1</h1>`;
})
//Double Click =>
b1.addEventListener("dblclick",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    b1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
})
b1.addEventListener("mouseleave",function(){
    b1.style.backgroundColor = "white";
})

let b2 = document.getElementById("box2");
let clr = "green";
b2.addEventListener("mouseenter",function(){
    if(clr=="green"){
        b2.style.backgroundColor = "green";
        clr = "red";
    }
    else if(clr=="red"){
        b2.style.backgroundColor = "red";
        clr = "blue"; 
    }
    else{
        b2.style.backgroundColor = "blue";
        clr = "green";
    }
})
b2.addEventListener("mouseleave",function(){
    b2.style.backgroundColor = "white";
})

//total color = rgb(a,b,c)
// 0<=a,b,c<=255
let b4 = document.getElementById("box4");
b4.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256);  // 0 to 255
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    b4.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
})
b4.addEventListener("mouseleave",function(){
    b4.style.backgroundColor = "white";
})


let b3 = document.getElementById("box3");
b3.addEventListener("click",function(){
    let r1 = Math.floor(Math.random()*256);  // 0 to 255
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    b1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
    b2.style.backgroundColor = `rgb(${r2},${r1},${r3})`;
    b4.style.backgroundColor = `rgb(${r3},${r2},${r1})`;
})
b3.addEventListener("mouseleave",function(){
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "white";
    b4.style.backgroundColor = "white";
})

//Custom Cursor =>

let main = document.getElementById("main");
let crsr = document.getElementById("cursor");
main.addEventListener("mousemove",function(dets){
    // console.log(dets.x,dets.y);
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})

