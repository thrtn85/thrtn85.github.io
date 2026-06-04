/* ============================================================
   Thrtn85 Solutions — Homepage interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---- Header background on scroll ---- */
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 24) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- Mobile menu ---- */
  var toggle = document.getElementById("menuToggle");
  var menu = document.getElementById("mobileMenu");
  if (toggle && menu) {
    var setMenu = function (open) {
      toggle.classList.toggle("open", open);
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    };
    toggle.addEventListener("click", function () {
      setMenu(!menu.classList.contains("open"));
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
  }

  /* ---- FAQ accordion (service pages only) ----
     Progressive enhancement: answers are visible by default. Only once JS
     runs do we add html.faq-js (which collapses panels) and wire toggles,
     so no-JS users and crawlers still read every answer. */
  var faqItems = document.querySelectorAll(".faq-item");
  if (faqItems.length) {
    document.documentElement.classList.add("faq-js");
    faqItems.forEach(function (item) {
      var btn = item.querySelector(".faq-q");
      if (!btn) return;
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener("click", function () {
        var open = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* ---- Smooth anchor offset for fixed header ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id === "#" || id === "#top") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var y = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });

  /* ---- Reveal on scroll (fade + rise, once on first pass) ----
     Content is only hidden when JS runs (html.js-reveal) and motion is
     allowed, so no-JS / crawlers / reduced-motion users always see it. */
  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    document.documentElement.classList.add("js-reveal");

    // Curated set: everything below the hero. Grid children get a stagger.
    var groups = [
      { sel: ".logo-strip .eyebrow, .logo-row .logo-item" },
      { sel: ".services .section-head, .services-grid .svc-card", stagger: true },
      { sel: ".pricing .section-head-row, .pricing-grid .price-card, .pricing-note", stagger: true },
      { sel: ".work .section-head-row, .work-grid .work-card", stagger: true },
      { sel: ".why .eyebrow, .why-intro, .why-items .why-item", stagger: true },
      { sel: ".testi-inner" },
      { sel: ".final-left, .final-feats .final-feat, .final-cta .btn", stagger: true },
      { sel: ".footer-top > *, .footer-bottom" }
    ];

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target); // first pass only
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });

    groups.forEach(function (group) {
      var els = document.querySelectorAll(group.sel);
      els.forEach(function (el, i) {
        el.classList.add("reveal");
        if (group.stagger) {
          // Cap the delay so long grids don't lag; reset per group.
          el.style.setProperty("--reveal-delay", Math.min(i, 6) * 70 + "ms");
        }
        observer.observe(el);
      });
    });
  }
})();
