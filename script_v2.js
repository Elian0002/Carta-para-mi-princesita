document.addEventListener("DOMContentLoaded", () => {
  const botonAbrir = document.getElementById("abrir-btn");
  const sobre = document.getElementById("sobre");

  botonAbrir.addEventListener("click", () => {
    sobre.classList.toggle("abierto");
  });
});

