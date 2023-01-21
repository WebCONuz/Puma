window.onload = function () {
  const header = document.querySelector("#header");
  if (window.scrollY > 0) {
    header.classList.add("top");
  }

  const nav = document.querySelector(".nav");
  const menu = document.querySelector(".nav__list");

  window.addEventListener("scroll", function () {
    nav.classList.toggle("top", window.scrollY > 0);
    header.classList.toggle(
      "top",
      window.scrollY > 0 || barIcon.classList.contains("bi-x-lg")
    );
    menu.classList.toggle("active-scroll", window.scrollY > 0);
  });

  // Menu bars in responsive
  const bar = document.querySelector(".nav__burger");
  const barIcon = document.querySelector(".nav__burger > i");

  bar.addEventListener("click", function () {
    if (barIcon.classList.contains("bi-list")) {
      barIcon.classList.remove("bi-list");
      barIcon.classList.add("bi-x-lg");
      menu.classList.toggle("active");
      header.classList.add("top");
    } else {
      barIcon.classList.add("bi-list");
      barIcon.classList.remove("bi-x-lg");
      menu.classList.toggle("active");
      header.classList.remove("top");
      if (window.scrollY > 0) {
        header.classList.add("top");
      }
    }
  });
};
