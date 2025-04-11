document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("fullMenu").classList.toggle("active");
    });
document.querySelectorAll(".full-menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("fullMenu").classList.remove("active");
    });
    });
document.getElementById("menuClose").addEventListener("click", () => {
    document.getElementById("fullMenu").classList.remove("active");
    });
      
    