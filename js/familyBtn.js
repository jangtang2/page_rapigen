const button = document.querySelector('button');
const dropdown = document.getElementById('dropdown');
var toggle =1;
function show(){
    if(toggle==1){
        dropdown.style.display = 'block';
    }
    else{
        dropdown.style.display = 'none';
    }
    toggle = toggle*(-1);
}
function hide(){
    dropdown.style.display = 'none';
}
button.addEventListener('click', show);
button.addEventListener("blur", hide);