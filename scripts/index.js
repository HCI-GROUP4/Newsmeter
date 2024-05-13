function login(name) {
    let loginButton = document.getElementById("login-button");
    let profileContainer = document.getElementById("header-profile-container")
    let profileNameText = document.getElementById("profile-name")


    loginButton.style.display = "none";
    profileContainer.style.display = "flex";
    profileNameText.innerText = name;
}

document.addEventListener("DOMContentLoaded", function(){
    let loginButton = document.getElementById("login-button");
    loginButton.onclick = function(){
        let name = prompt("Input username:");
        login(name);
    }
})