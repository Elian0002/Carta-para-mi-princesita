const boton = document.getElementById("abrir-btn");
const papel = document.getElementById("papel");
const sobre = document.getElementById("sobre");
const contenedorCorazones = document.querySelector('.corazones-flotantes');

let abierto = false;
let intervaloCorazones;

boton.addEventListener("click", () => {
  if (!abierto) {
    papel.style.transform = "translateY(0)";
    sobre.style.transform = "rotateX(10deg)";
    abierto = true;

    // Iniciar creación de corazones
    intervaloCorazones = setInterval(crearCorazon, 400);

  } else {
    papel.style.transform = "translateY(200px)";
    sobre.style.transform = "rotateX(0)";
    abierto = false;

    // Detener creación de corazones
    clearInterval(intervaloCorazones);
  }
});

function crearCorazon() {
  const corazon = document.createElement('div');
  corazon.classList.add('corazon-flotante');
  corazon.textContent = '❤️';

  // Posición horizontal aleatoria dentro del contenedor
  corazon.style.left = Math.random() * 180 + 'px';

  // Duración aleatoria para que la animación no sea igual en todos
  corazon.style.animationDuration = (3 + Math.random() * 2) + 's';

  // Añadir al contenedor
  contenedorCorazones.appendChild(corazon);

  // Remover después de que termine la animación para limpiar DOM
  corazon.addEventListener('animationend', () => {
    corazon.remove();
  });
}



