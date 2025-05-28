// main.js

window.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");

  if (!toggleBtn) {
    console.error("Toggle button with ID 'toggleBtn' not found.");
    return;
  }

  // Apply saved theme on page load
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
  }

  // Toggle dark/light mode on click
  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
