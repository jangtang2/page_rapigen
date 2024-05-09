const submitBtn = document.getElementById('submit_btn');

function alertSuccess(){
    alert("Email has been sent successfully.");
}

submitBtn.addEventListener('click', alertSuccess);