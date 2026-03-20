// main.js
document.addEventListener("DOMContentLoaded", () => {

  // SCROLL SUAVE PARA EL MENÚ
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // EFECTO AL HACER SCROLL (NAVBAR)
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.style.backgroundColor = window.scrollY > 50 ? "#020617" : "transparent";
    }
  });

});