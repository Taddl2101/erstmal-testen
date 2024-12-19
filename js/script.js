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

states.forEach((state) => {
  window[state] = false;
});

// universelle function zum change color

function changeColor(state, elements, boxShadowColor) {
  window[state] = !window[state];

  elements.forEach((element) => {
    if (window[state]) {
      element.style.boxShadow = boxShadowColor;
      element.classList.add("highlight");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlight");
    }
  });
}

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
    changeColor(
      "alkalimetalleActive",
      alkalimetalleElements,
      "inset 0 0 8px 1px rgb(42, 233, 99), 0 0 5px 1px rgb(42, 233, 99)"
    );
    changeColor(
      "erdalkalimetalleActive",
      erdalkalimetalleElements,
      "inset 0 0 8px 1px rgb(10, 172, 24), 0 0 5px 1px rgb(10, 172, 24)"
    );
    changeColor(
      "übergangsmetalleActive",
      übergangsmetalleElements,
      "inset 0 0 8px 1px rgb(0, 50, 187), 0 0 5px 1px rgb(0, 50, 187)"
    );
    changeColor(
      "metalleActive",
      metalleElements,
      "inset 0 0 8px 3px rgb(95, 0, 95), 0 0 5px 1px rgb(95, 0, 95)"
    );
    changeColor(
      "halbmetalleActive",
      halbmetalleElements,
      "inset 0 0 8px 1px rgb(168, 11, 182), 0 0 5px 1px rgb(168, 11, 182)"
    );
    changeColor(
      "nichtmetalleActive",
      nichtmetalleElements,
      "inset 0 0 8px 1px rgb(207, 15, 15), 0 0 5px 1px rgb(207, 15, 15)"
    );
    changeColor(
      "halogeneActive",
      halogeneElements,
      "inset 0 0 8px 1px rgb(247, 144, 187), 0 0 5px 1px rgb(247, 144, 187)"
    );
    changeColor(
      "edelgaseActive",
      edelgaseElements,
      "inset 0 0 8px 1px rgb(253, 76, 106), 0 0 5px 1px rgb(253, 76, 106)"
    );
    changeColor(
      "actinoideActive",
      actinoideElements,
      "inset 0 0 8px 1px rgb(117, 190, 233), 0 0 5px 1px rgb(117, 190, 233)"
    );
    changeColor(
      "lanthanoideActive",
      lanthanoideElements,
      "inset 0 0 8px 1px rgb(0, 99, 156), 0 0 5px 1px rgb(0, 99, 156)"
    );
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
