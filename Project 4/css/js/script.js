// JavaScript for interactive behavior

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    // Sticky header effect
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.background = "rgba(0, 0, 0, 0.95)";
            header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.5)";
        } else {
            header.style.background = "rgba(0, 0, 0, 0.8)";
            header.style.boxShadow = "none";
        }
    });

    // Smooth scrolling for internal links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
