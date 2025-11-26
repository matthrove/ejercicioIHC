// Selecciona el botón de libro
const btn = document.querySelector(".menu-toggle");

// Selecciona el panel de contenido
const panelContent = document.querySelector(".panel-content");
const headerPanel = document.querySelector(".header-panel");

// Al hacer clic en el botón de libro
if (btn && panelContent) {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    // Alterna la clase "active" en el panel
    panelContent.classList.toggle("active");
  });

  // Cerrar el panel al hacer click fuera de él
  document.addEventListener("click", (e) => {
    // Si el panel está activo y se hace click fuera, cerrarlo
    if (panelContent.classList.contains("active")) {
      if (!headerPanel.contains(e.target)) {
        panelContent.classList.remove("active");
      }
    }
  });

  // El hover funciona automáticamente en desktop cuando el panel NO está activo
  // Cuando está activo (por click), se mantiene abierto hasta que se haga click fuera
}
