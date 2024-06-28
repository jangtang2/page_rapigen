const btn1=document.getElementById('btn1')
const btn2=document.getElementById('btn2')
const btn3=document.getElementById('btn3')

const map1=document.getElementById('map1')
const map2=document.getElementById('map2')
const map3=document.getElementById('map3')

function f1(){
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");

    map1.style.display="block";
    map2.style.display="none";
    map3.style.display="none";
}
function f2(){
    btn1.classList.remove("active");
    btn2.classList.add("active");
    btn3.classList.remove("active");
    map2.style.display="block";
    map1.style.display="none";
    map3.style.display="none";
}
function f3(){
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.add("active");
    map3.style.display="block";
    map2.style.display="none";
    map1.style.display="none";
}


btn1.addEventListener('click', f1)
btn2.addEventListener('click', f2)
btn3.addEventListener('click', f3)