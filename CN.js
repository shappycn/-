
var div1=document.getElementById('img1');
var div6=document.getElementById('newsText1');
var div16=document.getElementById('name1');
var div2=document.getElementById('img2');
var div7=document.getElementById('newsText2');
var div17=document.getElementById('name2');
var div3=document.getElementById('img3');
var div8=document.getElementById('newsText3');
var div13=document.getElementById('newTitle1');
var div18=document.getElementById('name3');
var div4=document.getElementById('img4');
var div9=document.getElementById('newsText4');
var div19=document.getElementById('name4');
var div5=document.getElementById('img5');
var div10=document.getElementById('newsText5');
var div20=document.getElementById('name5');
function toPage1(num){
    for(var i=1;i<=10;i++){
        window["div"+i].style.zIndex=0;
    }
    for(var i=16;i<=20;i++){
        window["div"+i].style.backgroundColor="#d6b17e";
        window["div"+i].style.color="#fff";
    }
    div1.style.zIndex=1;
    div6.style.zIndex=1;
    div16.style.backgroundColor="#fff";
    div16.style.color="#d6b17e";
}

var div12=document.getElementById('newTitle1');
function toPage2(num){
    for(var i=1;i<=10;i++){
        window["div"+i].style.zIndex=0;
    }
    for(var i=16;i<=20;i++){
        window["div"+i].style.backgroundColor="#d6b17e";
        window["div"+i].style.color="#fff";
    }
    div2.style.zIndex=1;
    div7.style.zIndex=1;
    div17.style.backgroundColor="#fff";
    div17.style.color="#d6b17e";
}

var div13=document.getElementById('newTitle1');
function toPage3(num){
    for(var i=1;i<=10;i++){
        window["div"+i].style.zIndex=0;
    }
    for(var i=16;i<=20;i++){
        window["div"+i].style.backgroundColor="#d6b17e";
        window["div"+i].style.color="#fff";
    }
    div3.style.zIndex=1;
    div8.style.zIndex=1;
    div18.style.backgroundColor="#fff";
    div18.style.color="#d6b17e";
}

var div14=document.getElementById('newTitle1');
function toPage4(num){
    for(var i=1;i<=10;i++){
        window["div"+i].style.zIndex=0;
    }
    for(var i=16;i<=20;i++){
        window["div"+i].style.backgroundColor="#d6b17e";
        window["div"+i].style.color="#fff";
    }
    div4.style.zIndex=1;
    div9.style.zIndex=1;
    div19.style.backgroundColor="#fff";
    div19.style.color="#d6b17e";
}
var div15=document.getElementById('newTitle1');
function toPage5(num){
    for(var i=1;i<=10;i++){
        window["div"+i].style.zIndex=0;
    }
    for(var i=16;i<=20;i++){
        window["div"+i].style.backgroundColor="#d6b17e";
        window["div"+i].style.color="#fff";
    }
    div5.style.zIndex=1;
    div10.style.zIndex=1;
    div20.style.backgroundColor="#fff";
    div20.style.color="#d6b17e";
}


var divList=document.getElementById('signList')
function toSign(){
    divList.style.top="110px";
}
function toExit(){
    divList.style.top="-999px";
}
