const boton = document.getElementById("abrir-btn");
const papel = document.getElementById("papel");
const sobre = document.getElementById("sobre");

let abierto = false;

boton.addEventListener("click", () => {
  if (!abierto) {
    papel.style.transform = "translateY(0)";
    sobre.style.transform = "rotateX(10deg)";
    abierto = true;
  } else {
    papel.style.transform = "translateY(200px)";
    sobre.style.transform = "rotateX(0)";
    abierto = false;
  }
});


