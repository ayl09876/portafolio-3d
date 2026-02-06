const boton = document.getElementById("btn-contacto");
const texto = document.querySelector(".fade-in");

window.addEventListener("load", () => {
  texto.classList.add("visible");
});

boton.addEventListener("click", () => {
  alert("Gracias por querer contactarme ☕");
});
