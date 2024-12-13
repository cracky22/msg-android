//set wortcode(word) to localstorage
function set_word(word) {
  if (sessionStorage.getItem("dev") !== "true") {
    setProgress(20);

  } else {
    setProgress(50);
  }
  unsetAll();
  setTimeout(() => {
    if (localStorage.getItem("darkmode") === "true") {
      document.getElementById(word).style.boxShadow = '0 6px 8px 0 rgba(255, 255, 255, 0.281), 0 6px 4px 0 rgba(255, 255, 255, 0.304)';
      document.getElementById(word).style.backgroundColor = '#416b3c';

    } else {
      document.getElementById(word).style.boxShadow = '0 12px 10px 0 rgba(0, 0, 0, 0.281), 0 12px 22px 0 rgba(0, 0, 0, 0.304)';
      document.getElementById(word).style.backgroundColor = '#9aff8e';
    }

    document.getElementById(word).style.fontWeight = 'bold';
    if (sessionStorage.getItem("dev") !== "true") {
      setProgress(50);

    } else {
      setProgress(60);
    }
    localStorage.setItem("WortCode", word);
    log("./src/js/wc_set.js", "set_word");
  }, 100);
}
  
//sobald ein Wort ausgewählt wird, deselektire alle andern
function unsetAll() {
  if (localStorage.getItem("darkmode") === "true") {
    darkmodeColor = "#424242";
    document.getElementById("Wolken").style.backgroundColor = darkmodeColor;
    document.getElementById("Freund").style.backgroundColor = darkmodeColor;
    document.getElementById("Blumen").style.backgroundColor = darkmodeColor;
    document.getElementById("Tanzen").style.backgroundColor = darkmodeColor;
    document.getElementById("Ente").style.backgroundColor = darkmodeColor;
    document.getElementById("Stifte").style.backgroundColor = darkmodeColor;
    document.getElementById("Lachen").style.backgroundColor = darkmodeColor;
    document.getElementById("Karton").style.backgroundColor = darkmodeColor;
    document.getElementById("Banane").style.backgroundColor = darkmodeColor;
  } else {
    whitemodeColor = "#ececec";
    document.getElementById("Wolken").style.backgroundColor = whitemodeColor;
    document.getElementById("Freund").style.backgroundColor = whitemodeColor;
    document.getElementById("Blumen").style.backgroundColor = whitemodeColor;
    document.getElementById("Tanzen").style.backgroundColor = whitemodeColor;
    document.getElementById("Ente").style.backgroundColor = whitemodeColor;
    document.getElementById("Stifte").style.backgroundColor = whitemodeColor;
    document.getElementById("Lachen").style.backgroundColor = whitemodeColor;
    document.getElementById("Karton").style.backgroundColor = whitemodeColor;
    document.getElementById("Banane").style.backgroundColor = whitemodeColor;
  }
  document.getElementById("Wolken").style.fontWeight = 'normal';
  document.getElementById("Wolken").style.boxShadow = 'none';
  document.getElementById("Freund").style.fontWeight = 'normal';
  document.getElementById("Freund").style.boxShadow = 'none';
  document.getElementById("Blumen").style.fontWeight = 'normal';
  document.getElementById("Blumen").style.boxShadow = 'none';
  document.getElementById("Tanzen").style.fontWeight = 'normal';
  document.getElementById("Tanzen").style.boxShadow = 'none';
  document.getElementById("Ente").style.fontWeight = 'normal';
  document.getElementById("Ente").style.boxShadow = 'none';
  document.getElementById("Stifte").style.fontWeight = 'normal';
  document.getElementById("Stifte").style.boxShadow = 'none';
  document.getElementById("Lachen").style.fontWeight = 'normal';
  document.getElementById("Lachen").style.boxShadow = 'none';
  document.getElementById("Karton").style.fontWeight = 'normal';
  document.getElementById("Karton").style.boxShadow = 'none';
  document.getElementById("Banane").style.fontWeight = 'normal';
  document.getElementById("Banane").style.boxShadow = 'none';
}