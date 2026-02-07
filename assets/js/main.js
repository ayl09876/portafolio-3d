// Botón de contacto
const boton = document.getElementById("btn-contacto");

// Fade-in elements
const fadeElements = document.querySelectorAll(".fade-in");

// Seguridad: evitar errores si no existen
if (fadeElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // solo una vez
        }
      });
    },
    {
      threshold: 0.3,
    },
  );

  fadeElements.forEach((el) => observer.observe(el));
}

if (boton) {
  boton.addEventListener("click", () => {
    alert("Gracias por querer contactarme ☕");
  });
}
