const btnNavEl = document.querySelector(".mobile__nav_btn");
const listingEl = document.querySelector(".listings_items");

btnNavEl.addEventListener("click", function () {
  listingEl.classList.toggle("nav-open");
});
