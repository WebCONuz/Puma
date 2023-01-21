const header = document.querySelector("#header");
const nav = document.querySelector(".nav");

window.addEventListener("scroll", function () {
  nav.classList.toggle("top", window.scrollY > 0);
  header.classList.toggle("top", window.scrollY > 0);
});

// Menu bars in responsive
const bar = document.querySelector(".nav__burger");
const barIcon = document.querySelector(".nav__burger > i");

bar.addEventListener("click", function () {
  if (barIcon.classList.contains("bi-list")) {
    barIcon.classList.remove("bi-list");
    barIcon.classList.add("bi-x-lg");
  } else {
    barIcon.classList.add("bi-list");
    barIcon.classList.remove("bi-x-lg");
  }
});
