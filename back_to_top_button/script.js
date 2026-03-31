function backToTopButton() {
  return /*HTML*/ `
        <button onclick="scrollToTop()">&#11165; Top</button>
    `;
}
const container = document.getElementById("backToTopContainer");
container.innerHTML = backToTopButton();

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    container.classList.add("show");
  } else {
    container.classList.remove("show");
  }
});
