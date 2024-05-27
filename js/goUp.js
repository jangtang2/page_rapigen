const go_up_btn = document.querySelector(".go_top")

function up(){
    window.scrollTo({
        top:0,
        behavior:"smooth",

    });
}

go_up_btn.addEventListener("click", up)