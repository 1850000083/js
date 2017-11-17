let listLi = document.querySelectorAll(".bg-five-list>ul>li");
let listTable = document.querySelectorAll(".bg-five-table");
let tableActive = document.querySelector(".bg-five-table-active");
for (var i = 0; i < listLi.length; i++) {

    listLi[i].index=i;
    listLi[i].onmouseover=function(){
        tableActive.animation = "tableActive 1s";
        for (var j = 0; j < listLi.length; j++) {
            listLi[j].className='';
            listTable[j].className='bg-five-table none';
        }
        this.className='select';
        listTable[this.index].className='bg-five-table show';
    }
    listLi[i].onmouseout = function () {

    }
}
//nav导航栏鼠标拉动超过200 背景换色
window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var nav_bg = document.querySelector("nav");
    var main_bg = document.querySelector(".all-bg");
    if( t >= 200 ) {
        nav_bg.style.height = "80px";
        nav_bg.style.backgroundColor = "#32CDFF";
        if(t >= 1000){
            main_bg.style.backgroundImage = "url(../img/course_concept_banner.jpg"
        }
        else if(t < 300) {
            main_bg.style.backgroundImage = "url(../img/course_bg.jpg)"
        }
    } else {
        nav_bg.style.backgroundColor = "transparent";
    }
};

