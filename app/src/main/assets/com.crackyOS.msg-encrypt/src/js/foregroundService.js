page_ba2bf9cc = "./src/js/foregroundService.js";

document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        log(page_ba2bf9cc, "STANDBY");
    } else if (!document.hidden) {
        log(page_ba2bf9cc, "ACTIVE");
    }
});