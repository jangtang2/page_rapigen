const l_btn = document.getElementById('l_btn')
const c_btn = document.getElementById('c_btn')

function lc(){
    window.location.href="LSR_product.html"
}
function cc(){
    window.location.href="animal_product.html"
}

l_btn.addEventListener('click', lc)
c_btn.addEventListener('click', cc)