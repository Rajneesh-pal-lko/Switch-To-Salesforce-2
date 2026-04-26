document.addEventListener("DOMContentLoaded", () => {
  const yearNode = document.createElement("small");
  yearNode.textContent = `\u00A9 ${new Date().getFullYear()} Switch To Salesforce`;
  yearNode.style.display = "block";
  yearNode.style.marginTop = "1.5rem";
  yearNode.style.color = "#9cadde";

  const container = document.querySelector(".container");
  if (container) {
    container.appendChild(yearNode);
  }
});
