
setInterval(function () {
    let numbG = document.querySelectorAll(".bg-num-b");
    for (let s=0 ;s<numbG.length;s++){
        numcont = parseInt( Math.random()* 1000000000);
        numbG[s].innerText =numcont
    }
},20);
let numEbg =document.querySelectorAll(".bg-num");
for (let i=0;i<numEbg.length;i++){
    let lefts =parseInt( Math.random()* 1000);
    if(lefts>1800){
        lefts =parseInt( Math.random()* 1000)
    }else{
        numEbg[i].style.left =  lefts + "px";
    }
    numEbg[i].style.top = parseInt( Math.random()* 1000) + "px";
}

let time =new Date();
console.log(
    // time.getDate(),//22
    // time.getDay(),3 星期
    // time.getFullYear(),2017
    // time.getHours(),14
    // time.getMinutes(),1
    // time.getTime(),
    // time.getMilliseconds()
// time.getMonth()+1,月
//     time.getSeconds()秒
);
let times = `${time.getFullYear()}年${time.getMonth()+1}月${time.getDate()}号${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
let numTime = document.querySelector(".bg-num-time").innerHTML = times;
