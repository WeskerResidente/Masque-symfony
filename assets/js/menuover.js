

document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggleMasques");
    const submenu = document.getElementById("submenuMasques");

    toggleBtn.addEventListener("click", function(e) {
        if (window.innerWidth < 768) {
            e.preventDefault(); // ⛔ On bloque la redirection sur mobile
            submenu.classList.toggle("show");
        }
        // Sinon (desktop), on laisse la redirection se faire normalement
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth >= 768) {
            e.preventDefault();
            submenu.classList.toggle("show");
        }
    });
    console.log('🎯 Menuover OFF');
});
