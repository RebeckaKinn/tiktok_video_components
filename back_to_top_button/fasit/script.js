// Funksjon som lager knappen
function backToTopButton() {
  return /*HTML*/ `
    <button onclick="scrollToTop()">
      &#11165; Top
    </button>
  `;
}

// Setter inn knappen i container
const container = document.getElementById("backToTopContainer");
container.innerHTML = backToTopButton();

// Funksjon for smooth scroll
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Viser knappen når du scroller ned
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    container.classList.add("show");
  } else {
    container.classList.remove("show");
  }
});
