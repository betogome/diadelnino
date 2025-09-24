// Toggle del menú lateral en móviles
const toggleBtn = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('#sidebar');

if (toggleBtn && sidebar) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Cerrar al hacer click en un enlace (UX)
  sidebar.addEventListener('click', (e) => {
    if (e.target.matches('a') && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// Validación simple del formulario de contacto y “envío” simulado
const form = document.querySelector('#contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = form.nombre;
    const email = form.email;
    const mensaje = form.mensaje;
    const status = document.querySelector('#formStatus');

    // Limpia errores
    form.querySelectorAll('.error').forEach(el => el.textContent = '');

    let ok = true;

    if (!nombre.value.trim()) {
      nombre.nextElementSibling.textContent = 'Por favor, escribe tu nombre.';
      ok = false;
    }
    if (!email.validity.valid) {
      email.nextElementSibling.textContent = 'Ingresa un correo válido.';
      ok = false;
    }
    if (!mensaje.value.trim()) {
      mensaje.nextElementSibling.textContent = 'Cuéntanos tu idea o mensaje.';
      ok = false;
    }

    if (!ok) return;

    // Simulación de envío: podrías reemplazar por fetch a tu backend
    // fetch('/api/contacto', { method:'POST', body: new FormData(form) })
    //   .then(...)
    setTimeout(() => {
      status.textContent = '¡Gracias! Tu mensaje fue enviado con éxito 🎉';
      form.reset();
    }, 500);
  });
}
