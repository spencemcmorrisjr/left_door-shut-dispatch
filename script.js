document.getElementById("loginBtn").onclick = function () {
  let email = prompt("Enter admin email:");
  let password = prompt("Enter password:");

  if(email === "LeftDoorShutDispatch@gmail.com" && password === "Setup123!") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login (test mode)");
  }
};
function saveTruckProfile() {
  const profile = {
    height: document.getElementById("truckHeight").value,
    weight: document.getElementById("truckWeight").value,
    axles: document.getElementById("truckAxles").value
  };

  localStorage.setItem("truckProfile", JSON.stringify(profile));

  document.getElementById("truckProfileStatus").innerText =
    "Truck profile saved successfully.";
}
