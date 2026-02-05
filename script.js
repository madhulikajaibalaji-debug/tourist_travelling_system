// Select all sections
const sections = document.querySelectorAll("section");

// Add animation when scrolling
window.addEventListener("scroll", () => {
  sections.forEach(section => {
    if (window.scrollY > section.offsetTop - 400) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});
function openPopup(name, places, price, image) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popup-title").innerText = name;
  document.getElementById("popup-places").innerText = places;
  document.getElementById("popup-price").innerText = "Starting from " + price;
  document.getElementById("popup-img").src = "images/" + image;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
