// main.js — Shared utilities and navigation injection

(function () {
  "use strict";

  // Inject nav and footer from external snippets if elements exist
  function injectSnippet(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load " + url);
        return res.text();
      })
      .then((html) => {
        el.innerHTML = html;
        highlightCurrentNav();
      })
      .catch(() => {
        // Silently fail; pages should still work
      });
  }

  function highlightCurrentNav() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav.site-nav a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href === path || (path === "" && href === "index.html")) {
        a.classList.add("active");
      }
    });
  }

  function updateYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", () => {
    injectSnippet("#nav-placeholder", "partials/nav.html");
    injectSnippet("#footer-placeholder", "partials/footer.html");
    updateYear();
  });

  // Utility: typewriter effect
  window.typeWriter = function (element, text, speed = 35, callback) {
    let i = 0;
    element.textContent = "";
    function tick() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(tick, speed + Math.random() * 20);
      } else if (callback) {
        callback();
      }
    }
    tick();
  };

  // Utility: sequential reveal of child elements
  window.revealSequence = function (containerSelector, childSelector, baseDelay = 200) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const children = container.querySelectorAll(childSelector);
    children.forEach((child, idx) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(6px)";
      setTimeout(() => {
        child.style.transition = "opacity 0.35s ease, transform 0.35s ease";
        child.style.opacity = "1";
        child.style.transform = "translateY(0)";
      }, baseDelay * idx);
    });
  };
})();
