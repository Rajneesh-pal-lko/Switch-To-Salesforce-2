document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  sections.forEach((section) => observer.observe(section));

  const form = document.querySelector("#lead-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button[type='submit']");
      if (!button) return;
      const oldText = button.textContent;
      button.textContent = "Submitted";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = oldText;
        button.disabled = false;
      }, 2000);
    });
  }
});
