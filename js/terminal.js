// terminal.js — Boot sequence and terminal-specific effects

(function () {
  "use strict";

  const BOOT_LINES = [
    { text: "GETTING CREATIVE...", delay: 0 },
    { text: "WHAT DO I LIKE...", delay: 400 },
    { text: "  [OK] games", delay: 600 },
    { text: "  [OK] motorcycles", delay: 800 },
    { text: "  [OK] table tops", delay: 1000 },
    { text: "  [OK] animals", delay: 1200 },
    { text: "HUD IN GAMES ARE COOL...", delay: 1600 },
    { text: "  [OK] /skyrim", delay: 1800 },
    { text: "  [OK] /witcher", delay: 2000 },
    { text: "  [OK] /rdr2", delay: 2200 },
    { text: "  [OK] /fallout", delay: 2400 },
    { text: "VAULT-TEC terminals hit home...", delay: 2800 },
    { text: "  [DANGER] WHAT IF I MAKE A GAME...", delay: 3200 },
    { text: "", delay: 3500 },
    { text: "HELLO, FRIEND :)", delay: 3700 },
    { text: "", delay: 3900 },
  ];

  function runBootSequence(containerId, onComplete) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";
    BOOT_LINES.forEach((line) => {
      const div = document.createElement("div");
      div.style.opacity = "0";
      div.style.whiteSpace = "pre-wrap";
      div.style.minHeight = "1.2em";
      container.appendChild(div);

      setTimeout(() => {
        div.style.transition = "opacity 0.15s";
        div.style.opacity = "1";
        if (line.text) {
          typeLine(div, line.text, 18);
        }
      }, line.delay);
    });

    const lastDelay = BOOT_LINES[BOOT_LINES.length - 1].delay + 400;
    setTimeout(() => {
      if (onComplete) onComplete();
    }, lastDelay);
  }

  function typeLine(element, text, speed) {
    let i = 0;
    function tick() {
      if (i <= text.length) {
        element.textContent = text.slice(0, i);
        i++;
        setTimeout(tick, speed + Math.random() * 15);
      }
    }
    tick();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const bootContainer = document.getElementById("boot-sequence");
    const menuContainer = document.getElementById("main-menu");

    if (bootContainer && menuContainer) {
      menuContainer.style.display = "none";
      runBootSequence("boot-sequence", () => {
        menuContainer.style.display = "block";
        menuContainer.style.opacity = "0";
        // Trigger reflow
        void menuContainer.offsetWidth;
        menuContainer.style.transition = "opacity 0.6s ease";
        menuContainer.style.opacity = "1";

        // Fade in menu items sequentially
        const items = menuContainer.querySelectorAll(".menu-item");
        items.forEach((item, idx) => {
          item.style.opacity = "0";
          item.style.transform = "translateX(-10px)";
          setTimeout(() => {
            item.style.transition = "opacity 0.35s ease, transform 0.35s ease";
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
          }, 200 + idx * 180);
        });
      });
    }
  });

  // Optional: random glitch on elements with data-glitch
  document.addEventListener("DOMContentLoaded", () => {
    const glitchEls = document.querySelectorAll("[data-glitch]");
    glitchEls.forEach((el) => {
      setInterval(() => {
        if (Math.random() > 0.92) {
          el.style.textShadow = "2px 0 var(--alert), -2px 0 var(--phosphor)";
          setTimeout(() => {
            el.style.textShadow = "";
          }, 120);
        }
      }, 800);
    });
  });
})();
