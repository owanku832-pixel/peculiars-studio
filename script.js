const BUSINESS_EMAIL = "ADD_YOUR_EMAIL_HERE";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("story-form").addEventListener("submit", event => {
  event.preventDefault();

  if (BUSINESS_EMAIL === "ADD_YOUR_EMAIL_HERE") {
    alert("Please add your business email in script.js first.");
    return;
  }

  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Peculiar's Studio — Story Enquiry");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\nStory idea:\n${data.get("idea")}`
  );

  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
