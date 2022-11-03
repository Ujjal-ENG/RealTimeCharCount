const textboxEl = document.getElementById("textbox");
const countEl = document.getElementById("total-count");
const remainEl = document.getElementById("total-remaining");

textboxEl.addEventListener("keyup", (e) => {
  updateCounter();
});

const updateCounter = () => {
  countEl.innerText = textboxEl.value.length;
  remainEl.innerText =
    textboxEl.getAttribute("maxLength") - textboxEl.value.length;
};
