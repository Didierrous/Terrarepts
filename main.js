// main.js

// FUNCIÓN PARA ABRIR WHATSAPP
function contactar() {
  // Número de WhatsApp en formato internacional correcto (México)
  // Solo funciona si el número es un celular con WhatsApp
  window.open("https://wa.me/5218135092997", "_blank");
}

// SCROLL SUAVE PARA EL MENÚ
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {  // Verifica que exista el destino
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// EFECTO AL HACER SCROLL (NAVBAR)
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#020617";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});