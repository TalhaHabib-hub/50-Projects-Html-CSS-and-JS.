let boxes = document.querySelectorAll(".box");
let body = document.querySelector("body");
window.addEventListener("scroll", checkboxes);
checkboxes();

function checkboxes() {
  let startEffects = window.innerHeight * 0.8;

  boxes.forEach((element) => {
    let getting = element.getBoundingClientRect().top;
    if (getting < startEffects) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
}
boxes.forEach((element, i) => {
  element.style.backgroundImage = `url(pictures/image${i+1}.jpg)`;
  element.style.backgroundSize = "cover";
});

