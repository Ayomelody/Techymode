// ====== Mobile Menu Toggle ======
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav ul");
    const menuBtn = document.createElement("button");

    menuBtn.textContent = "☰ Menu";
    menuBtn.classList.add("menu-btn");

    // Insert menu button for mobile
    document.querySelector("nav .container").insertBefore(menuBtn, nav);

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
    });
});
