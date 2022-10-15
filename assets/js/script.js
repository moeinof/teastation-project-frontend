// -------------------- navbar
const navOpenBtn = document.querySelector("#nav-open-btn");
const navCloseBtn = document.querySelector("#nav-close-btn");
const navbar = document.querySelector("#navbar");

navOpenBtn.addEventListener("click", () => {
  navbar.classList.toggle("openNav");
});

navCloseBtn.addEventListener("click", () => {
  navbar.classList.toggle("openNav");
});

// -------------------- form
const submitFromBtn = document.querySelector("#submit");

submitFromBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
