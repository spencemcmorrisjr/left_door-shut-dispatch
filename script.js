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
function saveBOL() {
  const fileInput = document.getElementById("bolUpload");

  if (!fileInput.files.length) {
    alert("Please select a BOL file.");
    return;
  }

  const fileName = fileInput.files[0].name;

  localStorage.setItem("driverBOL", fileName);

  document.getElementById("bolStatus").innerText =
    "BOL uploaded successfully: " + fileName;
}
const factoringInfo = {
  TAFS: {
    phone: "800-761-2387",
    website: "https://tafs.com"
  },
  Triumph: {
    phone: "866-668-4222",
    website: "https://triumphbusinesscapital.com"
  },
  RTS: {
    phone: "866-697-7238",
    website: "https://rtsinc.com"
  },
  Apex: {
    phone: "800-511-6022",
    website: "https://apexcapitalcorp.com"
  }
};

function saveFactoring() {
  const company = document.getElementById("factoringCompany").value;

  if (!company) {
    alert("Please select a factoring company.");
    return;
  }

  localStorage.setItem("factoringCompany", company);

  const info = factoringInfo[company];

  document.getElementById("factoringDetails").innerHTML = `
    <strong>Phone:</strong> ${info.phone}<br>
    <strong>Website:</strong>
    <a href="${info.website}" target="_blank">${info.website}</a>
  `;

  document.getElementById("factoringStatus").innerText =
    "Factoring company saved.";
}
