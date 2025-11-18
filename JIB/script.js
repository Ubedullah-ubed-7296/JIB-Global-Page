// Mobile dropdown toggle
document.querySelectorAll(".dropdown > a").forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const list = btn.nextElementSibling;
            list.style.display = list.style.display === "flex" ? "none" : "flex";
        }
    });
});


ScrollReveal({
  distance: "120px",
  duration: 2000,
  delay: 160,
});

ScrollReveal().reveal("section .box,section .flowing-border", {
  origin: "left",
});

ScrollReveal().reveal("h2", {
  origin: "top",
});

ScrollReveal().reveal("#why p, #contact p", {
  origin: "bottom",
});