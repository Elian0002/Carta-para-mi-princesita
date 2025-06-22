const boton = document.getElementById("abrir-btn");
const sobre = document.getElementById("sobre");
const contenedorCorazones = document.querySelector('.corazones-flotantes');

let abierto = false;
let intervaloCorazones;

boton.addEventListener("click", () => {
  if (!abierto) {
    sobre.classList.add("abierto");
    // Iniciar creación de corazones
    intervaloCorazones = setInterval(crearCorazon, 400);
    abierto = true;
  } else {
    sobre.classList.remove("abierto");
    clearInterval(intervaloCorazones);
    abierto = false;
  }
});

function crearCorazon() {
  const corazon = document.createElement('div');
  corazon.classList.add('corazon-flotante');
  corazon.textContent = '❤️';

  corazon.style.left = Math.random() * 180 + 'px';
  corazon.style.animationDuration = (3 + Math.random() * 2) + 's';

  contenedorCorazones.appendChild(corazon);

  corazon.addEventListener('animationend', () => {
    corazon.remove();
  });
}




