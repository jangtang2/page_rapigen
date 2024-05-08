const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

function btn1Selected(){
    btn1.style.backgroundColor="#C8102E";
    btn1.style.color="white";
    btn1.style.borderColor="#C8102E";

    btn2.style.backgroundColor="white";
    btn2.style.color="black";
    btn2.style.borderColor="#C8102E white #C8102E white";
    
    btn3.style.backgroundColor="white";
    btn3.style.color="black";
    btn3.style.borderColor="#C8102E white #C8102E white";

    screen1.style.display="flex";
    screen2.style.display="none";
    screen3.style.display="none";
}

function btn2Selected(){
    btn2.style.backgroundColor="#C8102E";
    btn2.style.color="white";
    btn2.style.borderColor="#C8102E";

    btn1.style.backgroundColor="white";
    btn1.style.color="black";
    btn1.style.borderColor="#C8102E white #C8102E white";
    
    btn3.style.backgroundColor="white";
    btn3.style.color="black";
    btn3.style.borderColor="#C8102E white #C8102E white";

    screen2.style.display="flex";
    screen1.style.display="none";
    screen3.style.display="none";
}

function btn3Selected(){
    btn3.style.backgroundColor="#C8102E";
    btn3.style.color="white";
    btn3.style.borderColor="#C8102E";

    btn2.style.backgroundColor="white";
    btn2.style.color="black";
    btn2.style.borderColor="#C8102E white #C8102E white";
    
    btn1.style.backgroundColor="white";
    btn1.style.color="black";
    btn1.style.borderColor="#C8102E white #C8102E white";

    screen3.style.display="flex";
    screen2.style.display="none";
    screen1.style.display="none";
}

btn1.addEventListener("click", btn1Selected);
btn2.addEventListener("click", btn2Selected);
btn3.addEventListener("click", btn3Selected);