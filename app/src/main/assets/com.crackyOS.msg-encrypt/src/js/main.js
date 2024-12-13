page_f3012830 = "./src/js/main.js";

if (localStorage.getItem("status") === "locked") {
  log(page_f3012830, "status: locked");
  window.location.href = "./locked.html?comeFrom=main.js";
}

//function for lock msg-app -> WortCode to reactivate
function lock() {
  vibrate('pattern', 'p_l');
  log(page_f3012830, "lock");
  localStorage.removeItem("encrypted");
  localStorage.removeItem("decrypted");
  if (localStorage.getItem('sfL') !== 'true') {
    sessionStorage.removeItem("lastInput");
  }
  localStorage.setItem("status", "locked");
  window.location.href = "./locked.html?comeFrom=main.js";
}

function reboot() {
  sessionStorage.setItem("_reboot", "true");
  window.location.href = "redirect.html";
}