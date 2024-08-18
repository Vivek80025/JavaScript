let main = document.getElementById("main");
let arr =
["https://i.pinimg.com/564x/f6/7e/61/f67e61ab43454fd66a3830ee20b76701.jpg",
"https://i.pinimg.com/564x/5d/6d/23/5d6d23fd7adb44baba20a60c252da339.jpg",
"https://i.pinimg.com/736x/e6/e1/45/e6e1457b6a612d2ce9f890991c3923f2.jpg",
"https://i.pinimg.com/736x/4c/a0/57/4ca057215fc1e2c9950b36797603e0a8.jpg",
"https://i.pinimg.com/564x/ac/36/51/ac3651e64257475dff8596d312eb3d88.jpg",
"https://i.pinimg.com/564x/d8/ff/ed/d8ffed41f8249509c7b3afd564d3686e.jpg",
"https://i.pinimg.com/736x/4a/c4/58/4ac458b8bc53756a40af5c1c947e4a5d.jpg",
"https://i.pinimg.com/564x/c3/9d/f1/c39df1e23ef1a98bea3ccba6fe173831.jpg",
"https://i.pinimg.com/564x/fd/b4/5c/fdb45ca73f25da55e594f6b57d0f931a.jpg",
"https://i.pinimg.com/564x/15/7c/53/157c53f8bb73b232fa222eb506456f77.jpg",
"https://i.pinimg.com/564x/b5/a4/fc/b5a4fc6ba46e8a6fc2ae8162882471d4.jpg"];
let s = "";
for(let i=0;i<52;i++){
    let r = Math.floor(Math.random()*arr.length);
    s = s+`<div class="cards"><img src="${arr[r]}" alt=""></div>`;
}
main.innerHTML = s;