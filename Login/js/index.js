var loginForm = document.getElementById("loginForm");
var allUsers=[];
var signEmail = document.getElementById("signEmail");
var signPassword = document.getElementById("signPassword");
var loginAlert = document.getElementById("loginAlert");

if (localStorage.getItem("Users") != null) {
  allUsers = JSON.parse(localStorage.getItem("Users"));
}


console.log(allUsers);


loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  login();
})


function login() {
  var userData = {
    email: signEmail.value,
    password: signPassword.value
  }
  if (isUserValid(userData) == true) {
    console.log("valid user");
    loginAlert.classList.replace("d-block", "d-none");
    window.location.href = "../Home/index.html";
  }
  else {
    console.log("invalid user");
    loginAlert.classList.replace("d-none", "d-block");
  }
}


function isUserValid(userData) {
  for (var i =0; i<allUsers.length; i++) {
    if (allUsers[i].email == userData.email && allUsers[i].password == userData.password) {
      console.log("valid user");
      localStorage.setItem("userName", allUsers[i].name);
      return true;
    }
  }
}


