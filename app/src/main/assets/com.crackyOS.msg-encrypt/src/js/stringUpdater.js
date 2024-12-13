page_101db1a4 = "./src/js/stringUpdater.js";
function updateValues() {
  //changes
  localStorage.setItem("autoLogSubmit", "true");
  localStorage.setItem("showUpdates", "true");

  //8080 proxy sache
  if (localStorage.getItem("msgserver_ip") === "https://cracky.ddns.net") {
    localStorage.setItem("msgserver_ip", "https://cracky.ddns.net:8080");
  }
  localStorage.setItem("headerTheme", "#13525e");
  localStorage.setItem("cival", "330");
  log(page_101db1a4, "updated values successfully");

  certStatus = updateCertificate();
  if (certStatus === "successfull") {
    log(page_101db1a4, "updated certificate successfully");
  } else {
    log(page_101db1a4, "failed to update certificate");
  }
}

/* der StringUpdater ist dafür wenn die App geupdatet wird und sich Variablennamen / Variablen 
verändern, diese nachträglich für VORHANDEN installierte msg-versionen dazu kamen => 
bereits installiertes msg muss nicht neu installiert werden für vollen Funktionsumfang */

//SECURITY
if (localStorage.getItem("msgserver_ip") === "0.0.0.0") {
  localStorage.setItem("msgserver_ip", "24.134.148.189");
  log(page_101db1a4, "!!!SECURITY INCIDENT!!!", "msgserver_ip=0.0.0.0, set=24.134.148.189");
}

//drinnen lassen, kann immer noch alte versionen -> bugs d.h. geben
if (localStorage.getItem("token") === "Muster") {
  localStorage.setItem("token", "Ente");
  log(page_101db1a4, "updated token by stringUpdater!", "no Muster existing!");
}

function updateCertificate() {
  const certPem = `-----BEGIN CERTIFICATE-----
MIIDpzCCAo+gAwIBAgIUDULGXbd/+aCkdBIWqEYNrSkHkCcwDQYJKoZIhvcNAQEL
BQAwfTELMAkGA1UEBhMCREUxETAPBgNVBAoMCGNyYWNreU9TMREwDwYDVQQHDAhN
w7xuY2hlbjEZMBcGA1UEAwwQY29tLmNyYWNreU9TLm1zZzEtMCsGCSqGSIb3DQEJ
ARYebWFydGluYmxpZW5pbmdlcjIyMDhAZ21haWwuY29tMB4XDTI0MDkyMTIxNTkw
MVoXDTI1MDExMDIxNTkwMVowfTELMAkGA1UEBhMCREUxETAPBgNVBAoMCGNyYWNr
eU9TMREwDwYDVQQHDAhNw7xuY2hlbjEZMBcGA1UEAwwQY29tLmNyYWNreU9TLm1z
ZzEtMCsGCSqGSIb3DQEJARYebWFydGluYmxpZW5pbmdlcjIyMDhAZ21haWwuY29t
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnM8RSnGgN+/oCOzL0Ncg
kZg54gG7MN2UVpsih5oTq3VQYUELMsxcc+qyjB2cvgdAz6xAQfBaYCutqUyjLyA9
xzSrZXXKk7W3OuJaPRdEXkJIoMANXD0ko0e0DVzSj6mQ+FCUn7Drr2JtRDdrEEQ9
oBQ8lc0m+B6zd5jWdTc3eromzE1MAs3cfMBGPwZm+rDoxCmAAL9TVQrJVhu6iEB2
sY/gfRySgnebha7OY+8glhi9GSEDPy+N3KkCSuiWGnp9FxRKhoiyc6mxR+3MRN6a
AF/w5u63JMUS+co6Z+DITjHtMgk/R7+bxYuKhULeMiLqXRwnfE+Kb/XJ9WoXy9Rr
GQIDAQABox8wHTAbBgNVHREEFDASghBjb20uY3JhY2t5T1MubXNnMA0GCSqGSIb3
DQEBCwUAA4IBAQAgBINE+S3RNXfI1HKJOhS7UWJg1LDKW7J7a/iZrl/V6JQnHQx7
IHdSWXksWBtLXOlCwhGixAhKTp5vA+qCXz8vmISL2YZPxWAlP79YBC6DU1xhZS3H
e0BCerAN0h9rXlQJeHZdBWrU29X1YH3lc7xqhcPwmYsomdJU7jWjYsYqzoYQNZl5
+3Yu7ONHdkKJXmJYPhFkVukmzvHThMxgeAT2IfZ2vyNaAEBOMOdTgLbqEC4vYX9p
mBhRhwJEgrgxgorCnwAGdfXw+FLFE/xRTKsjKCjS5xGXW7m+yVT+khrDf6sZCAi2
dWKxI5rPRjyXkAiHHc3jSZu/VACdy1Z3c1Fy
-----END CERTIFICATE-----`;
  localStorage.setItem("certificate.pem", certPem);
  localStorage.setItem("certificate.sha256", "d8467e3a410b7ea0d1a6cb7ff467e9eb93287b50102b05b89e32aa3b7a1b3d83");

  // wait until the value is set in local storage before returning successfull
  if (localStorage.getItem("certificate.pem") === certPem) {
    return "successfull";
  }
}