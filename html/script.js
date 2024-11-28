// EdelgaseBtn

let edelgaseActive = false;

function changeEdelgaseColor() {
  const edelgaseElements = document.querySelectorAll(".edelgase");

  edelgaseActive = !edelgaseActive;

  edelgaseElements.forEach((element) => {
    if (edelgaseActive) {
      element.style.boxShadow = "inset 0 0 8px 1px green, 0 0 5px 1px green";
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
      element.style.boxShadow = "inset 0 0 8px 1px rgb(241, 241, 61), 0 0 5px 1px rgb(241, 241, 61)";
      element.classList.add("highlighthalo");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlighthalo");
    }
  });
}
