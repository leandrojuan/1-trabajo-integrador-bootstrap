document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactoForm");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valido = true;

    // Validar nombre (solo letras y espacios)
    const regexNombre = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
    if (!regexNombre.test(nombre.value.trim())) {
      nombre.classList.add("is-invalid");
      valido = false;
    } else {
      nombre.classList.remove("is-invalid");
      nombre.classList.add("is-valid");
    }

    // Validar email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value.trim())) {
      email.classList.add("is-invalid");
      valido = false;
    } else {
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
    }

    // Validar mensaje (mínimo 10 caracteres y solo letras/espacios)
    const regexMensaje = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{10,}$/;
    if (!regexMensaje.test(mensaje.value.trim())) {
      mensaje.classList.add("is-invalid");
      valido = false;
    } else {
      mensaje.classList.remove("is-invalid");
      mensaje.classList.add("is-valid");
    }

    // Si todo es válido
    if (valido) {
      alert("Formulario enviado correctamente ✅");
      form.reset();
      nombre.classList.remove("is-valid");
      email.classList.remove("is-valid");
      mensaje.classList.remove("is-valid");
    }
  });
});
