function contactar() {
  const url = "https://wa.me/5218135092997";
  const nuevaPestana = window.open(url, "_blank");

  // Si el navegador bloquea la ventana emergente, redirige en la misma pestaña
  if (!nuevaPestana) {
    window.location.href = url;
  }
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