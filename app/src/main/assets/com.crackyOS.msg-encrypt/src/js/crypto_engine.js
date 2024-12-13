page_d65fc344 = "./src/js/crypto_engine.js";

window.addEventListener('load', function() {
  this.sessionStorage.setItem("ctc", 0);
});

function encrypt_message() {
  document.getElementById("p1").style.visibility = 'visible';
  checkInternetConnection('https://cracky.ddns.net/?checkConnectionStatus');
  setProgress(12);
  sessionStorage.removeItem("encrypted");
  sessionStorage.removeItem("decrypted");

  if (document.getElementById("inputfield").value !== "") {
    vibrate('pattern', 'p_c_s'); //p_c_s auto
    setProgress(33);
    runtime_status = sessionStorage.getItem("runtime");
    if (runtime_status === "true") {
      inputfieldValue = document.getElementById("inputfield").value;
      log(page_d65fc344, `encrypt_message(${inputfieldValue.length})`);
      let inputfieldValue_2 = remove_afz(inputfieldValue);
      let textToEncrypt_2 = replaceUmlauts(inputfieldValue_2);
      let textToEncrypt = utf8ToBase64(textToEncrypt_2);
      let url = `${localStorage.getItem("msgserver_ip")}/msg-encrypt/android/encrypt/${textToEncrypt}`;
      let _ctc = sessionStorage.getItem("ctc");
      let localScript = document.getElementById("localScript" + _ctc);
      localScript.src = url;
      setTimeout(() => {
        setProgress(66);
        setTimeout(() => {
          encrypted_message = sessionStorage.getItem("encrypted");
          encrypted_message_6 = utf8ToBase64(encrypted_message);
          document.getElementById("inputfield").value = encrypted_message_6;
          p_c_d();
          setProgress(100);
          //hide text - show text on encrypt cycle end
          if (localStorage.getItem("hdTx") === "true") {
            let txCh = document.getElementById('hdTxs');
            
            if (!txCh.checked) {
              txCh.checked = true;
              if (localStorage.getItem('darkmode') === "true") {
                  document.getElementById('inputfield').style.color = 'white';
              } else {
                  document.getElementById('inputfield').style.color = 'black';
              }
            }
          }
        

          document.getElementById("rxHistory").style.display = 'none';
          sessionStorage.removeItem("rxHistory");

          //encryption done, check if error occured
          const e_notAllowed = ['bnVsbA=='];
          const e_inputValue = document.getElementById("inputfield").value;

          if (!e_notAllowed.includes(e_inputValue)) {
            //alles okay
            setTimeout(() => {
              setProgress(0);
              document.getElementById("p1").style.visibility = 'hidden';
              sessionStorage.removeItem("encrypted");

              setTimeout(() => {
                value = copy();
                sessionStorage.removeItem("lastInput");
                sessionStorage.removeItem("recoveredInput");
                log(page_d65fc344, `encrypt_message: copied str(${value.length})`);
                localScript.removeItem = url;

                if (localStorage.getItem("autoclear") === "true") {
                  setTimeout(() => {
                    do_cleanup();
                    sessionStorage.removeItem("lastInput");
                    sessionStorage.removeItem("recoveredInput");
                    log(page_d65fc344, "encrypt_message: cleanup");
                  }, 100);
                }
              }, 100);
            }, 300);
            document.getElementById("clearButton").classList.add('clearAnim');
          } else {
            setProgress(0);
            document.getElementById("p1").style.visibility = 'hidden';
            errmsg = "error, please clear and retry!";
            document.getElementById("inputfield").value = errmsg;
            vibrate('pattern', 'p_c_e');
            log(page_d65fc344, "encrypt_message: encryption error", `inputfield.value[${e_inputValue}]`);
            if (sessionStorage.getItem("_CIC") !== "NIC") {
              popup_errmsg = "ENC[VAL(bnVsbA==)]";
              openErrPopup(popup_errmsg, `inputfield.value[${e_inputValue}]`);
            } else {
              popup_errmsg = "ENC[NIC, bnVsbA==]";
              openErrPopup(popup_errmsg, "Es scheint als bist du nicht mit dem Internet verbunden. Bitte stelle eine aktive Internetverbindung her und versuche es erneut. Schließe das Popup und drücke CLEAR");
              document.getElementById("helpButton").style.display = "none";
            }
          }
        }, 300);
      }, 150);
    } else {
      setProgress(0);
      document.getElementById("p1").style.visibility = 'hidden';
      errmsg = "token is not activated!";
      document.getElementById("inputfield").value = errmsg;
      vibrate('pattern', 'p_c_e');
      log(page_d65fc344, "encrypt_message: error", errmsg);
      setTimeout(() => {
        window.location.href = "./activate.html?comeFrom=crypto_engine.js";
      }, 1000);
    }
  } else {
    vibrate('pattern', 'p_c_t');
    setProgress(0);
    document.getElementById("p1").style.visibility = 'hidden';
    log(page_d65fc344, "encrypt_message: input", "inputfield.value = null, [81]");
  }
}

//run encrypt function on enter
document.addEventListener("DOMContentLoaded", function () {
  var textarea = document.getElementById("inputfield");
  textarea.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      let currentInput = document.getElementById("inputfield").value;
      if (currentInput.startsWith("Z0FBQUFBQm")) {
        decrypt_message();
      } else {
        encrypt_message();
      }
    }
  });
});


function decrypt_message() {
  document.getElementById("p1").style.visibility = 'visible';
  checkInternetConnection('https://cracky.ddns.net/?checkConnectionStatus');
  setProgress(12);
  sessionStorage.removeItem("encrypted");
  sessionStorage.removeItem("decrypted");

  if (document.getElementById("inputfield").value !== "") {
    vibrate('pattern', 'p_c_s'); //p_c_s auto
    setProgress(33);
    runtime_status = sessionStorage.getItem("runtime");
    if (runtime_status === "true") {
      textToDecrypt = document.getElementById("inputfield").value;
      log(page_d65fc344, `decrypt_message(${textToDecrypt.length})`);
      
      try {
        textToDecrypt_6 = base64ToUtf8(textToDecrypt);
        textToDecrypt_ = utf8ToBase64(textToDecrypt_6);

        if (localStorage.getItem("allowDebug") === "true") {
          findInvalidCharacters(textToDecrypt);
          findInvalidCharacters(textToDecrypt_6);
          findInvalidCharacters(textToDecrypt_);
        }
      } catch (e) {
        if (e instanceof DOMException) {
          if (e instanceof DOMException) {
            log(page_d65fc344, "decrypt_message", "base64 decode error ", e.message);
            sessionStorage.setItem("errst", "eoc");
            setTimeout(() => {
              setProgress(0);
              errmsg = "error, please check the input and retry!";
              document.getElementById("inputfield").value = errmsg;
              vibrate('pattern', 'p_c_e');
              document.getElementById("p1").style.visibility = 'hidden';
              if (sessionStorage.getItem("_CIC") !== "NIC") {
                popup_errmsg = "DEC[B64(decode fail)]";
                openErrPopup(popup_errmsg);
              } else {
                popup_errmsg = "DEC[NIC + B64(decode fail)]";
                openErrPopup(popup_errmsg);
              }
            }, 100);
          } else if (e.name === 'DOMException' && [e.code === 22, e.code === 101].includes(e.index)) {
            log(page_d65fc344, "decrypt_message: invalid base64 encoding", textToDecrypt);
            sessionStorage.setItem("errst", "eoc");
            errmsg = "error, please check the input and retry!";
            document.getElementById("inputfield").value = errmsg;
            vibrate('pattern', 'p_c_e');
            setProgress(0);
            document.getElementById("p1").style.visibility = 'hidden';
            popup_errmsg = "DEC[B64(invalid encoding)]";
            openErrPopup(popup_errmsg, "decrypt_message: invalid base64 encoding");
          } else {
            throw e;
          }
        } else {
          throw e;
      }}
      url = `${localStorage.getItem("msgserver_ip")}/msg-encrypt/android/decrypt/${textToDecrypt_}`;
      _ctc = sessionStorage.getItem("ctc");
      localScript = document.getElementById("localScript" + _ctc);
      localScript.src = url;
      localScript.onload = () => {
        log(page_d65fc344, "decrypt.src loaded");
      };
      setTimeout(() => {
        setProgress(66);

        setTimeout(() => {
          decrypted_message_2 = sessionStorage.getItem("decrypted");
          let decrypted_message = remove_afz(decrypted_message_2);
          if (decrypted_message.includes("[MSGPIC]:")) {
            imageID = decrypted_message.split(":")[1];
            sessionStorage.setItem("imageID", imageID);
            sessionStorage.setItem("imageURL", "https://cracky.ddns.net/services/apps/crackyOS/application/com.crackyOS.pyProjects/msg-encrypt/android.app/image.php?viewImage&id=" + imageID);
            document.getElementById("p1").style.visibility = 'hidden';
            showPicturePopup();
          } else {
            setProgress(65);
            //??pm2.0
            if (localStorage.getItem("pm") === "true") {
              decrypted_message = restoreUmlauts(decrypted_message);
              log(page_d65fc344, "decrypt_message: pattern matching!");
              setProgress(80);
            } else {
              setProgress(80);
            }

            document.getElementById("inputfield").value = decrypted_message;
            sessionStorage.setItem("rxHistory", decrypted_message);
            p_c_d();
            setProgress(100);
            sessionStorage.removeItem("lastInput");
            sessionStorage.removeItem("recoveredInput");

            const rxHistData = sessionStorage.getItem("rxHistory");
            if (rxHistData) {
                document.getElementById('rxHistorxTX').innerText = rxHistData;
                document.getElementById('rxHistory').style.display = 'block';
                log(page_52e269a8, "rxdata loaded");
            }

            setTimeout(() => {
              sessionStorage.removeItem("decrypted");
              document.getElementById("clearButton").classList.add('clearAnim');
              check = document.getElementById("inputfield").value;
              
              if (check === "" || check === "null") {
                log(page_d65fc344, "decrypt_message: error", "inputfield.value = null, [302]");
                sessionStorage.setItem("errst", "eoc");
                errmsg = "error, please clear and retry!";
                document.getElementById("inputfield").value = errmsg;
                vibrate('pattern', 'p_c_e');
                setProgress(0);
                document.getElementById("p1").style.visibility = 'hidden';
                if (sessionStorage.getItem("_CIC") !== "NIC") {
                  popup_errmsg = "DEC[IFV(null)]";
                  openErrPopup(popup_errmsg, "inputfield.value = null, [302]");
                } else {
                  popup_errmsg = "DEC[NIC + IFV(null)]";
                  openErrPopup(popup_errmsg, "inputfield.value = null, [302]");
                }
              } else {
                setProgress(0);
                document.getElementById("p1").style.visibility = 'hidden';
              }

              setTimeout(() => {
                recheck = document.getElementById("inputfield").value;
                if (recheck === "" || recheck === "null") {
                  log(page_d65fc344, "decrypt_message: error", "inputfield.value = null, [330]");
                  sessionStorage.setItem("errst", "eoc");
                  errmsg = "error, please clear and retry!";
                  document.getElementById("inputfield").value = errmsg;
                  vibrate('pattern', 'p_c_e');
                  setProgress(0);
                  document.getElementById("p1").style.visibility = 'hidden';
                  popup_errmsg = "DEC[IFV(null)]";
                  openErrPopup(popup_errmsg, "inputfield.value = null, [306]");
                } else {
                  setProgress(0);
                  document.getElementById("p1").style.visibility = 'hidden';
                }
              }, 100);
            }, 200);
          } // hier geht das check nach bild zu
        }, 300); //PROBLEMSTELLE
      }, 150);
    } else {
      setProgress(0);
      document.getElementById("p1").style.visibility = 'hidden';
      errmsg = "error, not activated!";
      document.getElementById("inputfield").value = errmsg;
      vibrate('pattern', 'p_c_e');
      log(page_d65fc344, "decrypt_message: error", errmsg);
      sessionStorage.setItem("errst", "eoc");
      setTimeout(() => {
        window.location.href = "./activate.html?comeFrom=crypto_engine.js";
      }, 1000);
    }
  } else {
    vibrate('pattern', 'p_c_t');
    setProgress(0);
    document.getElementById("p1").style.visibility = 'hidden';
    log(page_d65fc344, "decrypt_message: input", "inputfield.value = null, [216]");
  }
}

function remove_afz(string) {
  return string.replace(/["']/g, '');
}

function utf8ToBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function base64ToUtf8(base64) {
  return decodeURIComponent(escape(atob(base64)));
}


function replaceUmlauts(str) {
  const replacements = {
    ä: "ae",
    ö: "oe",
    ü: "ue",
    Ä: "Ae",
    Ö: "Oe",
    Ü: "Ue",
    ß: "ss",
  };
  let umlautCount = 0;
  const replacedStr = str.split("").map((char) => {
    if (replacements[char]) {
      umlautCount++;
      return replacements[char];
    }
    return char;
  }).join("");
  log(page_d65fc344, `replaceUmlauts(${umlautCount})`);
  return replacedStr;
}

//restoreUmlauts = pm 2.0
function restoreUmlauts(str) {
  const replacements = {
    //groß
    Aelter: "Älter",
    Aeltere: "Ältere",
    Aelteren: "Älteren",
    Aerger: "Ärger",
    Aergerausbruch: "Ärgerausbruch",
    Aergerlich: "Ärgerlich",
    Aergernis: "Ärgernis",
    Aerztin: "Ärztin",
    Aerztinnen: "Ärztinnen",
    Aerztlich: "Ärztlich",
    Aerztliche: "Ärztliche",
    Aerzteteam: "Ärzteteam",
    Aermel: "Ärmel",
    Aermeldetail: "Ärmeldetail",
    Aermellos: "Ärmellos",
    Aermelsaum: "Ärmelsaum",
    Aengstlich: "Ängstlich",
    Aengste: "Ängste",
    Aehren: "Ähren",
    Aeusseres: "Äußeres",
    Aeusserlichkeit: "Äußerlichkeit",
    Baeren: "Bären",
    Baeume: "Bäume",
    Buerger: "Bürger",
    Bräuer: "Bräuer",
    Baer: "Bär",
    Baerenfell: "Bärenfell",
    Baerenjagd: "Bärenjagd",
    Baeume: "Bäume",
    Blaetter: "Blätter",
    Blaettertanz: "Blättertanz",
    Blaetterteig: "Blätterteig",
    Blaetterwald: "Blätterwald",
    Bluete: "Blüte",
    Bluetenblatt: "Blütenblatt",
    Bluetenduft: "Blütenduft",
    Bluetenfalter: "Blütenfalter",
    Bluetenhonig: "Blütenhonig",
    Bluetenpracht: "Blütenpracht",
    Bluetenregen: "Blütenregen",
    Bluetenstaub: "Blütenstaub",
    Bluetentraum: "Blütentraum",
    Broetchen: "Brötchen",
    Broetchenbaecker: "Brötchenbäcker",
    Broetchenkorb: "Brötchenkorb",
    Brueder: "Brüder",
    Bruederlichkeit: "Brüderlichkeit",
    Bruecke: "Brücke",
    Brueckenbau: "Brückenbau",
    Brueckenkonstruktion: "Brückenkonstruktion",
    Brueckenschlag: "Brückenschlag",
    Brueckenseil: "Brückenseil",
    Brueckenpfeiler: "Brückenpfeiler",
    Bruehe: "Brühe",
    Duenn: "Dünn",
    Duenner: "Dünner",
    Duennere: "Dünnere",
    Duennsten: "Dünnsten",
    Duenger: "Dünger",
    Duengen: "Düngen",
    Erklaer: "Erklär",
    Erklaert: "Erklärt",
    Erklaerte: "Erklärte",
    Faellt: "Fällt",
    Fraeulein: "Fräulein",
    Fuehlen: "Fühlen",
    Fuehrerschein: "Führerschein",
    Fuehrung: "Führung",
    Fluesse: "Flüsse",
    Foerderung: "Förderung",
    Fruehstueck: "Frühstück",
    Faeuste: "Fäuste",
    Faesser: "Fässer",
    Foehn: "Föhn",
    Foehngrenze: "Föhngrenze",
    Foehnlage: "Föhnlage",
    Foehnlagebericht: "Föhnlagebericht",
    Foehnlinie: "Föhnlinie",
    Foehnmauer: "Föhnmauer",
    Foehnfrisur: "Föhnfrisur",
    Fuehlen: "Fühlen",
    Fuehlbar: "Fühlbar",
    Fuehler: "Fühler",
    Fuehren: "Führen",
    Fuellstand: "Füllstand",
    Fuellung: "Füllung",
    Fuesslinge: "Füßlinge",
    Fuesse: "Füße",
    Gaeste: "Gäste",
    Geduengt: "Gedüngt",
    Gehoert: "Gehört",
    Geuebt: "Geübt",
    Geuebter: "Geübter",
    Geoeffnet: "Geöffnet",
    Glueck: "Glück",
    Gluecklich: "Glücklich",
    Glueckseligkeit: "Glückseligkeit",
    Gluecksfall: "Glücksfall",
    Gluecksgefuehl: "Glücksgefühl",
    Glueckskind: "Glückskind",
    Glueckspaar: "Glückspaar",
    Glueckspilz: "Glückspilz",
    Gluecksrad: "Glücksrad",
    Glueckssymbol: "Glückssymbol",
    Glueckstag: "Glückstag",
    Glueckstreffer: "Glückstreffer",
    Guenstig: "Günstig",
    Haette: "Hätte",
    Haetten: "Hätten",
    Haeuser: "Häuser",
    Hoefe: "Höfe",
    Hoeren: "Hören",
    Huegel: "Hügel",
    Hoechste: "Höchste",
    Hoechst: "Höchst",
    Hoechstleistung: "Höchstleistung",
    Hoechststand: "Höchststand",
    Hoehle: "Höhle",
    Hoehlengleichnis: "Höhlengleichnis",
    Hoehlenforschung: "Höhlenforschung",
    Hoehlenforscher: "Höhlenforscher",
    Hoehlenklang: "Höhlenklang",
    Hoehlenmalerei: "Höhlenmalerei",
    Hoehlensystem: "Höhlensystem",
    Hoehlenzeichnung: "Höhlenzeichnung",
    Kaelte: "Kälte",
    Kaenguru: "Känguru",
    Koennen: "Können",
    Kuenftig: "Künftig",
    Kuerbis: "Kürbis",
    Kaefig: "Käfig",
    Kaefige: "Käfige",
    Kaefigbauer: "Käfigbauer",
    Kaefigschloss: "Käfigschloss",
    Kaefervogel: "Käfigvogel",
    Kaesemesser: "Käsemesser",
    Kaese: "Käse",
    Kaesekuchen: "Käsekuchen",
    Kaeseplatte: "Käseplatte",
    Kraeuter: "Kräuter",
    Kraeutergarten: "Kräutergarten",
    Kraeuterheilmittel: "Kräuterheilmittel",
    Kraeutertee: "Kräutertee",
    Kueche: "Küche",
    Laecheln: "Lächeln",
    Laecherlich: "Lächerlich",
    Laecherlicher: "Lächerlicher",
    Laecherlichen: "Lächerlichen",
    Laenge: "Länge",
    Laenger: "Länger",
    Laengste: "Längste",
    Laendlich: "Ländlich",
    Laendliche: "Ländliche",
    Laendlichen: "Ländlichen",
    Laender: "Länder",
    Loesung: "Lösung",
    Laerm: "Lärm",
    Laender: "Länder",
    Loeffel: "Löffel",
    Loewe: "Löwe",
    Loewenanteil: "Löwenanteil",
    Loewenjunge: "Löwenjunge",
    Loewenrudel: "Löwenrudel",
    Loewenstatue: "Löwenstatue",
    Loewenzahn: "Löwenzahn",
    Loewenwildnis: "Löwenwildnis",
    Maechtig: "Mächtig",
    Maechtiger: "Mächtiger",
    Maechtigkeit: "Mächtigkeit",
    Maeuse: "Mäuse",
    Maeuschen: "Mäuschen",
    Moeglich: "Möglich",
    Moegliche: "Mögliche",
    Moeglichkeit: "Möglichkeit",
    Moeglichkeiten: "Möglichkeiten",
    Moerder: "Mörder",
    Moerderisch: "Mörderisch",
    Moerderische: "Mörderische",
    Moewenschrei: "Möwenschrei",
    Muetze: "Mütze",
    Muessen: "Müssen",
    Oeffnung: "Öffnung",
    Oefter: "Öfter",
    Oel: "Öl",
    Saeuberung: "Säuberung",
    Saeule: "Säule",
    Saeulen: "Säulen",
    Schaetz: "Schätz",
    Schaetze: "Schätze",
    Schaetzen: "Schätzen",
    Schoenheit: "Schönheit",
    Schoene: "Schöne",
    Schoenste: "Schönste",
    Schuetzen: "Schützen",
    Spaeter: "Später",
    Staerkste: "Stärkste",
    Spaet: "Spät",
    Spaetherbst: "Spätherbst",
    Spaetfrost: "Spätfrost",
    Spaetschicht: "Spätschicht",
    Spaetsommer: "Spätsommer",
    Stoecke: "Stöcke",
    Straeucher: "Sträucher",
    Straeucherpfad: "Sträucherpfad",
    Stroeme: "Ströme",
    Stroemung: "Strömung",
    Stroemen: "Strömen",
    Stroemenlinie: "Strömenlinie",
    Tuer: "Tür",
    Tuere: "Türe",
    Tueren: "Türen",
    Tuerangel: "Türangel",
    Tuerrahmen: "Türrahmen",
    Tuerklinke: "Türklinke",
    Tuerschloss: "Türschloss",
    Toene: "Töne",
    Toepfe: "Töpfe",
    Traenen: "Tränen",
    Traenenfluss: "Tränenfluss",
    Traenenkanal: "Tränenkanal",
    Traenenlauf: "Tränenlauf",
    Traenenmeer: "Tränenmeer",
    Traenenreich: "Tränenreich",
    Traeume: "Träume",
    Traeumend: "Träumend",
    Traeumer: "Träumer",
    Traeumerisch: "Träumerisch",
    Traeumerstunde: "Träumerstunde",
    Traeumerei: "Träumerei",
    Traeumereiend: "Träumereiend",
    Traeumerisch: "Träumerisch",
    Uebernachten: "Übernachten",
    Uebernachtet: "Übernachtet",
    Uebernachtete: "Übernachtete",
    Uebersicht: "Übersicht",
    Uebersichtlich: "Übersichtlich",
    Uebersichtlichkeit: "Übersichtlichkeit",
    Ueberwachung: "Überwachung",
    Ueber: "Über",
    Uebrig: "Übrig",
    Uebung: "Übung",
    Uebungen: "Übungen",
    Uebungsaufgaben: "Übungsaufgaben",
    Uebungsaufsatz: "Übungsaufsatz",
    Ueber: "Über",
    Ueberdauerung: "Überdauerung",
    Ueberfluss: "Überfluss",
    Ueberfluessig: "Überflüssig",
    Uebergluecklich: "Überglücklich",
    Uebergewicht: "Übergewicht",
    Uebergriff: "Übergriff",
    Uebergroesse: "Übergröße",
    Ueberhoehung: "Überhöhung",
    Ueberholspur: "Überholspur",
    Uebermacht: "Übermacht",
    Uebermut: "Übermut",
    Uebermutig: "Übermutig",
    Uebernachtung: "Übernachtung",
    Ueberpruefung: "Überprüfung",
    Ueberquerung: "Überquerung",
    Uebertragung: "Übertragung",
    Ueberwacher: "Überwacher",
    Ueberzeugung: "Überzeugung",
    Verhuetung: "Verhütung",
    Waerme: "Wärme",
    Waehrend: "Während",
    Waere: "Wäre",
    Woerter: "Wörter",
    Wuensche: "Wünsche",
    Wuerde: "Würde",
    Wuerden: "Würden",
    Wuerdevoll: "Würdevoll",
    Zaeune: "Zäune",
    Zaeunelement: "Zäunelement",
    Zaeuneinsatz: "Zäuneinsatz",
    Zaepfchen: "Zäpfchen",
    Zaepfchengroesse: "Zäpfchengröße",
    Zaehne: "Zähne",
    Zoegern: "Zögern",
    Zoepfe: "Zöpfe",
    Zoepfchen: "Zöpfchen",
    Zoegern: "Zögern",
    Zuhoeren: "Zuhören",
    Zuhoerend: "Zuhörend",


    //klein
    aelter: "älter",
    aeltere: "ältere",
    aelteren: "älteren",
    aerger: "ärger",
    aergerausbruch: "ärgerausbruch",
    aergerlich: "ärgerlich",
    aergernis: "ärgernis",
    aerztin: "ärztin",
    aerztinnen: "ärztinnen",
    aerztlich: "ärztlich",
    aerztliche: "ärztliche",
    aerzteteam: "ärzteteam",
    aermel: "ärmel",
    aermeldetail: "ärmeldetail",
    aermellos: "ärmellos",
    aermelsaum: "ärmelsaum",
    aengstlich: "ängstlich",
    aengste: "ängste",
    aehren: "ähren",
    aeusseres: "äußeres",
    aeusserlichkeit: "äußerlichkeit",
    baeren: "bären",
    baeume: "bäume",
    buerger: "bürger",
    bräuer: "bräuer",
    baer: "bär",
    baerenfell: "bärenfell",
    baerenjagd: "bärenjagd",
    baeume: "bäume",
    blaetter: "blätter",
    blaettertanz: "blättertanz",
    blaetterteig: "blätterteig",
    blaetterwald: "blätterwald",
    bluete: "blüte",
    bluetenblatt: "blütenblatt",
    bluetenduft: "blütenduft",
    bluetenfalter: "blütenfalter",
    bluetenhonig: "blütenhonig",
    bluetenpracht: "blütenpracht",
    bluetenregen: "blütenregen",
    bluetenstaub: "blütenstaub",
    bluetentraum: "blütentraum",
    broetchen: "brötchen",
    broetchenbaecker: "brötchenbäcker",
    broetchenkorb: "brötchenkorb",
    brueder: "brüder",
    bruederlichkeit: "brüderlichkeit",
    bruecke: "brücke",
    brueckenbau: "brückenbau",
    brueckenkonstruktion: "brückenkonstruktion",
    brueckenschlag: "brückenschlag",
    brueckenseil: "brückenseil",
    brueckenpfeiler: "brückenpfeiler",
    bruehe: "brühe",
    duenn: "dünn",
    duenner: "dünner",
    duennere: "dünnere",
    duennsten: "dünnsten",
    duenger: "dünger",
    duengen: "düngen",
    erklaer: "erklär",
    erklaert: "erklärt",
    erklaerte: "erklärte",
    faellt: "fällt",
    fraeulein: "fräulein",
    fuehlen: "fühlen",
    fuehrerschein: "führerschein",
    fuehrung: "führung",
    fluesse: "flüsse",
    foerderung: "förderung",
    fruehstueck: "frühstück",
    faeuste: "fäuste",
    faesser: "fässer",
    foehn: "föhn",
    foehngrenze: "föhngrenze",
    foehnlage: "föhnlage",
    foehnlagebericht: "föhnlagebericht",
    foehnlinie: "föhnlinie",
    foehnmauer: "föhnmauer",
    foehnfrisur: "föhnfrisur",
    fuehlen: "fühlen",
    fuehlbar: "fühlbar",
    fuehler: "fühler",
    fuehren: "führen",
    fuellstand: "füllstand",
    fuellung: "füllung",
    fuesslinge: "füßlinge",
    fuesse: "füße",
    gaeste: "gäste",
    geduengt: "gedüngt",
    gehoert: "gehört",
    geuebt: "geübt",
    geuebter: "geübter",
    geoeffnet: "geöffnet",
    glueck: "glück",
    gluecklich: "glücklich",
    glueckseligkeit: "glückseligkeit",
    gluecksfall: "glücksfall",
    gluecksgefuehl: "glücksgefühl",
    glueckskind: "glückskind",
    glueckspaar: "glückspaar",
    glueckspilz: "glückspilz",
    gluecksrad: "glücksrad",
    glueckssymbol: "glückssymbol",
    glueckstag: "glückstag",
    glueckstreffer: "glückstreffer",
    guenstig: "günstig",
    haette: "hätte",
    haetten: "hätten",
    haeuser: "häuser",
    hoefe: "höfe",
    hoeren: "hören",
    huegel: "hügel",
    hoechste: "höchste",
    hoechst: "höchst",
    hoechstleistung: "höchstleistung",
    hoechststand: "höchststand",
    hoehle: "höhle",
    hoehlengleichnis: "höhlengleichnis",
    hoehlenforschung: "höhlenforschung",
    hoehlenforscher: "höhlenforscher",
    hoehlenklang: "höhlenklang",
    hoehlenmalerei: "höhlenmalerei",
    hoehlensystem: "höhlensystem",
    hoehlenzeichnung: "höhlenzeichnung",
    kaelte: "kälte",
    kaenguru: "känguru",
    koennen: "können",
    kuenftig: "künftig",
    kuerbis: "kürbis",
    kaefig: "käfig",
    kaefige: "käfige",
    kaefigbauer: "käfigbauer",
    kaefigschloss: "käfigschloss",
    kaefervogel: "käfigvogel",
    kaesemesser: "käsemesser",
    kaese: "käse",
    kaesekuchen: "käsekuchen",
    kaeseplatte: "käseplatte",
    kraeuter: "kräuter",
    kraeutergarten: "kräutergarten",
    kraeuterheilmittel: "kräuterheilmittel",
    kraeutertee: "kräutertee",
    kueche: "küche",
    laecheln: "lächeln",
    laecherlich: "lächerlich",
    laecherlicher: "lächerlicher",
    laecherlichen: "lächerlichen",
    laenge: "länge",
    laenger: "länger",
    laengste: "längste",
    laendlich: "ländlich",
    laendliche: "ländliche",
    laendlichen: "ländlichen",
    laender: "länder",
    loesung: "lösung",
    laerm: "lärm",
    laender: "länder",
    loeffel: "löffel",
    loewe: "löwe",
    loewenanteil: "löwenanteil",
    loewenjunge: "löwenjunge",
    loewenrudel: "löwenrudel",
    loewenstatue: "löwenstatue",
    loewenzahn: "löwenzahn",
    loewenwildnis: "löwenwildnis",
    maechtig: "mächtig",
    maechtiger: "mächtiger",
    maechtigkeit: "mächtigkeit",
    maeuse: "mäuse",
    maeuschen: "mäuschen",
    moeglich: "möglich",
    moegliche: "mögliche",
    moeglichkeit: "möglichkeit",
    moeglichkeiten: "möglichkeiten",
    moerder: "mörder",
    moerderisch: "mörderisch",
    moerderische: "mörderische",
    moewenschrei: "möwenschrei",
    muetze: "mütze",
    muessen: "müssen",
    oeffnung: "öffnung",
    oefter: "öfter",
    oel: "öl",
    saeuberung: "säuberung",
    saeule: "säule",
    saeulen: "säulen",
    schaetz: "schätz",
    schaetze: "schätze",
    schaetzen: "schätzen",
    schoenheit: "schönheit",
    schoene: "schöne",
    schoenste: "schönste",
    schuetzen: "schützen",
    spaeter: "später",
    staerkste: "stärkste",
    spaet: "spät",
    spaetherbst: "spätherbst",
    spaetfrost: "spätfrost",
    spaetschicht: "spätschicht",
    spaetsommer: "spätsommer",
    stoecke: "stöcke",
    straeucher: "sträucher",
    straeucherpfad: "sträucherpfad",
    stroeme: "ströme",
    stroemung: "strömung",
    stroemen: "strömen",
    stroemenlinie: "strömenlinie",
    tuer: "tür",
    tuere: "türe",
    tueren: "türen",
    tuerangel: "türangel",
    tuerrahmen: "türrahmen",
    tuerklinke: "türklinke",
    tuerschloss: "türschloss",
    toene: "töne",
    toepfe: "töpfe",
    traenen: "tränen",
    traenenfluss: "tränenfluss",
    traenenkanal: "tränenkanal",
    traenenlauf: "tränenlauf",
    traenenmeer: "tränenmeer",
    traenenreich: "tränenreich",
    traeume: "träume",
    traeumend: "träumend",
    traeumer: "träumer",
    traeumerisch: "träumerisch",
    traeumerstunde: "träumerstunde",
    traeumerei: "träumerei",
    traeumereiend: "träumereiend",
    traeumerisch: "träumerisch",
    uebernachten: "Übernachten",
    uebernachtet: "Übernachtet",
    uebernachtete: "Übernachtete",
    uebersicht: "Übersicht",
    uebersichtlich: "Übersichtlich",
    uebersichtlichkeit: "Übersichtlichkeit",
    ueberwachung: "Überwachung",
    ueber: "Über",
    uebrig: "Übrig",
    uebung: "Übung",
    uebungen: "Übungen",
    uebungsaufgaben: "Übungsaufgaben",
    uebungsaufsatz: "Übungsaufsatz",
    ueber: "Über",
    ueberdauerung: "Überdauerung",
    ueberfluss: "Überfluss",
    ueberfluessig: "Überflüssig",
    uebergluecklich: "Überglücklich",
    uebergewicht: "Übergewicht",
    uebergriff: "Übergriff",
    uebergroesse: "Übergröße",
    ueberhoehung: "Überhöhung",
    ueberholspur: "Überholspur",
    uebermacht: "Übermacht",
    uebermut: "Übermut",
    uebermutig: "Übermutig",
    uebernachtung: "Übernachtung",
    ueberpruefung: "Überprüfung",
    ueberquerung: "Überquerung",
    uebertragung: "Übertragung",
    ueberwacher: "Überwacher",
    ueberzeugung: "Überzeugung",
    verhuetung: "verhütung",
    waerme: "wärme",
    waehrend: "während",
    waere: "wäre",
    woerter: "wörter",
    wuensche: "wünsche",
    wuerde: "würde",
    wuerden: "würden",
    wuerdevoll: "würdevoll",
    zaeune: "zäune",
    zaeunelement: "zäunelement",
    zaeuneinsatz: "zäuneinsatz",
    zaepfchen: "zäpfchen",
    zaepfchengroesse: "zäpfchengröße",
    zaehne: "zähne",
    zoegern: "zögern",
    zoepfe: "zöpfe",
    zoepfchen: "zöpfchen",
    zoegern: "zögern",
    zuhoeren: "zuhören",
    zuhoerend: "zuhörend",


    //scharfes s groß
    Blumenstrauss: "Blumenstrauß",
    Blumenstraeusse: "Blumensträuße",
    Gross: "Groß",
    Gruess: "Grüß",
    Gruesse: "Grüße",
    Gruessen: "Grüßen",
    Groesse: "Größe",
    Groessen: "Größen",
    Groesser: "Größer",
    Fluesse: "Flüsse",
    Schoss: "Schoß",
    Schoesse: "Schöße",
    Mass: "Maß",
    Heiss: "Heiß",
    Heisse: "Heiße",
    Gruss: "Gruß",
    Fuss: "Fuß",
    Fuesse: "Füße",
    Flauss: "Flaß",
    Flausse: "Flaße",
    Strasse: "Straße",
    Strassen: "Straßen",
    Strassenbahn: "Straßenbahn",
    Wasserstrauss: "Wasserstrauß",
    Weiss: "Weiß",
    Weisse: "Weiße",
    Kuesschen: "Küßchen",

    //scharfes s klein
    blumenstrauss: "blumenstrauß",
    blumenstraeusse: "blumensträuße",
    gross: "groß",
    gruess: "grüß",
    gruesse: "grüße",
    gruessen: "grüßen",
    groesse: "größe",
    groesser: "größer",
    groessen: "größen",
    fluesse: "flüsse",
    schoss: "schoß",
    schoesse: "schöße",
    mass: "maß",
    heiss: "heiß",
    heisse: "heiße",
    gruss: "gruß",
    fuss: "fuß",
    fuesse: "füße",
    flauss: "flaß",
    flausse: "flaße",
    strasse: "straße",
    strassen: "straßen",
    strassenbahn: "straßenbahn",
    wasserstrauss: "wasserstrauß",
    weiss: "weiß",
    weisse: "weiße",
    kuesschen: "küßchen"
  };

  let restoreCount = 0;
  const regex = new RegExp(Object.keys(replacements).join('|'), 'g');
  const restoredStr = str.replace(regex, (match) => {
    restoreCount++;
    return replacements[match];
  });

  log(page_d65fc344, `restoreUmlauts(${restoreCount})`);
  return restoredStr;
}


function copy() {
  if (document.getElementById("inputfield").value !== "") {
    textarea = document.getElementById("inputfield");
    value = textarea.value;
    log(page_d65fc344, `copy(${value.length})`);
    textarea.select();
    textarea.setSelectionRange(0, 9999);
    document.execCommand("copy");
    if (localStorage.getItem("autoclear") === "true") {
      do_cleanup();
    }
    setTimeout(() => {
      textarea.blur();
    }, 100);
    return value;
  }
}

function enter() {
  currentValue = document.getElementById("inputfield").value;
  if (currentValue !== "") {
    newValue = currentValue + "                                                                                ";
    document.getElementById("inputfield").value = newValue;
  }
}

function checkInternetConnection(url) {
  fetch(url, { mode: 'no-cors' })
    .then(() => {
        if (sessionStorage.getItem("connPrompt") === "active") {
          document.getElementById('activatePrompt').innerHTML = '';
          sessionStorage.removeItem("connPrompt");
          sessionStorage.removeItem("_CIC", "NIC");
        } // hier wirds "popup" entfernt wenn cic erfolgreich war
    })
    .catch(() => {
        log(page_d65fc344, `checkInternetConnection(${url})`, "Keine Internetverbindung.");
        setProgress(0);
        var offlineHtml = `<br><p id="connPrompt" onclick="document.getElementById('activatePrompt').innerHTML = '';"
        style="width: 285px!important; border-radius: 8px!important; padding: 1px; color: white;" 
        class="errPrompt">Du bist nicht mit dem Internet verbunden!<br>Bitte stelle eine Internetverbindung her und versuche es erneut. 
        &nbsp;&nbsp;&nbsp;&nbsp;<small style="font-family: monospace;">ConnErr408</small>
        <ic style="float: right; margin-right: 2px;">🛜</ic></p>`;
        document.getElementById("activatePrompt").innerHTML = offlineHtml;
        sessionStorage.setItem("connPrompt", "active");
        sessionStorage.setItem("_CIC", "NIC");
        if (localStorage.getItem("darkmode") !== "true") {
          document.getElementById("connPrompt").style.backgroundColor = "#e6e6e6";
          document.getElementById("connPrompt").style.color = "black";
        }
    });
}

function run_cleanup() {
  let _km = localStorage.getItem("kompatiblerModus");
  if (_km) {
    if (_km === "true") {
      userClear(); //alte Funktion
    } else {
      do_cleanup();
    }
  } else {
    do_cleanup();
  }
}

function do_cleanup() {
  if (sessionStorage.getItem("_OE") !== "oc") {
    vibrate('pattern', 'p_c_c');
    log(page_d65fc344, "do_cleanup");
    disableElements();
    lastInput = sessionStorage.getItem("lastInput");
    if (lastInput) {
      sessionStorage.setItem("recoveredInput", lastInput);
      document.getElementById("recover").classList.remove("disabledLink");
      sessionStorage.removeItem("lastInput");
    } else {
      sessionStorage.removeItem("lastInput");
    }
    document.getElementById("recover").innerHTML = "Eingabe Wiederherstellen<br><small id=\"hint\">CLEAR wenn ausgegraut</small>";
    sessionStorage.removeItem("encrypted");
    sessionStorage.removeItem("decrypted");
    sessionStorage.removeItem("lastInput");
    
    let ipfV = document.getElementById("inputfield").value;
    document.getElementById("inputfield").value = "";

    let ctc = sessionStorage.getItem("ctc");
    if (ctc === undefined || ctc === 0) {
      ctc = 1;  sessionStorage.setItem("ctc", ctc);
    } else if (ctc >= 9) {
      ctc = 0;  sessionStorage.setItem("ctc", ctc);
      window.location.href = "index.html";
    } else {
      if (ipfV !== "") {
        ctc++;  sessionStorage.setItem("ctc", ctc);
      } else {
        sessionStorage.setItem("ctc", ctc);
      }
    }
    document.getElementById("clearButton").classList.remove('clearAnim');
    setProgress(0);
    document.getElementById('p1').style.visibility = 'hidden';
    setTimeout(() => {
      enableDisabledElements();
      let hdtxcb = document.getElementById("hdTxs");
      hdtxcb.checked = "true";
      hdtxcb.style.backgroundColor = localStorage.getItem("headerTheme");
      hdtxcb.style.borderColor = darkenColor(localStorage.getItem("headerTheme"), 30);
      if (localStorage.getItem("darkmode") === "true") {
        document.getElementById("inputfield").style.color = "white";
      } else {
        document.getElementById("inputfield").style.color = "black";
      }
      if (hdtxcb) {
        if (hdtxcb.style.display === "none") {
          document.getElementById("hdTxs").style.display = "block";
        }
      }
    }, 200);
  } else {
    log(page_d65fc344, "do_cleanup()", "error occured, reloading!");
    sessionStorage.removeItem("_OE");
    window.location.href = "index.html";
  }
  /*if (sessionStorage.getItem("msgweb") === "acceptreq") {
    setTimeout(() => {
      window.location.href = "settings.html?webLogin";
    }, 500);
  }*/
}

function userClear() {
  vibrate('pattern', 'p_c_c');
  let _aest = sessionStorage.getItem("errst");
  if (_aest === "eoc") {
    let lastInput = sessionStorage.getItem("lastInput");
    if (lastInput) {
      sessionStorage.setItem("allowRecov", "true");
      sessionStorage.setItem("recoveredInput", lastInput);
      document.getElementById("recover").classList.remove("disabledLink");
    }
  } else {
    sessionStorage.removeItem("lastInput");
  }
  //warum ist das hier?
  if (sessionStorage.getItem("haptic_feedback.pattern") !== 'p_c_c') {
    sessionStorage.removeItem('haptic_feedback.pattern');
    window.location.href = "index.html";
  } else {
    window.location.href = "index.html";
  }
}

function setProgress(progress) {
  var progressBar = document.querySelector('#p1');
  if (progressBar && progressBar.MaterialProgress) {
    progressBar.MaterialProgress.setProgress(progress);
  }
}

function findInvalidCharacters(str) {
  let invalidChars = str.match(/[\x00-\x08\x0E-\x1F\x80-\xFF]/g);
  if (invalidChars) {
      log(page_d65fc344, "findInvalidChars", "INVALID CHARS: " + invalidChars);
  } else {
    if (localStorage.getItem("EHL") !== "false") {
      log(page_d65fc344, "findInvalidChars", "nth found");
    }
  }
}

function recoverMSG() {
  document.getElementById("recover").classList.add("disabledLink");
  document.getElementById("recover").innerText = "Wiederhergestellt!";
  let rci = sessionStorage.getItem("recoveredInput");
  if (rci) {
    document.getElementById("inputfield").value = rci;
    sessionStorage.removeItem("errst");
    sessionStorage.removeItem("allowRecov");
    sessionStorage.removeItem("recoveredInput");
  } else {
    document.getElementById("inputfield").value = "Fehler beim Wiederherstellen aufgetreten. Drücke CLEAR!";
    sessionStorage.removeItem("errst");
    sessionStorage.removeItem("allowRecov");
    sessionStorage.removeItem("recoveredInput");
  }
  setTimeout(() => {
    document.getElementById("recover").classList.add("disabledLink");
    document.getElementById("recover").style.textDecoration = "none";
    document.getElementById("recover").innerHTML = "Eingabe Wiederherstellen<br><small id=\"hint\">CLEAR wenn ausgegraut</small>";
  }, 2000);
}