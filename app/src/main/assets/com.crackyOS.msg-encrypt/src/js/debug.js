//setup msg as "debug" user with all possible options / features

function setup_as(as_what) {
  if (as_what === "debug") {
    localStorage.clear();
    sessionStorage.clear();
    log(page_e74daec8, "setup as debug user");
    localStorage.setItem("allowDebug", "true");
    localStorage.setItem("pm", "true");
    localStorage.setItem('hf', 'true');
    localStorage.setItem("msgserver_ip", "https://cracky.ddns.net:8080");
    localStorage.setItem("darkmodeButton", "#424242");
    localStorage.setItem("darkmode", "true");
    localStorage.setItem("status", "active");
    localStorage.setItem("kompatiblerModus", "false");
    localStorage.setItem("showUpdates", "true");
    localStorage.setItem("user", "DEBUG");
    localStorage.setItem("EHL", "true");
    localStorage.setItem("cival", "330");
    localStorage.setItem("WortCode", "Banane");
    localStorage.setItem("autoLogSubmit", "true");
    localStorage.setItem("autoclear", "true");
    localStorage.setItem("darkmodeBackground", "#1f1f1f");
    localStorage.setItem("headerTheme", "#13525e");
    localStorage.setItem("devStatus", "true");
    localStorage.setItem("token", "DEBUG");
    localStorage.setItem("setupversion", version);
    sessionStorage.setItem("runtime", "true");
    window.location.href = "./index.html?comeFrom=debug.js";
  } else if (as_what === "developer") {
    localStorage.clear();
    sessionStorage.clear();
    log(page_e74daec8, "setup as developer");
    localStorage.setItem("allowDebug", "true");
    localStorage.setItem("pm", "true");
    localStorage.setItem("hf", "true");
    localStorage.setItem("hdTx", "true");
    localStorage.setItem("msgserver_ip", "https://cracky.ddns.net:8080");
    localStorage.setItem("darkmodeButton", "#424242");
    localStorage.setItem("headerTheme", "#13525e");
    localStorage.setItem("darkmode", "true");
    localStorage.setItem("status", "active");
    localStorage.setItem("cival", "350");
    localStorage.setItem("kompatiblerModus", "false");
    localStorage.setItem("showUpdates", "true");
    localStorage.setItem("user", "DEVELOPER");
    localStorage.setItem("EHL", "true");
    localStorage.setItem("WortCode", "Banane");
    localStorage.setItem("autoLogSubmit", "true");
    localStorage.setItem("autoclear", "true");
    localStorage.setItem("darkmodeBackground", "#3c3c3c");
    localStorage.setItem("devStatus", "true");
    localStorage.setItem("token", "!D3VM4");
    localStorage.setItem("name", "Martin Blieninger");
    localStorage.setItem("email", "martinblieninger2208@gmail.com");
    localStorage.setItem("rph", "true");
    localStorage.setItem("setupversion", version);
    sessionStorage.setItem("dev", "true");
    sessionStorage.setItem("runtime", "true");
    window.location.href = "./index.html?comeFrom=debug.js";
  }
}