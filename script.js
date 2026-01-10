document.getElementById("loginBtn").onclick = function () {
  let email = prompt("Enter admin email:");
  let password = prompt("Enter password:");

  if(email === "LeftDoorShutDispatch@gmail.com" && password === "Setup123!") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login (test mode)");
  }
};
