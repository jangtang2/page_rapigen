const langSetBtn = document.getElementById("langSetBtn");
const langPlaceholder = document.getElementById("langPlaceholder");
const langOption = document.getElementById("langOption");

function showLangOption(){
    langOption.style.display='block';
}
function noLangOption(){
    langOption.style.display='none';
}

langSetBtn.addEventListener("mouseover", showLangOption);
langSetBtn.addEventListener("mouseout", noLangOption);