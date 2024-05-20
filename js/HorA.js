const h_btn = document.getElementById('human_btn')
const a_btn = document.getElementById('animal_btn')

function h_clicked(){
    window.location.href='human_product.html';
}
function a_clicked(){
    window.location.href='animal_product.html';
}

h_btn.addEventListener('click', h_clicked);
a_btn.addEventListener('click', a_clicked);