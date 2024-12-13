page_e74daec8 = "./src/js/firstRun.js";

// Check if the user is already logged in
if (localStorage.getItem("status") === "active") {
  log(page_e74daec8, "status: active");
  window.location.href = "./index.html?comeFrom=firstRun.js";
// if status is locked, show locked page
} else if (localStorage.getItem("status") === "locked") {
  log(page_e74daec8, "status: locked");
  window.location.href = "./locked.html?comeFrom=firstRun.js";
}