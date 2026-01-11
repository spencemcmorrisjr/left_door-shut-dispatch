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
function loadFuelStops() {
  const fuelStops = [
    {
      brand: "Love's",
      store: "#123",
      exit: "Exit 46 – I-30",
      city: "Prescott, AR",
      address: "100 Loves Way",
      map: "https://www.google.com/maps/search/?api=1&query=100+Loves+Way+Prescott+AR"
    },
    {
      brand: "Pilot",
      store: "#452",
      exit: "Exit 44 – I-30",
      city: "Prescott, AR",
      address: "250 Pilot Dr",
      map: "https://www.google.com/maps/search/?api=1&query=250+Pilot+Dr+Prescott+AR"
    }
  ];

  const list = document.getElementById("fuelStopsList");
  list.innerHTML = "";

  fuelStops.forEach(stop => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${stop.brand} ${stop.store}</strong><br>
      ${stop.exit}<br>
      ${stop.city}<br>
      ${stop.address}<br>
      <a href="${stop.map}" target="_blank">Open in Maps</a>
    `;
    list.appendChild(li);
  });
}
loadFuelStops();
