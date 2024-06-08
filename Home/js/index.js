var userName = localStorage.getItem("userName");
// console.log(userName);

var userNameWrapper = document.getElementById("userNameWrapper");
userNameWrapper.innerHTML = userName

var logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("userName");
  window.location.href = "../../Login/login.html";
})