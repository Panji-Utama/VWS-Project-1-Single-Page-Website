document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.querySelector(".hamburger");
  var navUl = document.querySelector(".nav-container nav ul");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("change");
    navUl.classList.toggle("nav-active");
  });
});
