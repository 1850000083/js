let tableActive = document.querySelector(".bg-five-table-active");

//自我执行函数
(function(){
    let shiftH1 = document.querySelector(".bg-center-text-shift-h1");
    let shiftH2 = document.querySelector(".bg-center-text-shift-h2");
    let shiftP = document.querySelector(".bg-center-text-shift-p");
    let shiftDivBg = document.querySelector(".bg-center-text-div");
    let  shiftBgLeft = document.querySelector(".bg-left");
    let  shiftBgRight = document.querySelector(".bg-right");



    shiftBgLeft.style.width = "50%";
    shiftBgRight.style.width = "50%";

    shiftH1.style.top = "20px";
    shiftH2.style.top = "130px";
    shiftP.style.top = "260px";
    shiftDivBg.style.top = "310px";

    shiftH1.style.opacity = "1";
    shiftH2.style.opacity = "1";
    shiftP.style.opacity = "1";
    shiftDivBg.style.opacity = "1";

}());
//index专用类似轮播图
let lLeftIndex = document.querySelector(".bg-seven-slideshow-img-left-index");
let lRightIndex = document.querySelector(".bg-seven-slideshow-img-right-index");
let lshiftIndex = document.querySelector(".bg-seven-slideshow-clear-active");
// console.log(lLeft,lRight);
var sumIndex = 0;
lLeftIndex.addEventListener("click",function () {
    sumIndex +=1100;
    if ( sumIndex >= 0){
        sumIndex = 0;
        lshiftIndex.style.left = sumIndex + "px"
    }else {
        lshiftIndex.style.left = sumIndex + "px"
    }
});
lRightIndex.addEventListener("click",function () {
    sumIndex -=1100;
    if (sumIndex <= -5500){
        sumIndex = -5500;
        lshiftIndex.style.left = sumIndex + "px"
    }else {
        // sum +=400;
        lshiftIndex.style.left = sumIndex + "px"
    }
});


let bGspan = document.querySelectorAll(".bg-six-buy-div-span");
let bgSixDiv = document.querySelectorAll(".bg-six-buy-div");
for (let i =0 ;i <bgSixDiv.length  ; i++){
    bgSixDiv[i].onmouseover = function () {
        bgSixDiv[i].style.backgroundColor = "#3dc3fa"
        bGspan[i].style.backgroundColor = "#fff"
    };
}
for (let i =0 ;i <bgSixDiv.length  ; i++){
    bgSixDiv[i].onmouseout = function () {
        bgSixDiv[i].style.backgroundColor = "#fff"
    };
}

//获取li
//获取需要显示的元素组
//设置属性让其显示并让其兄弟隐藏

let listLi = document.querySelectorAll(".bg-five-list>ul>li");
let listTable = document.querySelectorAll(".bg-five-table");
for (var i = 0; i < listLi.length; i++) {

    listLi[i].index=i;
    listLi[i].onmouseover=function(){
        tableActive.animation = "tableActive 1s";

        for (var j = 0; j < listLi.length; j++) {
            listLi[j].className='';
            listTable[j].className='bg-five-table none';
        }
        this.className='select';
        console.log(this,this.index);
        listTable[this.index].className='bg-five-table show';
    };
}


