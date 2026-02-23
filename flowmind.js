const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// LOAD SAVED THEME ON START

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
    toggleBtn.innerHTML = savedTheme ==="dark" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}
// TOGGLE THEME

toggleBtn.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");

    if (currentTheme === "dark") {
        body.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark")
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});


// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});


// MOBILE NAV TOGGLE

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("toggle");
});