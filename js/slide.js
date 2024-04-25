const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");

const c_slide1 = document.getElementById("inner1");
const c_slide2 = document.getElementById("inner2");
const c_slide3 = document.getElementById("inner3");

var count=0;

setInterval(rotate, 3000);
function rotate(){
    count= count%3
    if(count==1){
        dot1Selected();
    }
    else if (count==2){
        dot2Selected();
    }
    else{
        dot3Selected();
    }
    count++;
}

 function dot1Selected(){
    dot1.style.backgroundColor="black";
    dot2.style.backgroundColor="rgba(0, 0, 0, 0.4)";
    dot3.style.backgroundColor="rgba(0, 0, 0, 0.4)";
    c_slide1.style.display='block';
    c_slide2.style.display='none';
    c_slide3.style.display='none';
}
 function dot2Selected(){
    dot2.style.backgroundColor="black";
    dot1.style.backgroundColor="rgba(0, 0, 0, 0.4)";
    dot3.style.backgroundColor="rgba(0, 0, 0, 0.4)";
    c_slide2.style.display='block';
    c_slide1.style.display='none';
    c_slide3.style.display='none';
}
function dot3Selected(){
    dot3.style.backgroundColor="black";
    dot2.style.backgroundColor="rgba(0, 0, 0, 0.4)";
    dot1.style.backgroundColor="rgba(0, 0, 0, 0.4)";
    c_slide3.style.display='block';
    c_slide1.style.display='none';
    c_slide2.style.display='none';
}

dot1.addEventListener("click", dot1Selected);
dot2.addEventListener("click", dot2Selected);
dot3.addEventListener("click", dot3Selected);
