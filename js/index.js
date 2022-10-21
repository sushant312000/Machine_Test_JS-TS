let userError = document.getElementById("userError");
let passError = document.getElementById("passError");

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let role = document.getElementsByName("login-type").value;

function init() {
    if (window.localStorage.getItem("userType") == null) {
        return;
    }
    if(window.localStorage.getItem("userType")==="Sushant"){
        window.location.href="request-form.html";
        return;
    }
    else{
        window.location.href="admin-view.html";
        return;
    }
}
function login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    userError.innerHTML = "";
    passError.innerHTML = "";

    if (isEmpty(username)) {
        userError.innerHTML = "Please enter user name";
        return;
    }

    //Check for empty field
    if (isEmpty(password)) {
        passError.innerHTML = "Enter password";
        return;
    }

    //Check for admin login
    if ((username !== "Admin") && (username !== "Sushant")) {
        userError.innerHTML = "Invalid user"
        return;
        // passError.innerHTML = "Wrong password"
    }
    if ((username === "Admin") && (password !== "admin@123")) {
        passError.innerHTML = "Wrong password";
        return;
    }

    if ((username === "Sushant") && (password !== "sushant@123")) {
        passError.innerHTML = "Wrong password";
        return;
    }

    alert("Welcome " + username);

    if (username === "Sushant") {
        window.localStorage.setItem("userType", "employee");
        window.location.href = "request-form.html";
        return;
    }
    else if (username === "Admin") {
        window.localStorage.setItem("userType", "admin");
        window.location.href = "admin-view.html";
        return;
    }
}

function isEmpty(value) {
    if (value.length < 1) {
        return true;
    }
    else {
        return false;
    }
}

function logout() {
    if (window.localStorage.getItem("userType") == null) {
        return;
    }
    window.localStorage.removeItem("userType");
    window.location.href = "login.html";
}