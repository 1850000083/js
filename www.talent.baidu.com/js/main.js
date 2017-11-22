



// let myCanvas = document.querySelector("#mycanvas");
//左上蜘蛛网
// let canvasDiv1 = document.querySelector(".bg-canvas-div1");
let keepout = document.querySelector(".keepout");
let main = document.querySelector(".main");

//cookie保存pang判断是否执行动画
let cokies =document.cookie.substring(5);
if(cokies !== "www.name.cn"){
    (function () {
        keepout.style.animationName = "keepanimate";
        let m =    setInterval(function () {
            keepout.style.animationName = "";
            keepout.style.display = "none";
            clearInterval(m)
        },6000);

    })();

    let  oDate =new Date();
    oDate.setDate(oDate.getDate()+1);
    document.cookie ="name=www.name.cn;expires="+oDate;
}else{
    keepout.style.display = "none"
}


//左上蜘蛛网节点
let Div1s = document.querySelectorAll(".bg-canvas-div1-span");
let bgCircleSpan = document.querySelectorAll(".bg-circle-span");
let bgCircle = document.querySelectorAll(".bg-circle");
// console.log(tRightspan,indextRight,bgtRight);
//animation为动画名称//左上蜘蛛网
let anis = new Object();
let anis2 = new Object();
animatname(anis,anis2,"circle","myCont");
//animation为动画名称//左上蜘蛛网 end
//左上蜘蛛网节点 end
animat(bgCircle,bgCircleSpan,Div1s,anis,anis2);
//右上蜘蛛网节点
let tRightspan = document.querySelectorAll(".bg-tRight-span");
let indextRight = document.querySelectorAll(".bg-index-tRight-span");
let bgtRight = document.querySelectorAll(".bg-circle-tRight");

let anisr = new Object();
let anisr2 = new Object();
animatname(anisr,anisr2,"circletRight","tRight");
animat(bgtRight,indextRight,tRightspan,anisr,anisr2);
//右上蜘蛛网节点 end

//左下蜘蛛网节点
let bLeftspan = document.querySelectorAll(".bg-bLeft-span");
let indexbLeft = document.querySelectorAll(".bg-index-bLeft-span");
let bgbLeft = document.querySelectorAll(".bg-circle-bLeft");
let anisbl = new Object();
let anisbl2 = new Object();
animatname(anisbl,anisbl2,"circlebLeft","bLeft");

animat(bgbLeft,indexbLeft,bLeftspan,anisbl,anisbl2);
//左下蜘蛛网节点 end

//右下蜘蛛网节点
let bRightspan = document.querySelectorAll(".bg-bRight-span");
let indexbRight = document.querySelectorAll(".bg-circle-bRight-span");
let bgbRight = document.querySelectorAll(".bg-circle-bRight");
let anisbr = new Object();
let anisbr2 = new Object();
animatname(anisbr,anisbr2,"circletbRight","bRight");
// console.log(bRightspan,indexbRight,bgbRight)
animat(bgbRight,indexbRight,bRightspan,anisbr,anisbr2);
//右下蜘蛛网节点 end




//动画名称加上
// 传入4参数donfours为4个span的domfive为5个span的 obj为4个span的动画参数
//nis0 到4 组成 obj2为5个span参数 有nisTow0 到4组成的 字符串
function topLeftAnimation(donfours,domfive,obj,obj2) {
    donfours[0].style.animationName = obj.nis0;
    donfours[1].style.animationName = obj.nis1;
    donfours[2].style.animationName = obj.nis2;
    donfours[3].style.animationName = obj.nis3;

    domfive[0].style.animationName = obj2.nisTow0;
    domfive[1].style.animationName = obj2.nisTow1;
    domfive[2].style.animationName = obj2.nisTow2;
    domfive[3].style.animationName = obj2.nisTow3;
    domfive[4].style.animationName = obj2.nisTow4;
}
//动画名称移除
//传入4参数donfours为4个span的 bgCircleSpan为5个span的
function clearTopLeftAnimation(donfours,bgCircleSpan) {

    for (let v = 0 ;v<donfours.length;v++) {
        donfours[v].style.animationName = "";
    }

    for (let i = 0 ;i<bgCircleSpan.length;i++) {
        bgCircleSpan[i].style.animationName = "";
    }
}


//循环绑定事件
// bgCircle为bg-index-上下左右下的6个div
function animat(bgCircle,bgCircleSpan,Div1s,anis,anis2) {
    for (let i = 0; i < bgCircle.length;i++){
        bgCircle[i].addEventListener("mouseover",function () {
            topLeftAnimation(bgCircleSpan,Div1s,anis,anis2);
            for (let c = 0 ;c<bgCircle.length;c++) {
                bgCircle[c].style.opacity = ".8"
            }
        });

        bgCircle[i].addEventListener("mouseout",function () {
            clearTopLeftAnimation(Div1s,bgCircleSpan);
            for (let b = 0 ;b<bgCircle.length;b++) {
                bgCircle[b].style.opacity = "0.3"
            }
            bgCircle[0].style.opacity = "0.8"
        })
    }

}

//第一个是四个动画的名称 第二个是5个的
function animatname(anisr,anisr2,anisrName,anisr2Name) {
    anisr.nis0 = anisrName+"1";
    anisr.nis1 = anisrName+"2";
    anisr.nis2 = anisrName+"3";
    anisr.nis3 = anisrName+"4";
    anisr2.nisTow0 = anisr2Name+"1";
    anisr2.nisTow1 = anisr2Name+"2";
    anisr2.nisTow2 = anisr2Name+"3";
    anisr2.nisTow3 = anisr2Name+"4";
    anisr2.nisTow4 = anisr2Name+"5";
}






//第二种方法可以这样做
// for (let i = 0 ;i<Div1s.length;i++){
    /*
    spiderWeb(canvasDiv1,Div1s[0],100);
    spiderWeb(canvasDiv1,Div1s[1],200);
    spiderWeb(canvasDiv1,Div1s[2],300);
    spiderWeb(canvasDiv1,Div1s[3],400);
    spiderWeb(canvasDiv1,Div1s[4],500);
    */
// }
// console.log(Div1s);
//DomCircle鼠标mouseover的节点
//DomSpan为需要边长的节点
//conts 为变长的长度
/*
function spiderWeb(DomCircle,DomSpan,conts) {
    let cont = 0 ;
    DomCircle.addEventListener("mouseover",function () {
        let  s=   setInterval(function () {

            cont += 1 ;
            if (cont < conts ){
                DomSpan.style.height = cont +"px"
            }else{
                clearInterval(s)
            }
        },5);

        DomCircle.addEventListener("mouseout",function () {
            DomSpan.style.transition = "none";
            DomSpan.style.height = "0";
            cont = 0;
            clearInterval(s)
        });

    });
}
*/




/*
let cont = 0 ;
let s = 80 ;
let y = 110.5;
myCanvas.style.transition = "2s";
let context = myCanvas.getContext("2d");
// context.fillStyle = "#fff";
// context.fillRect(10,10,150,150);
canvasDiv1.onmouseover = function () {
    let  setDIV =  setInterval(function () {
        cont += 1 ;
        context.beginPath();
        context.moveTo(s,y);
        context.lineTo(s+cont,y+cont);
        // context.lineTo(cont,cont);
        context.lineWidth = 1;
        // context.globalCompositeOperation = 'source-atop';
        context.strokeStyle = 'rgba(255,255,255,0.2)';
        // context.strokeStyle = "#fff";
        context.stroke();

        if (cont == 100){
            clearInterval(setDIV)
        }
    },20);
    canvasDiv1.onmouseout = function () {
        clearInterval(setDIV);
        cont = 0 ;
        context.clearRect(0,0,myCanvas.width,myCanvas.height);
    }

};

;
*/
