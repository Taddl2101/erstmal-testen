// EdelgaseBtn

let edelgaseActive = false;

function changeEdelgaseColor() {
  const edelgaseElements = document.querySelectorAll(".edelgase");

  edelgaseActive = !edelgaseActive;

  edelgaseElements.forEach((element) => {
    if (edelgaseActive) {
      element.style.boxShadow = "inset 0 0 10px 1px green, 0 0 15px 1px green";
      element.classList.add("highlight");
    } else {
      element.style.boxShadow = "";
      element.classList.remove("highlight");
    }
  });
}
//
