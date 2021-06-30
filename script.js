const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const list = document.querySelector(".list");
const colorHome = document.querySelector(".colorHome");
const colorBlauw = document.querySelector(".colorBlauw")
const colorOranje = document.querySelector(".colorOranje");
const colorGeel = document.querySelector(".colorGeel");
const colorGroen = document.querySelector(".colorGroen");
const backgroundColor = document.querySelector(".background-color");
const home = document.querySelector(".home");
const blauw = document.querySelector(".blauw");
const oranje = document.querySelector(".oranje");
const geel = document.querySelector(".geel");
const groen = document.querySelector(".groen");


btn.addEventListener("click", function (){
   btn.classList.toggle("active");
   list.classList.toggle("menu");
});


colorHome.addEventListener("click", function(){
    document.body.style.backgroundColor = "lightgrey";
    home.classList.add("visiblehome");
    blauw.classList.remove("visibleblauw");
    oranje.classList.remove("visibleoranje");
    geel.classList.remove("visiblegeel");
    groen.classList.remove("visiblegroen");
});

colorBlauw.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
    blauw.classList.add("visibleblauw");
    home.classList.remove("visiblehome");
    oranje.classList.remove("visibleoranje");
    geel.classList.remove("visiblegeel");
    groen.classList.remove("visiblegroen");
});

colorOranje.addEventListener("click", function(){
    document.body.style.backgroundColor = "orange";
    oranje.classList.add("visibleoranje");
    home.classList.remove("visiblehome");
    blauw.classList.remove("visibleblauw");
    geel.classList.remove("visiblegeel");
    groen.classList.remove("visiblegroen");
});

colorGeel.addEventListener("click", function(){
    document.body.style.backgroundColor = "yellow";
    geel.classList.add("visiblegeel");
    home.classList.remove("visiblehome");
    blauw.classList.remove("visibleblauw");
    oranje.classList.remove("visibleoranje");
    groen.classList.remove("visiblegroen");
});

colorGroen.addEventListener("click", function(){
    document.body.style.backgroundColor = "green";
    groen.classList.add("visiblegroen");
    home.classList.remove("visiblehome");
    blauw.classList.remove("visibleblauw");
    oranje.classList.remove("visibleoranje");
    geel.classList.remove("visiblegeel");
});

