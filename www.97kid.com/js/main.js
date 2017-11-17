// let buyID =document.querySelector("#buy");
// console.log(buyID)
//nav导航栏鼠标拉动超过200 背景换色

window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var nav_bg = document.querySelector("nav");
    // buyID.onclick = function () {
    //     var s = document.documentElement.scrollTop || document.body.scrollTop;
    //     document.documentElement.scrollTop=4000;
    //     document.body.scrollTop=4000;
    // }
    if( t >= 200 ) {
        nav_bg.style.height = "80px";
       nav_bg.style.backgroundColor = "#32CDFF";
    } else {
        nav_bg.style.backgroundColor = "transparent";
    }
};

//公共类似轮播图
let lLeft = document.querySelector(".bg-seven-slideshow-img-left");
let lRight = document.querySelector(".bg-seven-slideshow-img-right");
let lshift = document.querySelector(".bg-seven-slideshow-clear-active");
// console.log(lLeft,lRight);
var sum = 0;
 lLeft.addEventListener("click",function () {
      sum +=350;
     if ( sum >= 0){
         sum = 0;
         lshift.style.left = sum + "px"
     }else {
         lshift.style.left = sum + "px"
     }
 });
lRight.addEventListener("click",function () {
    sum -=350;
    if (sum <= -1050){
        sum = -1050;
        lshift.style.left = sum + "px"
    }else {
        // sum +=400;
        lshift.style.left = sum + "px"
    }
});
