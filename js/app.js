window.onload = function () {
  const header = document.querySelector("#header");
  const nav = document.querySelector(".nav");
  if (window.scrollY > 0) {
    header.classList.add("top");
    nav.classList.add("top");
  }

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

// --------------------------------------------------------------------------
// ------------------------------ Owl-Carousel ------------------------------
// --------------------------------------------------------------------------

$(window).on("load", function () {
  var owl = $(".home-carousel");
  owl.owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  var owl2 = $(".gallery__carousel");
  owl2.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 2,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });

  var owl3 = $(".testimonials__container--slider");
  owl3.owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    margin: 2,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});
