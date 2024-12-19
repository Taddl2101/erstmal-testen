const alleElemente = document.querySelectorAll(".element");
const alkalimetalleElements = document.querySelectorAll(".alkalimetalle");
const erdalkalimetalleElements = document.querySelectorAll(".erdalkalimetalle");
const übergangsmetalleElements = document.querySelectorAll(".übergangsmetalle");
const metalleElements = document.querySelectorAll(".metalle");
const halbmetalleElements = document.querySelectorAll(".halbmetalle");
const nichtmetalleElements = document.querySelectorAll(".nichtmetalle");
const halogeneElements = document.querySelectorAll(".halogene");
const edelgaseElements = document.querySelectorAll(".edelgase");
const lanthanoideElements = document.querySelectorAll(".lanthanoide");
const actinoideElements = document.querySelectorAll(".actinoide");

const states = [
  "alkalimetalleActive",
  "erdalkalimetalleActive",
  "übergangsmetalleActive",
  "metalleActive",
  "halbmetalleActive",
  "nichtmetalleActive",
  "halogeneActive",
  "edelgaseActive",
  "lanthanoideActive",
  "actinoideActive",
];

// EdelgaseBtn

let edelgaseActive = false;

function changeEdelgaseColor() { 
  edelgaseActive = !edelgaseActive;

  edelgaseElements.forEach((element) => {
    if (edelgaseActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(247, 144, 187), 0 0 5px 1px rgb(247, 144, 187)";
      element.classList.add("highlight");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlight");
    }
  });
}

// Halogene

let halogeneActive = false;

function changeHalogeneColor() {
  halogeneActive = !halogeneActive;

  halogeneElements.forEach((element) => {
    if (halogeneActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(253, 76, 106), 0 0 5px 1px rgb(253, 76, 106)";
      element.classList.add("highlight");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlight");
    }
  });
}
// AlkalimetalleBtn

let alkalimetalleActive = false;

function changeAlkalimetalleColor() {
  alkalimetalleActive = !alkalimetalleActive;

  alkalimetalleElements.forEach((element) => {
    if (alkalimetalleActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(42, 233, 99), 0 0 5px 1px rgb(42, 233, 99)";
      element.classList.add("highlight");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlight");
    }
  });
}
// ErdalkalimetalleBtn

let erdalkalimetalleActive = false;

function changeErdalkalimetalleColor() {
  erdalkalimetalleActive = !erdalkalimetalleActive;

  erdalkalimetalleElements.forEach((element) => {
    if (erdalkalimetalleActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(10, 172, 24), 0 0 5px 1px rgb(10, 172, 24)";
      element.classList.add("highlight");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlight");
    }
  });
}
// ÜbergangsmetalleBtn

let übergangsmetalleActive = false;

function changeÜbergangsmetalleColor() {
  übergangsmetalleActive = !übergangsmetalleActive;

  übergangsmetalleElements.forEach((element) => {
    if (übergangsmetalleActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(0, 50, 187), 0 0 5px 1px rgb(0, 50, 187)";
      element.classList.add("highlight");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlight");
    }
  });
}
// MetalleBtn

let metalleActive = false;

function changeMetalleColor() {
  metalleActive = !metalleActive;

  metalleElements.forEach((element) => {
    if (metalleActive) {
      element.style.boxShadow =
        "inset 0 0 8px 3px rgb(95, 0, 95), 0 0 5px 1px rgb(95, 0, 95)";
      element.classList.add("highlight");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlight");
    }
  });
}
// HalbmetalleBtn

let halbmetalleActive = false;

function changeHalbmetalleColor() {
  halbmetalleActive = !halbmetalleActive;

  halbmetalleElements.forEach((element) => {
    if (halbmetalleActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(168, 11, 182), 0 0 5px 1px rgb(168, 11, 182)";
      element.classList.add("highlight");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlight");
    }
  });
}
// NichtmetalleBtn

let nichtmetalleActive = false;

function changeNichtmetalleColor() {
  nichtmetalleActive = !nichtmetalleActive;

  nichtmetalleElements.forEach((element) => {
    if (nichtmetalleActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(207, 15, 15), 0 0 5px 1px rgb(207, 15, 15)";
      element.classList.add("highlight");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlight");
    }
  });
}
// LanthanoideBtn

let lanthanoideActive = false;

function changeLanthanoideColor() {
  lanthanoideActive = !lanthanoideActive;

  lanthanoideElements.forEach((element) => {
    if (lanthanoideActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(0, 99, 156), 0 0 5px 1px rgb(0, 99, 156)";
      element.classList.add("highlight");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlight");
    }
  });
}
// ActinoideBtn

let actinoideActive = false;

function changeActinoideColor() {
  actinoideActive = !actinoideActive;

  actinoideElements.forEach((element) => {
    if (actinoideActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(117, 190, 233), 0 0 5px 1px rgb(117, 190, 233)";
      element.classList.add("highlight");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlight");
    }
  });
}

//AlleBtn

// const aktive = ; const muss einem festen wert zugewiesen werden => deswegen ging gestern der code nicht 
function changeAlleColor() {
  alleElemente.forEach((element) => {
    element.style.boxShadow = "";
    element.classList.remove("highlight");
  });

  setTimeout(() => {
    alkalimetalleElements.forEach((element) => {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(42, 233, 99), 0 0 5px 1px rgb(42, 233, 99)";
      element.classList.add("highlight");
    });
    erdalkalimetalleElements.forEach((element) => {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(10, 172, 24), 0 0 5px 1px rgb(10, 172, 24)";
      element.classList.add("highlight");
    });
    übergangsmetalleElements.forEach((element) => {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(0, 50, 187), 0 0 5px 1px rgb(0, 50, 187)";
      element.classList.add("highlight");
    });
    metalleElements.forEach((element) => {
      element.style.boxShadow =
        "inset 0 0 8px 3px rgb(95, 0, 95), 0 0 5px 1px rgb(95, 0, 95)";
      element.classList.add("highlight");
    });
    halbmetalleElements.forEach((element) => {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(168, 11, 182), 0 0 5px 1px rgb(168, 11, 182)";
      element.classList.add("highlight");
    });
    nichtmetalleElements.forEach((element) => {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(207, 15, 15), 0 0 5px 1px rgb(207, 15, 15)";
      element.classList.add("highlight");
    });
    halogeneElements.forEach((element) => {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(247, 144, 187), 0 0 5px 1px rgb(247, 144, 187)";
      element.classList.add("highlight");
    });
    edelgaseElements.forEach((element) => {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(253, 76, 106), 0 0 5px 1px rgb(253, 76, 106)";
      element.classList.add("highlight");
    });
    actinoideElements.forEach((element) => {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(117, 190, 233), 0 0 5px 1px rgb(117, 190, 233)";
      element.classList.add("highlight");
    });
    lanthanoideElements.forEach((element) => {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(0, 99, 156), 0 0 5px 1px rgb(0, 99, 156)";
      element.classList.add("highlight");
    });
  }, 300);

  // aus array auf jeden einzeln zustände zugreifen

  states.forEach((state) => {
    if (window[state]) {
      window[state] = !window[state];
    }
  });
}

//offBtn

function reset() {
  alleElemente.forEach((element) => {
    element.style.boxShadow = "";
    element.classList.remove("highlight");
  });

  // aus array auf jeden einzeln zustände zugreifen

  states.forEach((state) => {
    if (window[state]) {
      window[state] = !window[state];
    }
  });
}
