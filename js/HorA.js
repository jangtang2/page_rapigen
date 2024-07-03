const h_btn = document.getElementById('h_btn')
const a_btn = document.getElementById('a_btn')

function hc(){
    window.location.href="human_product.html"
}
function ac(){
    window.location.href="animal_product.html"
}

h_btn.addEventListener('click', hc)
a_btn.addEventListener('click', ac)