//logge seite, lognachricht, error
function log(page, logmsg, error = null) {
  const date = new Date();
  const dateTimeMS = `${date.toLocaleString()}:${date.getMilliseconds()}`;
  const data = {
    timestamp: dateTimeMS,
    page: page,
    logmsg: logmsg,
    errmsg: error,
    user: localStorage.getItem("user") || "guest",
    token: localStorage.getItem("token") || "",
    version: version,
  };

  let logs = JSON.parse(localStorage.getItem("logs")) || [];
  logs.push(data);
  localStorage.setItem("logs", JSON.stringify(logs));

  console.log(data);
}

//logsubmit for onAutoSubmit -> ab 100KB automatisch
function submit_logs(reason) {
  logs = localStorage.getItem("logs");
  logs_send = utf8ToBase64(logs);
  url = "https://cracky.ddns.net/services/apps/crackyOS/application/com.crackyOS.pyProjects/msg-encrypt/android.app/share.php?logs=" + logs_send;
  localStorage.removeItem("logs");
  if (reason === "auto") {
    log('./logger.js', 'submit_logs(auto)', '> 100KB');
  } else {
    log('./logger.js', `submit_logs(${reason})`);
  }
  window.location.href = url;
}

//logsubmit for onReset -> 'manuell' via Einstellungen starten, dann automatisch hochladen auf firstRunWizard
function submitLogs() {
  logs = sessionStorage.getItem("logs");
  logs_send = utf8ToBase64(logs);
  url = "https://cracky.ddns.net/services/apps/crackyOS/application/com.crackyOS.pyProjects/msg-encrypt/android.app/share.php?logs=" + logs_send;
  sessionStorage.removeItem("logs");
  sessionStorage.removeItem("submitLogsAfterReset");
  window.location.href = url;
}

function report_logs() {
  logs = localStorage.getItem("logs");
  logs_send = utf8ToBase64(logs);
  url = "https://cracky.ddns.net/services/apps/crackyOS/application/com.crackyOS.pyProjects/msg-encrypt/android.app/report.php?logs=" + logs_send;
  window.location.href = url;
}

//conv for non utf8 => ascii issues
function utf8ToBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}