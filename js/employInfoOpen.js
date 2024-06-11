const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");

const team1 = document.getElementById("team1");
const team2 = document.getElementById("team2");
const team3 = document.getElementById("team3");
const team4 = document.getElementById("team4");
const team5 = document.getElementById("team5");
const team6 = document.getElementById("team6");

var toggle1 = document.getElementById("toggle1");
const toggle2 = document.getElementById("toggle2");
const toggle3 = document.getElementById("toggle3");
const toggle4 = document.getElementById("toggle4");
const toggle5 = document.getElementById("toggle5");
const toggle6 = document.getElementById("toggle6");

function btn1Clicked(){
    if(btn1.classList.contains('active')){
        btn1.classList.remove('active');
        team1.style.display='none';
        toggle1.src = 'img/keyboard_arrow_down.svg';
    }
    else{
        btn1.classList.add('active');
        btn2.classList.remove('active');
        btn3.classList.remove('active');
        btn4.classList.remove('active');
        btn5.classList.remove('active');
        btn6.classList.remove('active');

        team1.style.display='block';
        team2.style.display='none';
        team3.style.display='none';
        team4.style.display='none';
        team5.style.display='none';
        team6.style.display='none';

        toggle1.src = 'img/keyboard_arrow_up.svg';
        toggle2.src = 'img/keyboard_arrow_down.svg';
        toggle3.src = 'img/keyboard_arrow_down.svg';
        toggle4.src = 'img/keyboard_arrow_down.svg';
        toggle5.src = 'img/keyboard_arrow_down.svg';
        toggle6.src = 'img/keyboard_arrow_down.svg';
    }
}
function btn2Clicked(){
    if(btn2.classList.contains('active')){
        btn2.classList.remove('active');
        team2.style.display='none';
        toggle2.src = 'img/keyboard_arrow_down.svg';
    }
    else{
        btn2.classList.add('active');
        btn1.classList.remove('active');
        btn3.classList.remove('active');
        btn4.classList.remove('active');
        btn5.classList.remove('active');
        btn6.classList.remove('active');

        team2.style.display='block';
        team1.style.display='none';
        team3.style.display='none';
        team4.style.display='none';
        team5.style.display='none';
        team6.style.display='none';

        toggle2.src = 'img/keyboard_arrow_up.svg';
        toggle1.src = 'img/keyboard_arrow_down.svg';
        toggle3.src = 'img/keyboard_arrow_down.svg';
        toggle4.src = 'img/keyboard_arrow_down.svg';
        toggle5.src = 'img/keyboard_arrow_down.svg';
        toggle6.src = 'img/keyboard_arrow_down.svg';
    }
}
function btn3Clicked(){
    if(btn3.classList.contains('active')){
        btn3.classList.remove('active');
        team3.style.display='none';
        toggle3.src = 'img/keyboard_arrow_down.svg';
    }
    else{
        btn3.classList.add('active');
        btn2.classList.remove('active');
        btn1.classList.remove('active');
        btn4.classList.remove('active');
        btn5.classList.remove('active');
        btn6.classList.remove('active');

        team3.style.display='block';
        team2.style.display='none';
        team1.style.display='none';
        team4.style.display='none';
        team5.style.display='none';
        team6.style.display='none';

        toggle3.src = 'img/keyboard_arrow_up.svg';
        toggle2.src = 'img/keyboard_arrow_down.svg';
        toggle1.src = 'img/keyboard_arrow_down.svg';
        toggle4.src = 'img/keyboard_arrow_down.svg';
        toggle5.src = 'img/keyboard_arrow_down.svg';
        toggle6.src = 'img/keyboard_arrow_down.svg';
    }
}
function btn4Clicked(){
    if(btn4.classList.contains('active')){
        btn4.classList.remove('active');
        team4.style.display='none';
        toggle4.src = 'img/keyboard_arrow_down.svg';
    }
    else{
        btn4.classList.add('active');
        btn2.classList.remove('active');
        btn3.classList.remove('active');
        btn1.classList.remove('active');
        btn5.classList.remove('active');
        btn6.classList.remove('active');

        team4.style.display='block';
        team2.style.display='none';
        team3.style.display='none';
        team1.style.display='none';
        team5.style.display='none';
        team6.style.display='none';

        toggle4.src = 'img/keyboard_arrow_up.svg';
        toggle2.src = 'img/keyboard_arrow_down.svg';
        toggle3.src = 'img/keyboard_arrow_down.svg';
        toggle1.src = 'img/keyboard_arrow_down.svg';
        toggle5.src = 'img/keyboard_arrow_down.svg';
        toggle6.src = 'img/keyboard_arrow_down.svg';
    }
}
function btn5Clicked(){
    if(btn5.classList.contains('active')){
        btn5.classList.remove('active');
        team5.style.display='none';
        toggle5.src = 'img/keyboard_arrow_down.svg';
    }
    else{
        btn5.classList.add('active');
        btn2.classList.remove('active');
        btn3.classList.remove('active');
        btn4.classList.remove('active');
        btn1.classList.remove('active');
        btn6.classList.remove('active');

        team5.style.display='block';
        team2.style.display='none';
        team3.style.display='none';
        team4.style.display='none';
        team1.style.display='none';
        team6.style.display='none';

        toggle5.src = 'img/keyboard_arrow_up.svg';
        toggle2.src = 'img/keyboard_arrow_down.svg';
        toggle3.src = 'img/keyboard_arrow_down.svg';
        toggle4.src = 'img/keyboard_arrow_down.svg';
        toggle1.src = 'img/keyboard_arrow_down.svg';
        toggle6.src = 'img/keyboard_arrow_down.svg';
    }
}
function btn6Clicked(){
    if(btn6.classList.contains('active')){
        btn6.classList.remove('active');
        team6.style.display='none';
        toggle6.src = 'img/keyboard_arrow_down.svg';
    }
    else{
        btn6.classList.add('active');
        btn2.classList.remove('active');
        btn3.classList.remove('active');
        btn4.classList.remove('active');
        btn5.classList.remove('active');
        btn1.classList.remove('active');

        team6.style.display='block';
        team2.style.display='none';
        team3.style.display='none';
        team4.style.display='none';
        team5.style.display='none';
        team1.style.display='none';

        toggle6.src = 'img/keyboard_arrow_up.svg';
        toggle2.src = 'img/keyboard_arrow_down.svg';
        toggle3.src = 'img/keyboard_arrow_down.svg';
        toggle4.src = 'img/keyboard_arrow_down.svg';
        toggle5.src = 'img/keyboard_arrow_down.svg';
        toggle1.src = 'img/keyboard_arrow_down.svg';
    }
}

btn1.addEventListener('click', btn1Clicked);
btn2.addEventListener('click', btn2Clicked);
btn3.addEventListener('click', btn3Clicked);
btn4.addEventListener('click', btn4Clicked);
btn5.addEventListener('click', btn5Clicked);
btn6.addEventListener('click', btn6Clicked);