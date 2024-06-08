//* variables
var signUpForm = document.getElementById("registerForm");
var signName = document.getElementById("signName");
var nameAlert = document.getElementById("nameAlert");
var signEmail = document.getElementById("signEmail");
var emailAlert = document.getElementById("emailAlert");
var signPassword = document.getElementById("signPassword");
var passwordAlert = document.getElementById("passwordAlert");
var exitAlert = document.getElementById("exitAlert");
var successAlert = document.getElementById("successAlert");
var allUsers=[];


//? check if there is any user in local storage
if(localStorage.getItem("Users") != null) {
  allUsers = JSON.parse(localStorage.getItem("Users"));
}
else {
  allUsers = [];  //not required to do else
}


//! submit form
signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (checkIfAllInputsAreValid()) {
    addUser();
  }
  else {
    console.log("not adding user");
  }
  })


//todo : add user function
function addUser() {
  var newUser = {
    name: signName.value,
    email: signEmail.value,
    password: signPassword.value
  }
  if (checkIfEmailExist(newUser) == true) {
    // console.log("email already exist");
    signEmail.classList.remove("is-valid");
    signEmail.classList.add("is-invalid");
    exitAlert.classList.replace("d-none", "d-block");
  }
  else {
    allUsers.push(newUser);
    console.log(allUsers);
    localStorage.setItem("Users", JSON.stringify(allUsers));
    exitAlert.classList.replace("d-block", "d-none");
    successAlert.classList.replace("d-none", "d-block");
    setTimeout(() => {
      window.location.href = "./Login/index.html";
    }, 3000);
  }
}


//todo : check if there is the same email in local storage
function checkIfEmailExist(newUser) {
  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()) {
      console.log("email already exist");
      return true;
    }
  }
  return false;
}


//? validation of each input
function validateInput(regex,element,alertMessage) {
  var pattern = regex;
  if (pattern.test(element.value)) {
    // console.log("valid");
    alertMessage.classList.replace("d-block", "d-none");
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
    return true;
  } else {
    // console.log("invalid");
    alertMessage.classList.replace("d-none", "d-block");
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return false;
  }
}


//? check if all inputs are valid
function checkIfAllInputsAreValid() {
  if (
  validateInput(/^[a-zA-Z\s'-]{2,}$/, signName, nameAlert) ==true && 
  validateInput(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, signEmail, emailAlert) ==true && 
  validateInput(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/, signPassword, passwordAlert) ==true) {
    // console.log("all inputs are valid");
    return true;
  } else {
    console.log("some inputs are invalid");
    return false;
  }
}





