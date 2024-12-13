// EdelgaseBtn

let edelgaseActive = false;

function changeEdelgaseColor() {
  const edelgaseElements = document.querySelectorAll(".edelgase");

  edelgaseActive = !edelgaseActive;

  edelgaseElements.forEach((element) => {
    if (edelgaseActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(247, 144, 187), 0 0 5px 1px rgb(247, 144, 187)";
      element.classList.add("highlightedel");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlightedel");
    }
  });
}

// Halogene

let halogeneActive = false;

function changeHalogeneColor() {
  const halogeneElements = document.querySelectorAll(".halogene");

  halogeneActive = !halogeneActive;

  halogeneElements.forEach((element) => {
    if (halogeneActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(253, 76, 106), 0 0 5px 1px rgb(253, 76, 106)";
      element.classList.add("highlighthalo");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlighthalo");
    }
  });
}
// AlkalimetalleBtn

let alkalimetalleActive = false;

function changeAlkalimetalleColor() {
  const alkalimetalleElements = document.querySelectorAll(".alkalimetalle");

  alkalimetalleActive = !alkalimetalleActive;

  alkalimetalleElements.forEach((element) => {
    if (alkalimetalleActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(42, 233, 99), 0 0 5px 1px rgb(42, 233, 99)";
      element.classList.add("highlightedel");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlightedel");
    }
  });
}
// ErdalkalimetalleBtn

let erdalkalimetalleActive = false;

function changeErdalkalimetalleColor() {
  const erdalkalimetalleElements =
    document.querySelectorAll(".erdalkalimetalle");

  erdalkalimetalleActive = !erdalkalimetalleActive;

  erdalkalimetalleElements.forEach((element) => {
    if (erdalkalimetalleActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(10, 172, 24), 0 0 5px 1px rgb(10, 172, 24)";
      element.classList.add("highlightedel");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlightedel");
    }
  });
}
// ÜbergangsmetalleBtn

let übergangsmetalleActive = false;

function changeÜbergangsmetalleColor() {
  const übergangsmetalleElements =
    document.querySelectorAll(".übergangsmetalle");

  übergangsmetalleActive = !übergangsmetalleActive;

  übergangsmetalleElements.forEach((element) => {
    if (übergangsmetalleActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(0, 50, 187), 0 0 5px 1px rgb(0, 50, 187)";
      element.classList.add("highlightedel");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlightedel");
    }
  });
}
// MetalleBtn

let metalleActive = false;

function changeMetalleColor() {
  const metalleElements = document.querySelectorAll(".metalle");

  metalleActive = !metalleActive;

  metalleElements.forEach((element) => {
    if (metalleActive) {
      element.style.boxShadow =
        "inset 0 0 8px 3px rgb(95, 0, 95), 0 0 5px 1px rgb(95, 0, 95)";
      element.classList.add("highlightedel");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlightedel");
    }
  });
}
// HalbmetalleBtn

let halbmetalleActive = false;

function changeHalbmetalleColor() {
  const halbmetalleElements = document.querySelectorAll(".halbmetalle");

  halbmetalleActive = !halbmetalleActive;

  halbmetalleElements.forEach((element) => {
    if (halbmetalleActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(168, 11, 182), 0 0 5px 1px rgb(168, 11, 182)";
      element.classList.add("highlightedel");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlightedel");
    }
  });
}
// NichtmetalleBtn

let nichtmetalleActive = false;

function changeNichtmetalleColor() {
  const nichtmetalleElements = document.querySelectorAll(".nichtmetalle");

  nichtmetalleActive = !nichtmetalleActive;

  nichtmetalleElements.forEach((element) => {
    if (nichtmetalleActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(207, 15, 15), 0 0 5px 1px rgb(207, 15, 15)";
      element.classList.add("highlightedel");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlightedel");
    }
  });
}
// LanthanoideBtn

let lanthanoideActive = false;

function changeLanthanoideColor() {
  const lanthanoideElements = document.querySelectorAll(".lanthanoide");

  lanthanoideActive = !lanthanoideActive;

  lanthanoideElements.forEach((element) => {
    if (lanthanoideActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(0, 99, 156), 0 0 5px 1px rgb(0, 99, 156)";
      element.classList.add("highlightedel");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlightedel");
    }
  });
}
// ActinoideBtn

let actinoideActive = false;

function changeActinoideColor() {
  const actinoideElements = document.querySelectorAll(".actinoide");

  actinoideActive = !actinoideActive;

  actinoideElements.forEach((element) => {
    if (actinoideActive) {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(117, 190, 233), 0 0 5px 1px rgb(117, 190, 233)";
      element.classList.add("highlightedel");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlightedel");
    }
  });
}

/*
!!!LANGWEILIGE VERSION!!!

function changeAlleColorOff() {
  const lanthanoideElements = document.querySelectorAll(".lanthanoide");
  const actinoideElements = document.querySelectorAll(".actinoide");

  if (lanthanoideActive && actinoideActive) {
    lanthanoideElements.forEach((element) => {
      if (lanthanoideActive) {
        element.style.boxShadow = "";
        element.classList.remove("highlightedel");
      }
    });
    actinoideElements.forEach((element) => {
      if (actinoideActive) {
        element.style.boxShadow = "";
        element.classList.remove("highlightedel");
      }
    });
    
    lanthanoideActive = false;
    actinoideActive = false;
  } else {
    actinoideElements.forEach((element) => {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(117, 190, 233), 0 0 5px 1px rgb(117, 190, 233)";
      element.classList.add("highlightedel");
    });
    lanthanoideElements.forEach((element) => {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(0, 99, 156), 0 0 5px 1px rgb(0, 99, 156)";
      element.classList.add("highlightedel");
    });
  }
}
 */

//Alle Btn

function changeAlleColorOff() {
  const lanthanoideElements = document.querySelectorAll(".lanthanoide");
  const actinoideElements = document.querySelectorAll(".actinoide");

  if (lanthanoideActive || actinoideActive) {
    lanthanoideElements.forEach((element) => {
      if (lanthanoideActive) {
        element.style.boxShadow = "";
        element.classList.remove("highlightedel");
      }
    });
    actinoideElements.forEach((element) => {
      if (actinoideActive) {
        element.style.boxShadow = "";
        element.classList.remove("highlightedel");
      }
    });
    lanthanoideActive = false;
    actinoideActive = false;
  } else {
    actinoideElements.forEach((element) => {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(117, 190, 233), 0 0 5px 1px rgb(117, 190, 233)";
      element.classList.add("highlightedel");
    });
    lanthanoideElements.forEach((element) => {
      element.style.boxShadow =
        "inset 0 0 8px 1px rgb(0, 99, 156), 0 0 5px 1px rgb(0, 99, 156)";
      element.classList.add("highlightedel");
    });
    lanthanoideActive = !lanthanoideActive;
    actinoideActive = !actinoideActive;
  }
}
