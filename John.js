function name(params) {
  // ...existing code...
}

function toggleMenu() {
  const menu = document.querySelector(".dropdown");
  const icon = document.querySelector(".hamburg");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function cancel() {
  const menu = document.querySelector(".dropdown");
  const icon = document.querySelector(".hamburg");
  menu.classList.remove("open");
  icon.classList.remove("open");
}

document.querySelector(".hamburg").addEventListener("click", toggleMenu);
document.querySelector(".cancel").addEventListener("click", cancel);

// Ensure the menu closes when clicking outside of it
document.addEventListener("click", (event) => {
  const menu = document.querySelector(".dropdown");
  const icon = document.querySelector(".hamburg");
  if (!menu.contains(event.target) && !icon.contains(event.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const typewriterText = document.querySelector(".typewriter-text");
  const words = ["Developer", "Designer", "Freelancer"];
  let wordIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < words[wordIndex].length) {
      typewriterText.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 200);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typewriterText.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 100);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 200);
    }
  }

  type();

  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeIn 1s ease-in-out";
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});