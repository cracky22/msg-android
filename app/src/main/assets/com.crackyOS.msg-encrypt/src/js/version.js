const version = "v5.4.1";
//if saved_version not version, change
if ((localStorage.getItem("version") !== version)) {
    let oldVersion = localStorage.getItem("version");
    sessionStorage.setItem("_loglater", `Upgrading from ${oldVersion} to ${version}`);
    localStorage.setItem("version", version);
};