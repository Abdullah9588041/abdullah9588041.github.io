// Mobile nav toggle + active section highlighting. No dependencies.
(function () {
  "use strict";

  // Mobile navigation
  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Active nav highlighting via IntersectionObserver
  var navAnchors = document.querySelectorAll(".nav-links a[data-nav]");
  var sections = [];
  navAnchors.forEach(function (a) {
    var el = document.getElementById(a.getAttribute("data-nav"));
    if (el) sections.push({ id: a.getAttribute("data-nav"), el: el, anchor: a });
  });

  function setActive(id) {
    navAnchors.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav") === id);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(function (s) { observer.observe(s.el); });
  }

  // Current year in footer
  var year = new Date().getFullYear();
  var footer = document.querySelector(".site-footer p");
  if (footer) footer.textContent = footer.textContent.replace("2026", String(year));
})();
