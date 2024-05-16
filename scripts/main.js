function login() {
    // hide login button
    let loginButton = document.getElementById("to-login-page");
    loginButton.style.display = "none";
    
    // show profile name
    let profileContainer = document.getElementById("header-profile-container");
    let profileNameTag = document.getElementById("profile-name");
    profileContainer.style.display = "flex";
    profileNameTag.innerText = localStorage.getItem("email");

    // show more menu in sidebar
    let menuAfterLogin = document.getElementsByClassName("menu-after-login");
    for (i = 0; i < menuAfterLogin.length; i++) {
        menuAfterLogin[i].style.display = "flex";
    }
}

document.addEventListener("DOMContentLoaded", function(){
    // check login status
    if (localStorage.getItem("email") != null) {
        login();
    }
})