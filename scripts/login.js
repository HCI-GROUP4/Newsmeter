document.addEventListener("DOMContentLoaded", function(){
    let form = document.getElementById("login-form");
    form.addEventListener("submit", function(){
        let emailInput = document.getElementById("login-input-email").value;
        localStorage.setItem("email", emailInput);
    })
})