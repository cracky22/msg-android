page_51887fa2 = "./src/js/certificate.js"
const pki = forge.pki;
const certPem = localStorage.getItem("certificate.pem");

try {
    const cert = pki.certificateFromPem(certPem);
    const now = new Date();
    if (now < cert.validity.notBefore || now > cert.validity.notAfter) {
        sessionStorage.setItem("certificate", "invalid");
        log(page_51887fa2, "CERT INVALID!!");
        throw new Error('Zertifikat ist abgelaufen oder noch nicht gültig.');
    }

    sessionStorage.setItem("certificate", "valid");

} catch (error) {
    log(page_51887fa2, "CERT INVALID!!");
    sessionStorage.setItem("certificate", "invalid");
}

async function sha256(value) {
    const encoder = new TextEncoder();
    const data = encoder.encode(value);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

sha256(certPem).then(certHash => {
    if (localStorage.getItem("certificate.sha256") !== certHash) {
        sessionStorage.setItem("certHash", "invalid");
        log(page_51887fa2, "CERTHASH INVALID!!");
    } else {
        sessionStorage.setItem("certHash", "valid");
    }
});